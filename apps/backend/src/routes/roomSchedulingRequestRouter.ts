// room scheduling request router
import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { roomSchedulingRequest } from "common/src/backend_interfaces/roomSchedulingRequest.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const room: roomSchedulingRequest = req.body;

  try {
    //room.duration = parseInt(String(room.duration));

    const serviceRequest = await PrismaClient.serviceRequest.create({
      data: {
        employeeName: room.employeeName,
        priority: room.priority,
        location: room.location,
        status: room.status,
        serviceType: room.serviceType,
        description: room.description,
      },
    });

    await PrismaClient.roomSchedulingRequest.upsert({
      where: {
        SRID: serviceRequest.SRID,
      },
      create: {
        SRID: serviceRequest.SRID,
        startTime: room.startTime,
        endTime: room.endTime,
      },
      update: {
        startTime: room.startTime,
        endTime: room.endTime,
      },
    });

    res.status(200).json({
      message: "Room Scheduling Request has been put into the database",
    });
    console.log("Successfully posted to room");
  } catch (error) {
    console.error("Unable to create form");
    console.log(error);
    res.sendStatus(204);
    return;
  }
});

router.get("/", async function (req, res) {
  const roomForm = await PrismaClient.roomSchedulingRequest.findMany({
    include: {
      ServiceRequest: true,
    },
  });
  res.json(roomForm);
});

export default router;
