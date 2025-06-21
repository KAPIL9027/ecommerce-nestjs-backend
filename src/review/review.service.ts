import { ConflictException, Get, Injectable, InternalServerErrorException, NotFoundException, Param } from '@nestjs/common';
import { CreateReviewDto } from './create-review.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Request } from 'express';
import { UpdateReviewDto } from './update-review.dto';

@Injectable()
export class ReviewService {
    constructor(private prismaService: PrismaService){

    }

    
    async getReview(reviewId: string){
        
            const review = await this.prismaService.review.findUnique({
                where: {
                    id: reviewId
                }
            });
            if(!review) throw new NotFoundException("404 Not Found!");
            return {
                message: "Successfully Fetched Review",
                review
            }
    }
    async createReview(productId: string,req: Request,createReviewDto: CreateReviewDto){
        try {
            // TODO: Check if the user has ordered this product
            let dataObj = {
                rating: createReviewDto.rating,
                product: {
                    connect: {
                        id: productId
                    }
                },
                user: {
                    connect: {
                        id: req.user!.userId
                    }
                }
            };
            if(createReviewDto.title)
            dataObj["title"] = createReviewDto.title;
            if(createReviewDto.comment)
            dataObj["comment"] = createReviewDto.comment;
            await this.prismaService.review.create({
                data: dataObj
            })
            return {
                message: "Review Created Successfully, Thank you!"
            }
        }
        catch(e){
            if( e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002'){
                throw new ConflictException('You have already submitted a review for this product')
            }
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
                throw new NotFoundException("404 Not Found Exception")
            }
            throw new InternalServerErrorException("500 Internal Server Error");
        }
    }

    async updateReview(reviewId: string,updateReviewData: UpdateReviewDto){
        try{
            await this.prismaService.review.update({
                where: {
                    id: reviewId
                },
                data: updateReviewData
            });
            return {
                message: "Successfully Updated the Review!"
            }
        }
        catch(e){
            console.error(e);
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
                throw new NotFoundException("404 Not Found!");
            }
            throw new InternalServerErrorException("500 Internal Server Error");
        }
    }

    async deleteReview(reviewId: string){
        
           try{
             await this.prismaService.review.delete({
                where: {
                    id: reviewId
                }
            });
            
            return {
                message: "Successfully Deleted the Review",
            }
           }    
           catch(e){
            console.error(e);
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
                throw new NotFoundException("404 Not Found!")
            }
            throw new InternalServerErrorException("500 Internal Server Error!")
           }
           
    }
}
