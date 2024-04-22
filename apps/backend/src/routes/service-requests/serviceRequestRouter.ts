// generic service request router
import express, { Router } from "express";
import PrismaClient from "../../bin/database-connection.ts";
import { ServiceRequest } from "common/src/backend_interfaces/ServiceRequest.ts";

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

    res.status(200).json({ message: "Service Status Updated" });
    console.log("Service Status Updated Successfully");
  } catch (error) {
    console.error("Service Status Update Failed");
    console.log(error);
    res.sendStatus(204);
    return;
  }
});

export default router;
