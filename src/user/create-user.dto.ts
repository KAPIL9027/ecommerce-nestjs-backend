import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @MinLength(6)
    password: string

    @IsOptional()
    @IsString()
    role?: string
}