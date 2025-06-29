import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  async createOrder(createOrderBody: CreateOrderDto) {
    try {
      let orderDataObj = {
        user: {
          connect: {
            id: createOrderBody.userId,
          },
        },
        total: createOrderBody.total,
        status: createOrderBody.status,
        items: {
          connect: createOrderBody.itemsIds.map((itemId) => ({ id: itemId })),
        },
      };

      const order = await this.prismaService.order.create({
        data: orderDataObj,
      });
      return {
        message: 'Successfully placed the Order!',
        createdOrder: order,
      };
    } catch (e) {
      throw e;
    }
  }
}
