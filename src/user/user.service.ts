import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ValidateUserDto } from './validate-user.dto';
import { Prisma } from '@prisma/client';
import { PinoLogger } from 'nestjs-pino';
import { MakeAdminDto } from './make-admin.dto';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(UserService.name);
  }

  async refresh(req: Request) {
    try {
      const refreshToken = req.cookies['refresh-token'];
      const user = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_SECRET,
      });
      if (user) {
        const newAccessToken = await this.jwtService.signAsync(
          {
            userId: user.userId,
            name: user.name,
            email: user.email,
          },
          {
            secret: process.env.JWT_SECRET,
          },
        );
        this.logger.info(
          { userId: user.userId },
          'Successfully fetched a new access-token',
        );
        return newAccessToken;
      }
      throw new UnauthorizedException('Invalid, Access Token Provided!');
    } catch (e) {
      if (e instanceof UnauthorizedException) {
        this.logger.warn(e, 'Invalid Access Token Provided');
        throw e;
      }
      this.logger.error(e, 'OOPS, Something Went Wrong!');
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }
  async createUser(dto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      let dataObj = {
        email: dto.email,
        name: dto.name,
        password: hashedPassword,
      };
      const user = await this.prisma.user.create({
        data: dataObj,
      });

      const accessToken = this.jwtService.sign(
        {
          userId: user.id,
          name: user.name,
          email: user.email,
        },
        {
          secret: process.env.JWT_SECRET,
        },
      );
      const refreshToken = this.jwtService.sign(
        {
          userId: user.id,
          name: user.name,
          email: user.email,
        },
        {
          secret: process.env.JWT_SECRET,
        },
      );
      this.logger.info({ userId: user.id }, 'User Created Successfully');
      return { accessToken, refreshToken };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientValidationError) {
        throw new BadRequestException(
          '400 Bad Request, Incorrect Data Provided!',
        );
      }
      console.error('Create User Request Failed', e);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async validateUser(validateUserDto: ValidateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: validateUserDto.email,
      },
    });
    if (!userExists) {
      throw new NotFoundException('User Not Found');
    }
    const isValidPassword = await bcrypt.compare(
      validateUserDto.password,
      userExists.password,
    );
    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid Username or Password');
    }
    try {
      const accessToken = await this.jwtService.signAsync(
        {
          userId: userExists.id,
          name: userExists.name,
          email: userExists.email,
          role: userExists.role,
        },
        {
          secret: process.env.JWT_SECRET,
        },
      );
      const refreshToken = await this.jwtService.signAsync(
        {
          userId: userExists.id,
          name: userExists.name,
          email: userExists.email,
          role: userExists.role,
        },
        {
          secret: process.env.JWT_SECRET,
        },
      );
      this.logger.info(
        { userId: userExists.id },
        'Successfully Validated a User',
      );
      return { accessToken, refreshToken };
    } catch (e) {
      if (e instanceof NotFoundException) {
        this.logger.warn(e, 'No User Found!');
      } else this.logger.error(e, 'Validate User Service Failed');
      throw e;
    }
  }

  async getUserProfile(email: string) {
    try {
      if (!email) throw new NotAcceptableException('No Valid Email Provided!');
      const user = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          id: true,
          email: true,
          name: true,
        },
      });
      if (!user) {
        throw new NotFoundException('No User Found!');
      }
      this.logger.info(
        { userId: user.id },
        'Successfully Found a User with the given Id!',
      );
      return user;
    } catch (e) {
      this.logger.error(e, 'Get User Profile Service Failed');
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async makeAdmin(makeAdminDto: MakeAdminDto) {
    try {
      const res = await this.prisma.user.update({
        where: {
          id: makeAdminDto.userId,
        },
        data: {
          role: 'ADMIN',
        },
      });
      this.logger.info(
        { userId: makeAdminDto.userId },
        'Successfully made the user as an ADMIN.',
      );
      return {
        message: 'Successfully made the user as an ADMIN User.',
        user: res,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn({ e }, 'No User with this ID Found');
        throw e;
      }
      this.logger.error({ e }, 'OOPS, Something Went Wrong!');
      throw e;
    }
  }
}
