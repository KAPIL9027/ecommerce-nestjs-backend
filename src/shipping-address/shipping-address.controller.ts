import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ShippingAddressService } from './shipping-address.service';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { ShippingAddressDto } from './create-shipping-address.dto';
import { Request } from 'express';

@Controller('shipping-address')
export class ShippingAddressController {
  constructor(
    private readonly shippingAddressService: ShippingAddressService,
  ) {}
  @Post()
  @UseGuards(JWTCookieGuard)
  async createShippingAddress(
    @Req() req: Request,
    @Body() shippingAddressBody: ShippingAddressDto,
  ) {
    return this.shippingAddressService.createShippingAddress(
      req.user!.userId,
      shippingAddressBody,
    );
  }
}
