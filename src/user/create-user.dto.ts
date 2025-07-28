import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    example: 'email',
    description: 'Your Email Address?',
  })
  email: string;

  @ApiProperty({
    example: 'Name',
    description: 'Your Name?',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Password',
    description: 'Your Password?',
  })
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'ADMIN',
    description: 'Select the role. ADMIN or USER',
  })
  role?: string;
}
