import { Module } from '@nestjs/common';
import { ShippingAddressController } from './shipping-address.controller';
import { ShippingAddressService } from './shipping-address.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ShippingAddressController],
  providers: [ShippingAddressService,JwtService]
})
export class ShippingAddressModule {}
