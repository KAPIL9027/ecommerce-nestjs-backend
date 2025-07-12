/*
  Warnings:

  - You are about to drop the column `total` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "total",
ADD COLUMN     "subTotal" DECIMAL(20,2) NOT NULL DEFAULT 0,
ADD COLUMN     "totalCgst" DECIMAL(20,2) NOT NULL DEFAULT 0,
ADD COLUMN     "totalDiscounts" DECIMAL(20,2) NOT NULL DEFAULT 0,
ADD COLUMN     "totalIgst" DECIMAL(20,2) NOT NULL DEFAULT 0,
ADD COLUMN     "totalSgst" DECIMAL(20,2) NOT NULL DEFAULT 0,
ADD COLUMN     "totalTaxes" DECIMAL(20,2) NOT NULL DEFAULT 0;
