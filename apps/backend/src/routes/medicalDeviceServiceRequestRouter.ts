import { MedicalDevice } from "common/src/backend_interfaces/medicalDeviceRequest.ts";
import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const medicalDevice: MedicalDevice = req.body;

  try {
    const serviceRequest = await PrismaClient.serviceRequest.create({
      data: {
        employeeName: medicalDevice.employeeName,
        priority: medicalDevice.priority,
        location: medicalDevice.location,
        status: medicalDevice.status,
        serviceType: medicalDevice.serviceType,
        description: medicalDevice.description,
      },
    });

    await PrismaClient.medicalDeviceServiceRequest.upsert({
      where: {
        SRID: serviceRequest.SRID,
      },
      create: {
        SRID: serviceRequest.SRID,
        deviceName: medicalDevice.deviceName,
        deviceQuantity: medicalDevice.deviceQuantity,
      },
      update: {
        deviceName: medicalDevice.deviceName,
        deviceQuantity: medicalDevice.deviceQuantity,
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
  const medicalDeviceForm =
    await PrismaClient.medicalDeviceServiceRequest.findMany({
      include: {
        ServiceRequest: true,
      },
    });
  res.json(medicalDeviceForm);
});

export default router;
