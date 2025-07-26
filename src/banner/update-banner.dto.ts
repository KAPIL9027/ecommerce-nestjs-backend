import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, Length } from 'class-validator';

export class UpdateBannerDto {
  @IsString()
  @IsOptional()
  @Length(3, 200)
  @ApiProperty({
    example: 'Electronics',
    description: 'Provide new title within the range limit 3 t0 20 chars.',
    required: false,
  })
  title?: string;

  @IsString()
  @IsOptional()
  @Length(3, 10000)
  @ApiProperty({
    example: 'Banner description.',
    description:
      'Provide new description within the range limit 3 t0 1000 chars.',
    required: false,
  })
  description?: string;

  @IsString()
  @IsOptional()
  @Length(3, 1000)
  @ApiProperty({
    example: 'redirection link',
    description:
      'Provide new redirection link within the range limit 3 t0 1000 chars.',
    required: false,
  })
  link?: string;

  @IsArray()
  @IsOptional()
  @IsOptional()
  @ApiProperty({
    example: ['dfdfdfdfdf'],
    description: 'Replace current imagesIds with these imagesIds',
    required: false,
  })
  imagesIds?: string[];
}
