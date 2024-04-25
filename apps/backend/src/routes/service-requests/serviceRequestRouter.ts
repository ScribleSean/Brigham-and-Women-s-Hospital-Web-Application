// generic service request router
import express, { Router } from "express";
import PrismaClient from "../../bin/database-connection.ts";
import { ServiceRequest } from "common/src/backend_interfaces/ServiceRequest.ts";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  const serviceRequests = await PrismaClient.serviceRequest.findMany({
    include: {
      Employee: {
        select: {
          name: true,
          employeeEmail: true,
        },
      },
    },
  });

  const formattedServiceRequests = serviceRequests.map((sr) => ({
    ...sr,
    employeeEmail: `${sr.Employee.name} (${sr.Employee.employeeEmail})`,
  }));

  console.log(formattedServiceRequests);
  res.json(formattedServiceRequests);
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

router.delete("/", async function (req, res) {
  try {
    const deleteRequest = await PrismaClient.serviceRequest.delete({
      where: {
        SRID: req.body.SRID,
      },
    });
    console.log("Successfully deleted" + deleteRequest);
  } catch (error) {
    console.error("Error Deleting Service Request");
    console.log(error);
    res.sendStatus(204);
  }
});

export default router;
