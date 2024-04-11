// generic service request router
import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { ServiceRequest } from "common/src/serviceRequestTemp.ts";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  const genericServiceRequest = await PrismaClient.serviceRequest.findMany({});
  res.json(genericServiceRequest);
});

router.post("/", async function (req, res) {
  const serviceReq: ServiceRequest = req.body;

  try {
    await PrismaClient.serviceRequest.update({
      where: {
        SRID: serviceReq.SRID,
      },
      data: {
        status: serviceReq.status,
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
