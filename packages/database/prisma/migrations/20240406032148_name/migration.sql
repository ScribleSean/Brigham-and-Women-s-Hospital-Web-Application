/*
  Warnings:

  - You are about to drop the column `receiverName` on the `ServiceRequest` table. All the data in the column will be lost.
  - You are about to drop the column `roomNumber` on the `ServiceRequest` table. All the data in the column will be lost.
  - You are about to drop the column `senderName` on the `ServiceRequest` table. All the data in the column will be lost.
  - Added the required column `employeeName` to the `ServiceRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `ServiceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceRequest" DROP COLUMN "receiverName",
DROP COLUMN "roomNumber",
DROP COLUMN "senderName",
ADD COLUMN     "employeeName" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;
