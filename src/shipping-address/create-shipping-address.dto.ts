import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ShippingAddressDto {
  @IsString()
  fullName: string;
  @IsString()
  address1: string;
  @IsString()
  @IsOptional()
  address2: string;
  @IsString()
  city: string;
  @IsString()
  state: string;
  @IsString()
  country: string;
  @IsString()
  postalCode: string;
  @IsString()
  phone: string;
  @IsBoolean()
  isDefault: boolean;
}
