import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateDiscountCodeDto {
  @IsOptional()
  @IsString()
  code?: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  expiresAt?: Date;
  @IsOptional()
  @IsInt()
  minCartValue?: number;
  @IsOptional()
  @IsInt()
  maxUses?: number;
  @IsOptional()
  @IsInt()
  usedCount?: number;
  @IsOptional()
  @IsBoolean()
  userSpecific?: boolean;
  @IsOptional()
  @IsString()
  discountId?: string;
  @IsOptional()
  @IsString()
  userId?: string;
  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
