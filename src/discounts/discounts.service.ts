import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateDiscountDto } from './create-discount.dto';
import { CreateDiscountCodeDto } from './create-discountcode.dto';
import { UpdateDiscountDto } from './update-discount.dto';
import { UpdateDiscountCodeDto } from './update-discount-code.dto';

@Injectable()
export class DiscountsService {
    constructor(private prismaService: PrismaService){
        
    }

    
    async getDiscount(discountId: string){
        try {
            const discount = await this.prismaService.discount.findUnique({
                where: {
                    id: discountId
                },
                include: {
                    products: true,
                    variants: true,
                    codes: true
                }
            });
            return {
                discount: discount
            }
        }
        catch(e){
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.message === 'P2025'){
                throw new NotFoundException("No Discount with this Id Found!")
            }
            throw new InternalServerErrorException("Internal Server Error")
        }
    }

    async createDiscount(discountData: CreateDiscountDto){
        try{
            let dataObj = {
                    title: discountData.title,
                    description: discountData.description,
                    type: discountData.type,
                    amount: discountData.amount,
                    startDate: discountData.startDate,
                    endDate: discountData.endDate,
                    active: discountData.active,
                    appliesTo: discountData.appliesTo,
                    combinable: discountData.combinable,
                    
                };
            if(discountData.productIds?.length){
                dataObj["products"] = {
                    connect: discountData.productIds.map((id)=> ({id}))
                }
            }
            if(discountData.categoryIds?.length) {
                dataObj["categories"] = {
                    connect: discountData.categoryIds.map((id)=> ({id}))
                }
            }
            if(discountData.variantIds?.length) {
                dataObj["variants"] = {
                    connect: discountData.variantIds.map((id)=> ({id}))
                }
            }
            if(discountData.codeIds?.length) {
                dataObj["codes"] = {
                    connect: discountData.codeIds.map((id)=> ({id}))
                }
            }
            const createdDiscount = await this.prismaService.discount.create({
                data: dataObj
            });
            return {
                message: "Successfully Created Specified Discount",
                discount: createdDiscount
            }
        }
        catch(e){
            console.error(e);
            throw new InternalServerErrorException("500 Internal Server Error!");
        }
    }

    async createDiscountCode(discountCodeData: CreateDiscountCodeDto){
        try{
            const dataObj = {
                code: discountCodeData.code,
                usedCount: discountCodeData.usedCount,
                userSpecific: discountCodeData.userSpecific,
                discountId: discountCodeData.discountId,
                active: discountCodeData.active
            }
            if(discountCodeData.description){
                dataObj["description"] = discountCodeData.description
            }
            if(discountCodeData.expiresAt){
                dataObj["expiresAt"] = discountCodeData.expiresAt
            }
            if(discountCodeData.minCartValue) {
                dataObj["minCartValue"] = discountCodeData.minCartValue
            }
            if(discountCodeData.maxUses) {
                dataObj["maxUses"] = discountCodeData.maxUses
            }
            if(discountCodeData.userId) {
                dataObj["userId"] = discountCodeData.userId
            }

            const createdDiscountCode = await this.prismaService.discountCode.create({
                data: dataObj
            });
            return {
                message: "Successfully Created the DiscountCode",
                discountCode: createdDiscountCode
            }
        }
        catch(e){
            console.error(e);
            throw new InternalServerErrorException("500 Internal Server Error")
        }
    }

    async getDiscountCode(discountCodeId: string){
        try{
            const getDiscountCode = await this.prismaService.discountCode.findUnique({
                where: {
                    id: discountCodeId
                },
                include: {
                    discount: true
                }
            });
            return {
                message: "Successfully fetched Discountcode with the given Id",
                discountCode: getDiscountCode
            }
        }
        catch(e){
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025"){
                throw new NotFoundException("404 Not Found")
            }
            throw new InternalServerErrorException("500 Internal Server Exception");
        }
    }

    async updateDiscount(discountId: string,updateDiscountData: UpdateDiscountDto){
        try {
                const updatedDiscount = await this.prismaService.discount.update({
                where: {
                    id: discountId
                },
                data: updateDiscountData
                
            });
            return {
                message: "Successfully Updated the Discount!",
                updatedDiscount: updatedDiscount
            }
        }
        catch(e) {
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
                throw new NotFoundException("404 Not Found!")
            }
            throw new InternalServerErrorException("500 Internal Server Exception");
        }
    }

    async updateDiscountCode(updateDiscountCodeId: string,updateDiscountCodeData: UpdateDiscountCodeDto){
        try{
            console.log(updateDiscountCodeId)
            const updatedDiscountCode = await this.prismaService.discountCode.update({
                where: {
                    id: updateDiscountCodeId
                },
                data: updateDiscountCodeData
            });
            return {
                message: "New Discount Code Created",
                updatedDiscountCode: updatedDiscountCode
            }
        }
        catch(e){
            console.error(e);
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
                throw new NotFoundException("404 Not Found!")
            }
        }
    }


    async deleteDiscountCode(discountCodeId: string){
        
        try {
            const deletedDiscountCode = await this.prismaService.discountCode.delete({
                where: {
                    id: discountCodeId
                },
            })
            return {
                message: "Successfully Deleted DiscountCode",
                deletedDiscountCode: deletedDiscountCode
            }
        }
        catch(e){
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
                throw new NotFoundException("404 Not Found!")
            }
            throw new InternalServerErrorException("500 Internal Server Error")
        }
    }
    async deleteDiscount(discountId: string){
        
        try {
            const deletedDiscount = await this.prismaService.discount.delete({
                where: {
                    id: discountId
                },
            })
            return {
                message: "Successfully Deleted Discount",
                deletedDiscount: deletedDiscount
            }
        }
        catch(e){
            if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
                throw new NotFoundException("404 Not Found!")
            }
            throw new InternalServerErrorException("500 Internal Server Error")
        }
    }
}
