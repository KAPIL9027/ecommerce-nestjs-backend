import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RemoveWishlistItemDto {
  @ApiProperty({
    example: 'wishlist-item-id',
    description: 'Id of the the wishlisted item.',
  })
  @IsString()
  wishlistItemId: string;
}
