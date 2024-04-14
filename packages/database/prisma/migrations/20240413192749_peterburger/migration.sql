-- CreateTable
CREATE TABLE "MedicalDeviceServiceRequest" (
    "SRID" INTEGER NOT NULL,
    "deviceName" TEXT NOT NULL,
    "deviceQuantity" TEXT NOT NULL,

    CONSTRAINT "MedicalDeviceServiceRequest_pkey" PRIMARY KEY ("SRID")
);

-- AddForeignKey
ALTER TABLE "MedicalDeviceServiceRequest" ADD CONSTRAINT "MedicalDeviceServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;
