import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { giftRequest } from "common/src/GiftServiceRequest.ts";

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
      },
    });
    await PrismaClient.giftServiceRequest.upsert({
      where: {
        SRID: serviceRequest.SRID,
      },
      create: {
        SRID: serviceRequest.SRID,
        giftType: gift.giftType,
        deliveryDate: gift.deliveryDate,
      },
      update: {
        giftType: gift.giftType,
        deliveryDate: gift.deliveryDate,
      },
    });
    res
      .sendStatus(200)
      .json({ message: "Gift Request has been put into the database" });
  } catch (error) {
    res.sendStatus(500);
    return;
  }
});

export default router;
