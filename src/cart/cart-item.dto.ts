import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Min } from 'class-validator';

export class CartItem {
  @ApiProperty({
    example: '34343434344',
    description: 'Id of the variant',
  })
  @IsString()
  variantId: string;
  @ApiProperty({
    example: 2,
    description: 'Quantity of the cart-item',
  })
  @IsInt()
  @Min(1)
  quantity: number;
}
