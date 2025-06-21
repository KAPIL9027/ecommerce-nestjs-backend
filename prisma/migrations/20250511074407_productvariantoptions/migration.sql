/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `ProductVariant` table. All the data in the column will be lost.
  - Added the required column `productVariantId` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variantOptionId` to the `ProductOptionValue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "productVariantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductOptionValue" ADD COLUMN     "variantOptionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "imageUrl";

-- CreateTable
CREATE TABLE "ProductVariantOption" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,

    CONSTRAINT "ProductVariantOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductVariantOption" ADD CONSTRAINT "ProductVariantOption_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOptionValue" ADD CONSTRAINT "ProductOptionValue_variantOptionId_fkey" FOREIGN KEY ("variantOptionId") REFERENCES "ProductVariantOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
