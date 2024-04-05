// flower service request router
import express, { Router } from "express";
// import PrismaClient from "../bin/database-connection.ts";
import { Flower } from "common/src/flowerServiceRequest.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const flower: Flower = req.body;

  flower.roomNumber = parseInt(String(flower.roomNumber));

  try {
    // const result = await PrismaClient.serviceRequest.create({
    //   data: {
    //     SRID: flower.SRID,
    //     receiverName: flower.receiverName,
    //   },
    // });
    //await PrismaClient.form.create({ data: flower });
    console.log("Successfully posted to form");
  } catch (error) {
    console.error("Unable to create form");
    console.log(error);
    res.sendStatus(204);
    return;
  }
});

// router.get("/", async function (req: Request, res: Response): Promise<void> {
//   //const form: Flower[] = await PrismaClient.form.findMany();
//   //res.json(form);
// });

export default router;
