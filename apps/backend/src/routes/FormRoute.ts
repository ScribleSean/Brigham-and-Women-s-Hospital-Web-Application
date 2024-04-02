import express, { Router, Request, Response } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { Form } from "common/src/form.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const form: Form = req.body;

  try {
    await PrismaClient.form.create({
      data: form,
    });
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "error" });
  }
});

router.get("/", async function (req: Request, res: Response): Promise<void> {
  const form: Form[] = await PrismaClient.form.findMany();
  res.json(form);
});

export default router;
