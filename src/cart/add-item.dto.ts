import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class AddItemDto {
  @ApiProperty({
    example: '34343434344',
    description: 'Id of the variant that you want to add.',
  })
  @IsString()
  variantId: string;
  @ApiProperty({
    example: '34343434344',
    description: 'Id of the cart',
  })
  @IsString()
  cartId: string;
  @ApiProperty({
    example: 2,
    description: 'Quantity of the item',
  })
  @IsInt()
  quantity: number;
}
