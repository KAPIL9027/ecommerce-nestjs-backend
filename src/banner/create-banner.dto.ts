import { IsArray, IsOptional, IsString, Length } from "class-validator"

export class CreateBannerDto {
    @IsString()
    @Length(3, 200)
    title: string

    @IsString()
    @Length(3,10000)
    description: string

    @IsString()
    @Length(3,1000)
    link: string

    @IsArray()
    @IsOptional()
    imagesIds?: string[]
    
}