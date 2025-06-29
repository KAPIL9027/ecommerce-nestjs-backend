import { IsArray, IsOptional, IsString, Length } from 'class-validator';

export class UpdateBannerDto {
  @IsString()
  @IsOptional()
  @Length(3, 200)
  title?: string;

  @IsString()
  @IsOptional()
  @Length(3, 10000)
  description?: string;

  @IsString()
  @IsOptional()
  @Length(3, 1000)
  link?: string;

  @IsArray()
  @IsOptional()
  @IsOptional()
  imagesIds?: string[];
}
