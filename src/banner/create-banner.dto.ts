import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, Length } from 'class-validator';

export class CreateBannerDto {
  @IsString()
  @Length(3, 200)
  @ApiProperty({
    example: 'Electronics',
    description: 'Provide a title of length between 3 to 200 chars.',
  })
  title: string;

  @IsString()
  @Length(3, 10000)
  @ApiProperty({
    example: 'Banner Descripiton.',
    description: 'Provide a description of length between 3 to 10000 chars.',
  })
  description: string;

  @IsString()
  @Length(3, 1000)
  @ApiProperty({
    example: '/redirectTo',
    description:
      'Provide an onclick redirection link of length between 3 to 1000 chars.',
  })
  link: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['34343dfdfdff'],
    description:
      'Provide this optional property of images ids related to the banner.',
    required: false,
  })
  imagesIds?: string[];
}
