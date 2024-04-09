/*
  Warnings:

  - You are about to drop the `Form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nodes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Form";

-- DropTable
DROP TABLE "Nodes";

-- CreateTable
CREATE TABLE "Node" (
    "nodeID" TEXT NOT NULL,
    "xcoord" INTEGER NOT NULL,
    "ycoord" INTEGER NOT NULL,
    "floor" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "nodeType" TEXT NOT NULL,
    "longName" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("nodeID")
);

-- CreateTable
CREATE TABLE "ServiceRequest" (
    "formID" SERIAL NOT NULL,
    "receiverName" TEXT NOT NULL,
    "senderName" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "roomNumber" INTEGER NOT NULL,

    CONSTRAINT "ServiceRequest_pkey" PRIMARY KEY ("formID")
);

-- CreateTable
CREATE TABLE "FlowerForm" (
    "formID" INTEGER NOT NULL,
    "flowerType" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "FlowerForm_pkey" PRIMARY KEY ("formID")
);

-- CreateTable
CREATE TABLE "GiftForm" (
    "formID" INTEGER NOT NULL,
    "giftType" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "GiftForm_pkey" PRIMARY KEY ("formID")
);

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_startNodeID_fkey" FOREIGN KEY ("startNodeID") REFERENCES "Node"("nodeID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_endNodeID_fkey" FOREIGN KEY ("endNodeID") REFERENCES "Node"("nodeID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowerForm" ADD CONSTRAINT "FlowerForm_formID_fkey" FOREIGN KEY ("formID") REFERENCES "ServiceRequest"("formID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiftForm" ADD CONSTRAINT "GiftForm_formID_fkey" FOREIGN KEY ("formID") REFERENCES "ServiceRequest"("formID") ON DELETE RESTRICT ON UPDATE CASCADE;
