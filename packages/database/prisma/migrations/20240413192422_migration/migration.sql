-- CreateTable
CREATE TABLE "RoomSchedulingRequest" (
    "SRID" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "durration" TEXT NOT NULL,

    CONSTRAINT "RoomSchedulingRequest_pkey" PRIMARY KEY ("SRID")
);

-- AddForeignKey
ALTER TABLE "RoomSchedulingRequest" ADD CONSTRAINT "RoomSchedulingRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;
