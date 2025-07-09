import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShippingAddressDto } from './create-shipping-address.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ShippingAddressService {
  constructor(private prismaService: PrismaService) {}

  async createShippingAddress(
    userId: string,
    shippingAddressData: ShippingAddressDto,
  ) {
    try {
      const shippingAddress = await this.prismaService.shippingAddress.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          fullName: shippingAddressData.fullName,
          address1: shippingAddressData.address1,
          city: shippingAddressData.city,
          state: shippingAddressData.state,
          country: shippingAddressData.country,
          postalCode: shippingAddressData.postalCode,
          phone: shippingAddressData.phone,
          isDefault: shippingAddressData.isDefault,
        },
      });
      return {
        message: 'Shipping Address Successfully Created for the provided User',
        shippingAddress,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('No User Found with this id!');
      }
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }
}
