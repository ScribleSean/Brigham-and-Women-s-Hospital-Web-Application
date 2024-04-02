import express, { Router, Request, Response } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { Form } from "common/src/form.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const form: Form = req.body;

  form.roomNumber = parseInt(String(form.roomNumber));

  try {
    await PrismaClient.form.create({ data: form });
    console.log("Successfully posted to form");
  } catch (error) {
    console.error("Unable to create form");
    console.log(error);
    res.sendStatus(204);
    return;
  }
});

router.get("/", async function (req: Request, res: Response): Promise<void> {
  const form: Form[] = await PrismaClient.form.findMany();
  res.json(form);
});

export default router;
