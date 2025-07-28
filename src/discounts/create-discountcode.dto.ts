import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDiscountCodeDto {
  @ApiProperty({
    example: 'Code',
    description: 'Code to be created!',
  })
  @IsString()
  code: string;
  @ApiProperty({
    example: 'Get 50% off',
    description: 'Description of the DiscountCode',
    required: false,
  })
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    example: '2025-07-10T00:00:00.000Z',
    description: 'When will this discountcode expire?',
    required: false,
  })
  expiresAt: Date;
  @IsOptional()
  @IsInt()
  @ApiProperty({
    example: 4500,
    description:
      'Minimum cart value that should be there to apply this discountcode.',
    required: false,
  })
  minCartValue: number;
  @IsOptional()
  @IsInt()
  @ApiProperty({
    example: 5,
    description:
      'Maximum number of times for which you can use this discountcode.',
    required: false,
  })
  maxUses: number;
  @IsInt()
  @ApiProperty({
    example: 3,
    description: 'How many times you have used this discountcode till now?',
  })
  usedCount: number;
  @IsBoolean()
  @ApiProperty({
    example: false,
    description: 'Is this a user specific discount-code?',
  })
  userSpecific: boolean;
  @IsString()
  @ApiProperty({
    example: 'discount-id',
    description: 'Id of the Discount that it related to.',
  })
  discountId: string;
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'user-id',
    description: 'Id of the user that it relates to.',
  })
  userId: string;
  @ApiProperty({
    example: true,
    description: 'Is this Discount Active?',
  })
  @IsBoolean()
  active: boolean;
}
