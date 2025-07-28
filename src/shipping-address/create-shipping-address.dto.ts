import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ShippingAddressDto {
  @ApiProperty({
    example: 'Full Name',
    description: 'Full Name of the user!',
  })
  @IsString()
  fullName: string;
  @ApiProperty({
    example: 'Address1',
    description: 'Address1 of the user!',
  })
  @IsString()
  address1: string;
  @ApiProperty({
    example: 'Address2',
    description: 'Address 2 of the user!',
  })
  @IsString()
  @IsOptional()
  address2: string;
  @IsString()
  @ApiProperty({
    example: 'Faridabad',
    description: 'City of the user',
  })
  city: string;
  @IsString()
  @ApiProperty({
    example: 'Haryana',
    description: 'State of the user',
  })
  state: string;
  @IsString()
  @ApiProperty({
    example: 'India',
    description: 'Country of the user',
  })
  country: string;
  @IsString()
  @ApiProperty({
    example: '121004',
    description: 'PostalCode of the user',
  })
  postalCode: string;
  @IsString()
  @ApiProperty({
    example: '8100444490',
    description: 'Phone number of the user',
  })
  phone: string;
  @ApiProperty({
    example: false,
    description: 'Is this default address?',
  })
  @IsBoolean()
  isDefault: boolean;
}
