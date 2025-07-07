/*
  Warnings:

  - A unique constraint covering the columns `[shippingAddressId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shippingAddressId` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "shippingAddressId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "gstRate" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "hsnCode" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Cart_shippingAddressId_key" ON "Cart"("shippingAddressId");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_shippingAddressId_fkey" FOREIGN KEY ("shippingAddressId") REFERENCES "ShippingAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
