import express, { Router, Request, Response } from "express";
import { Prisma } from "database";
import PrismaClient from "../bin/database-connection.ts";
import {Form} from "common/src/Form.ts";

const router: Router = express.Router();

router.get("/", async function (req: Request, res: Response): Promise<void> {
    const form: Form[] = await PrismaClient.form.findMany();
    res.json(form);
});

export default router;
