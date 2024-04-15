import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { giftRequest } from "common/src/backend_interfaces/GiftServiceRequest.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const gift: giftRequest = req.body;

  try {
    const serviceRequest = await PrismaClient.serviceRequest.create({
      data: {
        employeeName: gift.employeeName,
        priority: gift.priority,
        location: gift.location,
        status: gift.status,
        serviceType: gift.serviceType,
        description: gift.description,
      },
    });
    await PrismaClient.giftServiceRequest.upsert({
      where: {
        SRID: serviceRequest.SRID,
      },
      create: {
        SRID: serviceRequest.SRID,
        senderName: gift.senderName,
        receiverName: gift.receiverName,
        giftType: gift.giftType,
        deliveryDate: gift.deliveryDate,
      },
      update: {
        senderName: gift.senderName,
        receiverName: gift.receiverName,
        giftType: gift.giftType,
        deliveryDate: gift.deliveryDate,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    return;
  }
});

export default router;
