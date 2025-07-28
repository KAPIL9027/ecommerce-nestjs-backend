import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateReviewDto {
  @ApiProperty({
    example: 3.5,
    description: 'New Rating of the Review!',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;

  @ApiProperty({
    example: 'Update Title!',
    description: 'Update current title with this new title',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    example: 'Update Comment!',
    description: 'Update current comment with this new comment',
    required: false,
  })
  @IsOptional()
  @IsString()
  comment?: string;
}
