import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class ValidateUserDto {
  @IsEmail()
  @ApiProperty({
    example: 'ecommerce@gmail.com',
    description: 'Your Email Address, Please!.',
  })
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    example: '343434345dfsdfsd',
    description: 'Your Password, Please!.',
  })
  password: string;
}
