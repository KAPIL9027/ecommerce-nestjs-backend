import { IsString, IsUUID } from 'class-validator';

export class CreateProductVariantOptionDto {
  @IsString()
  name: string;

  @IsString()
  value: string;

  @IsUUID()
  productVariantId: string;
}
