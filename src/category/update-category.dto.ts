import { IsArray, IsOptional, IsString } from "class-validator";

export class UpdateCategoryDto{
     @IsString()
     @IsOptional()
      title?: string;
    
      @IsString()
      @IsOptional()
      slug?: string;
    
      @IsString()
      @IsOptional()
      parentId?: string;
    
      @IsArray()
      @IsOptional()
      subCategoriesIds?: string[];
    
      @IsArray()
      @IsOptional()
      productsIds?: string[];
    
      @IsArray()
      @IsOptional()
      imagesIds?: string[];
    
      @IsArray()
      @IsOptional()
      discountsIds?: string[];
}