-- DropForeignKey
ALTER TABLE "ProductOptionValue" DROP CONSTRAINT "ProductOptionValue_optionId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOptionValue" DROP CONSTRAINT "ProductOptionValue_variantOptionId_fkey";

-- AlterTable
ALTER TABLE "ProductOptionValue" ALTER COLUMN "optionId" DROP NOT NULL,
ALTER COLUMN "variantOptionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductOptionValue" ADD CONSTRAINT "ProductOptionValue_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "ProductOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOptionValue" ADD CONSTRAINT "ProductOptionValue_variantOptionId_fkey" FOREIGN KEY ("variantOptionId") REFERENCES "ProductVariantOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;
