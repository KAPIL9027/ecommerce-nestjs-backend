import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateDiscountCodeDto {
  @ApiProperty({
    example: 'SAKET-30',
    description: 'Discount Code.',
    required: false,
  })
  @IsOptional()
  @IsString()
  code?: string;
  @ApiProperty({
    example: 'Use SAKET-30 Code to get 30% OFF.',
    description: 'Description of the Discount Code.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty({
    example: '2025-07-10T00:00:00.000Z',
    description: 'New ExpiryDate for this Discount Code.',
    required: false,
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  expiresAt?: Date;

  @ApiProperty({
    example: 5500,
    description: 'New MinCartValue in order to apply this new Discount Code.',
    required: false,
  })
  @IsOptional()
  @IsInt()
  minCartValue?: number;

  @ApiProperty({
    example: 10,
    description: 'New MaxUses for this Discount Code.',
    required: false,
  })
  @IsOptional()
  @IsInt()
  maxUses?: number;
  @IsOptional()
  @IsInt()
  @ApiProperty({
    example: 10,
    description: 'New UsedCount for this Discount Code.',
    required: false,
  })
  usedCount?: number;
  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    example: false,
    description: 'Is this DiscountCode UserSpecific?',
    required: false,
  })
  userSpecific?: boolean;
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'new-discount-id',
    description: 'New Discount ID that it relates to.',
    required: false,
  })
  discountId?: string;
  @ApiProperty({
    example: 'new-user-id',
    description: 'New User ID for this Discount Code.',
    required: false,
  })
  @IsOptional()
  @IsString()
  userId?: string;
  @ApiProperty({
    example: false,
    description: 'Change active value for this DiscountCode',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
