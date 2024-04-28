-- CreateTable
CREATE TABLE "FoodDeliveryServiceRequest" (
    "SRID" INTEGER NOT NULL,
    "foodItem" TEXT NOT NULL,
    "foodQuantity" TEXT NOT NULL,
    "utensilItem" TEXT NOT NULL,
    "deliveryTime" TEXT NOT NULL,

    CONSTRAINT "FoodDeliveryServiceRequest_pkey" PRIMARY KEY ("SRID")
);

-- AddForeignKey
ALTER TABLE "FoodDeliveryServiceRequest" ADD CONSTRAINT "FoodDeliveryServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;
