import { Injectable, InternalServerErrorException, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';
import { PrismaService } from 'src/prisma.service';
import { Request } from 'express';
import { UpdateOrderDto } from './update-order.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  async createOrder(createOrderBody: CreateOrderDto, req: Request) {
    try {
      let total = createOrderBody.items.reduce((accumulator,currentOrderItem)=> accumulator + currentOrderItem.price*currentOrderItem.quantity,0);
      let orderDataObj = {
        user: {
          connect: {
            id: req.user!.userId,
          },
        },
        total,
        status: createOrderBody.status,
        items: {
          create: createOrderBody.items
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

  async getAllOrders(req: Request){
    try{
      const orders = await this.prismaService.order.findMany({
        where: {
          userId: req.user!.userId,
          deletedAt: null
        }
      });
      return {
        message: "Successfully Fetched All the Valid Orders.",
        orders
      }
    }
    catch(e){
      if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
        throw new NotFoundException('No User Found with the provided ID!')
      }
      throw new InternalServerErrorException('OOPS, Something Went Wrong!')
    }
  }
  async updateOrder(orderId: string, updateOrderBody: UpdateOrderDto) {
    try{
      const updatedOrder = await this.prismaService.order.update({
        where: {
          id: orderId
        },
        data: {
          status: updateOrderBody.status
        }
      });

      return {
        message: "Successfully Updated the Order!",
        updatedOrder
      }
    }
    catch(e){
      console.error(e);
      if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
        throw new NotFoundException('No Order with this Id Found!');
      }
      throw new InternalServerErrorException('OOPS, Something Went Wrong!')
    }
  }

  async deleteOrder(orderId: string){
    try{
      const deletedOrder = await this.prismaService.order.update({
        where: {
          id: orderId
        },
        data: {
          deletedAt: new Date()
        }
      });

      return {
        message: "Successfully Deleted the Order!",
        order: deletedOrder
      }
    } 
    catch(e){
      if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
        throw new NotFoundException('No Order Found with the given ID!')
      }
        throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }
}
