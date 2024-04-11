-- CreateTable
CREATE TABLE "HighScore" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "HighScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Edge" (
    "edgeID" TEXT NOT NULL,
    "startNodeID" TEXT NOT NULL,
    "endNodeID" TEXT NOT NULL,

    CONSTRAINT "Edge_pkey" PRIMARY KEY ("edgeID")
);

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
    "SRID" SERIAL NOT NULL,
    "employeeName" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "ServiceRequest_pkey" PRIMARY KEY ("SRID")
);

-- CreateTable
CREATE TABLE "FlowerServiceRequest" (
    "SRID" INTEGER NOT NULL,
    "flowerType" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "FlowerServiceRequest_pkey" PRIMARY KEY ("SRID")
);

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_startNodeID_fkey" FOREIGN KEY ("startNodeID") REFERENCES "Node"("nodeID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_endNodeID_fkey" FOREIGN KEY ("endNodeID") REFERENCES "Node"("nodeID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowerServiceRequest" ADD CONSTRAINT "FlowerServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;
