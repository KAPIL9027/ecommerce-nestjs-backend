import { ApiProperty } from '@nestjs/swagger';
import { CartItem } from './cart-item.dto';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';

export class CreateCartDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItem)
  @ApiProperty({
    example: [{ variantId: '3434343', quantity: '2' }],
    description: 'Cart Item',
  })
  items: CartItem[];
}
