/*
  Warnings:

  - Added the required column `serviceType` to the `ServiceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceRequest" ADD COLUMN     "serviceType" TEXT NOT NULL;
