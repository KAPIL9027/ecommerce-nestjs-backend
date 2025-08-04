import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class WishlistItemDto {
  @ApiProperty({
    example: 'product-variant-id',
    description: 'Id of the product-variant that you want to wishlist.',
  })
  @IsString()
  productVariantId: string;
}
