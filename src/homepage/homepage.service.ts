import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Banner, Category, Product } from 'generated/prisma';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class HomepageService {
  constructor(
    private prisma: PrismaService,
    private readonly logger: PinoLogger,
  ) {}

  async getWidgets() {
    try {
      const widgets = await this.prisma.homepageWidget.findMany({
        orderBy: { order: 'asc' },
        include: {
          widgetItems: true,
        },
      });

      const populatedWidgets = await Promise.all(
        widgets.map(async (widget) => {
          const widgetItems = await Promise.all(
            widget.widgetItems.map(async (widgetItem) => {
              let items: Product | Category | Banner | null = null;

              if (widgetItem.type === 'PRODUCT') {
                items = await this.prisma.product.findUnique({
                  where: {
                    id: widgetItem.itemId,
                  },
                });
              } else if (widgetItem.type === 'CATEGORY') {
                items = await this.prisma.category.findUnique({
                  where: {
                    id: widgetItem.itemId,
                  },
                });
              } else if (widgetItem.type === 'BANNER') {
                items = await this.prisma.banner.findUnique({
                  where: {
                    id: widgetItem.itemId,
                  },
                });
              }

              return {
                ...widgetItem,
                items,
              };
            }),
          );

          return {
            ...widget,
            widgetItems,
          };
        }),
      );
      this.logger.info('Successfully fetched the widgets for the Homepage');
      return populatedWidgets;
    } catch (e) {
      this.logger.error(e, 'Get Widgets Service Failed!');
      throw e;
    }
  }
}
