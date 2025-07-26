import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShippingAddressDto } from './create-shipping-address.dto';
import { Prisma } from '@prisma/client';
import { Logger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class ShippingAddressService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(ShippingAddressService.name);
  }

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
      this.logger.info(
        { shippingAddressId: shippingAddress.id },
        'Successfully Created a Shipping Address for the User!',
      );
      return {
        message: 'Shipping Address Successfully Created for the provided User',
        shippingAddress,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No User Found with this id!');
        throw new NotFoundException('No User Found with this id!');
      }
      this.logger.error(e, 'Create Shipping Address Service Failed');
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }
}
