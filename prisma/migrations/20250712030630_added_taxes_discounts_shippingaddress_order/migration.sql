/*
  Warnings:

  - A unique constraint covering the columns `[shippingAddressId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shippingAddressId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentProvider" AS ENUM ('RAZORPAY', 'COD');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "shippingAddressId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_shippingAddressId_key" ON "Order"("shippingAddressId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shippingAddressId_fkey" FOREIGN KEY ("shippingAddressId") REFERENCES "ShippingAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
