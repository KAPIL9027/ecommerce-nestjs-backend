import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class MakeAdminDto {
  @IsString()
  @ApiProperty({
    example: 'user-id',
    description: 'Id of the user that you want to make as ADMIN.',
  })
  userId: string;
}
