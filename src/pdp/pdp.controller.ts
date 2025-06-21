import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PdpService } from './pdp.service';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { RolesGuard } from 'src/user/admin-user.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { CreateProductDto } from './create-product.dto';
import { CreateProductOptionDto } from './create-product-option.dto';
import { CreateProductOptionValueDto } from './create-product-option-value.dto';
import { CreateProductVariantOptionDto } from './create-product-variant-option.dto';

@Controller('pdp')
export class PdpController {
  constructor(private readonly pdpService: PdpService) {}

  @Get('/:productId')
  async getPdpData(@Param('productId') productId: string) {
    return this.pdpService.getPdp(productId);
  }

  @Post('/create-product')
  @UseGuards(JWTCookieGuard, RolesGuard)
  @Roles('ADMIN')
  async createProduct(@Body() reqBody: CreateProductDto) {
    return this.pdpService.createProduct(reqBody);
  }

  // to be tested

  @Post('/create-product-option')
  @UseGuards(JWTCookieGuard, RolesGuard)
  @Roles('ADMIN')
  async createProductOption(@Body() reqBody: CreateProductOptionDto) {
    return this.pdpService.createProductOption(reqBody);
  }

  // to be tested

  @Post('/create-product-option-value')
  @UseGuards(JWTCookieGuard, RolesGuard)
  @Roles('ADMIN')
  async createProductOptionValue(@Body() reqBody: CreateProductOptionValueDto) {
    return this.pdpService.createProductOptionValue(reqBody);
  }

  // to be tested

  @Post('/create-product-variant-option')
  @UseGuards(JWTCookieGuard,RolesGuard)
  @Roles('ADMIN')
  async createProductVariantOption(
    @Body() reqBody: CreateProductVariantOptionDto,
  ) {
    return this.pdpService.createProductVariantOption(reqBody);
  }

  
}
