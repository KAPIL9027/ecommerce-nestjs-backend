import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDiscountCodeDto {
  @IsString()
  code: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  expiresAt: Date;
  @IsOptional()
  @IsInt()
  minCartValue: number;
  @IsOptional()
  @IsInt()
  maxUses: number;
  @IsInt()
  usedCount: number;
  @IsBoolean()
  userSpecific: boolean;
  @IsString()
  discountId: string;
  @IsOptional()
  @IsString()
  userId: string;
  @IsBoolean()
  active: boolean;
}
