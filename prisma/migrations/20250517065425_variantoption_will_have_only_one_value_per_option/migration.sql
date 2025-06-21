/*
  Warnings:

  - You are about to drop the column `variantOptionId` on the `ProductOptionValue` table. All the data in the column will be lost.
  - Made the column `optionId` on table `ProductOptionValue` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `value` to the `ProductVariantOption` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productVariantId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOptionValue" DROP CONSTRAINT "ProductOptionValue_optionId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOptionValue" DROP CONSTRAINT "ProductOptionValue_variantOptionId_fkey";

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "productVariantId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductOptionValue" DROP COLUMN "variantOptionId",
ALTER COLUMN "optionId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProductVariantOption" ADD COLUMN     "value" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductOptionValue" ADD CONSTRAINT "ProductOptionValue_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "ProductOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
