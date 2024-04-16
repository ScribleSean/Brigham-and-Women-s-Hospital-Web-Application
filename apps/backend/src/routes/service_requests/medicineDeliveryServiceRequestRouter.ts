import { Medicine } from "common/src/backend_interfaces/MedicineServiceRequest.ts";
import express, { Router } from "express";
import PrismaClient from "../../bin/database-connection.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const medicine: Medicine = req.body;

  try {
    const serviceRequest = await PrismaClient.serviceRequest.create({
      data: {
        employeeName: medicine.employeeName,
        priority: medicine.priority,
        location: medicine.location,
        status: medicine.status,
        serviceType: medicine.serviceType,
        description: medicine.description,
      },
    });

    await PrismaClient.medicineDeliveryServiceRequest.upsert({
      where: {
        SRID: serviceRequest.SRID,
      },
      create: {
        SRID: serviceRequest.SRID,
        medicineType: medicine.medicineType,
        dosageType: medicine.dosageType,
        dosageAmount: medicine.dosageAmount,
      },
      update: {
        medicineType: medicine.medicineType,
        dosageType: medicine.dosageType,
        dosageAmount: medicine.dosageAmount,
      },
    });

    res.status(200).json({
      message: "Medical Device Request has been put into the database",
    });
    console.log("Successfully posted to medical device.");
  } catch (error) {
    console.error("Unable to create form");
    console.log(error);
    res.sendStatus(204);
    return;
  }
});

router.get("/", async function (req, res) {
  const medicalDeliveryForm =
    await PrismaClient.medicineDeliveryServiceRequest.findMany({
      include: {
        ServiceRequest: true,
      },
    });
  res.json(medicalDeliveryForm);
});
export default router;
