import { BadRequestException, Injectable, InternalServerErrorException, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ValidateUserDto } from './validate-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      let dataObj = {
          email: dto.email,
          name: dto.name,
          password: hashedPassword,
        }

        if(dto.role){
          dataObj["role"] = dto.role;
        }
      const user = await this.prisma.user.create({
        data: dataObj,
      });
      
      const token = this.jwtService.sign({
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },{
        secret: process.env.JWT_SECRET
      });
      return token;
    } catch (e) {
        if(e instanceof Prisma.PrismaClientValidationError){
          throw new BadRequestException('400 Bad Request, Incorrect Data Provided!')
        }
        console.error('Create User Request Failed',e);
        throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async validateUser(validateUserDto: ValidateUserDto){

        const userExists = await this.prisma.user.findUnique({
        where: {
            email: validateUserDto.email
        }
    });
       if(!userExists){
        throw new NotFoundException('User Not Found');
       }
       const isValidPassword = await bcrypt.compare(validateUserDto.password,userExists.password);
       if(!isValidPassword){
        throw new UnauthorizedException('Invalid Username or Password')
       }
       try
       {
        const newToken = await this.jwtService.signAsync({
        userId: userExists.id,
        name: userExists.name,
        email: userExists.email,
        role: userExists.role
       },{
        secret: process.env.JWT_SECRET
       });
       return newToken;
       }
       catch(e){
        throw new InternalServerErrorException('Internal Server Exception')
       }
  }

  async getUserProfile(email: string) {
    if(!email) throw new NotAcceptableException('No Valid Email Provided!')
        console.log(email);
    try{
        const user = await this.prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            email: true,
            name: true
        }
    });
      if(!user) {
       throw new NotFoundException('No User Found!')
      }
      return user;
    }
    catch(e){
        console.error('Get User Profile Service Failed',e);
        throw new InternalServerErrorException('Internal Server Error')
  }

}

}
