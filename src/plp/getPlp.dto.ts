import { IsIn, IsNumber, IsOptional, IsString } from "class-validator"

export class PlpDto{

    @IsNumber()
    page: number

    @IsNumber()
    pageSize: number

    @IsString()
    @IsOptional()
    brand: string

    @IsString()
    @IsOptional()
    isNew: string

    @IsIn(['createdAt','price','salesCount'])
    @IsOptional()
    sortBy: 'createdAt' | 'price' | 'salesCount'

    @IsIn(['asc','desc'])
    @IsOptional()
    sortOrder: 'asc' | 'desc'
}