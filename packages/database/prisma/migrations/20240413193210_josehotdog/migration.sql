-- CreateTable
CREATE TABLE "giftServiceRequest" (
    "SRID" INTEGER NOT NULL,
    "giftType" TEXT NOT NULL,
    "deliveryDate" TEXT NOT NULL,

    CONSTRAINT "giftServiceRequest_pkey" PRIMARY KEY ("SRID")
);

-- AddForeignKey
ALTER TABLE "giftServiceRequest" ADD CONSTRAINT "giftServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;
