import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    example: 'title',
    description: 'Title of the Review!',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    example: 'comment',
    description: 'Description of the Review!',
    required: false,
  })
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiProperty({
    example: 4,
    description: 'Rating of the Review(1-5)',
  })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
