// flower service request router
import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { Flower } from "common/src/flowerServiceRequest.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const flower: Flower = req.body;

  try {
    const serviceRequest = await PrismaClient.serviceRequest.create({
      data: {
        employeeName: flower.employeeName,
        priority: flower.priority,
        location: flower.location,
        status: flower.status,
      },
    });

    await PrismaClient.flowerServiceRequest.upsert({
      where: {
        SRID: serviceRequest.SRID,
      },
      create: {
        SRID: serviceRequest.SRID,
        flowerType: flower.flowerType,
        message: flower.message,
      },
      update: {
        flowerType: flower.flowerType,
        message: flower.message,
      },
    });

    res
      .status(200)
      .json({ message: "Flower Request has been put into the database" });
    console.log("Successfully posted to flower");
  } catch (error) {
    console.error("Unable to create form");
    console.log(error);
    res.sendStatus(204);
    return;
  }
});

export default router;
