import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Request } from 'express';
import { UpdateOrderDto } from './update-order.dto';
import { Prisma } from '@prisma/client';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class OrderService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {}

  async checkout(req: Request) {
    try {
      const cart = await this.prismaService.cart.findUnique({
        where: {
          userId: req.user!.userId,
        },
        include: {
          items: true,
        },
      });

      if (!cart) throw new NotFoundException('No Cart Found!');

      await this.prismaService.order.create({
        data: {
          userId: req.user!.userId,
          items: {
            create: cart.items.map((item) => {
              return {
                variantId: item.variantId,
                quantity: item.quantity,
              };
            }),
          },
          shippingAddressId: cart.shippingAddressId,
          totalTaxes: cart.totalTaxes,
          totalDiscounts: cart.totalDiscounts,
          totalSgst: cart.totalSgst,
          totalCgst: cart.totalCgst,
          totalIgst: cart.totalIgst,
          subTotal: cart.subTotal,
        },
      });
      this.logger.info('Successfully Placed a Order');
      return {
        message: 'Successfully Placed a Order',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(
          e,
          'Cannot find specified VariantId/ShippingAddress!',
        );
        throw e;
      }
      this.logger.error(e, 'Checkout Service Failed');
      throw new InternalServerErrorException('Internal Server Error!');
    }
  }

  async getAllOrders(req: Request) {
    try {
      const orders = await this.prismaService.order.findMany({
        where: {
          userId: req.user!.userId,
          deletedAt: null,
        },
      });
      this.logger.info('Successfully Fetched all the Valid Orders');
      return {
        message: 'Successfully Fetched All the Valid Orders.',
        orders,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No User Found with the provided ID!');
        throw new NotFoundException('No User Found with the provided ID!');
      }
      this.logger.error(e, 'Get All Orders Service Failed');
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }
  async updateOrder(orderId: string, updateOrderBody: UpdateOrderDto) {
    try {
      const updatedOrder = await this.prismaService.order.update({
        where: {
          id: orderId,
        },
        data: {
          status: updateOrderBody.status,
        },
      });
      this.logger.info('Successfully Updated the Order!');
      return {
        message: 'Successfully Updated the Order!',
        updatedOrder,
      };
    } catch (e) {
      console.error(e);
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No Order with this ID Found!');
        throw new NotFoundException('No Order with this Id Found!');
      }
      throw new InternalServerErrorException('Update Order Service Failed!');
    }
  }

  async deleteOrder(orderId: string) {
    try {
      const deletedOrder = await this.prismaService.order.update({
        where: {
          id: orderId,
        },
        data: {
          deletedAt: new Date(),
        },
      });

      this.logger.info('Successfully Deleted the Order!');
      return {
        message: 'Successfully Deleted the Order!',
        order: deletedOrder,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No Order Found with the given ID!');
        throw new NotFoundException('No Order Found with the given ID!');
      }
      throw new InternalServerErrorException('DeleteOrder Service Failed!');
    }
  }
}
