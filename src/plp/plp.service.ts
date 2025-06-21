import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PlpDto } from './getPlp.dto';

@Injectable()
export class PlpService {
  constructor(private prismaService: PrismaService) {}
  getWhereData(category: string, reqData: PlpDto) {
    let obj = {
      categoryId: category,
    };
    if (reqData?.brand) {
      obj['brand'] = reqData.brand;
    }
    if (reqData?.isNew) {
      obj['isNew'] = reqData.isNew === 'true';
    }
    return obj;
  }
  async getPlpData(category: string, reqData: PlpDto) {
    let orderBy: any = {};
    if (reqData.sortBy) orderBy[reqData.sortBy] = reqData?.sortOrder ?? 'asc';
    const page = reqData?.page ?? 1;
    const pageSize = reqData?.pageSize ?? 10;
    const products = await this.prismaService.product.findMany({
      where: this.getWhereData(category, reqData),
      include: {
        variants: true,
        productImages: true,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: orderBy,
    });
    return products;
  }
}
