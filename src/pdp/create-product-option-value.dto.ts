import { IsString, IsUUID } from 'class-validator';

export class CreateProductOptionValueDto {
  @IsString()
  value: string;

  @IsUUID()
  optionId: string;
}
