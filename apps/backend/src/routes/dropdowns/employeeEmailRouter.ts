// fetch employee emails from employee table
import express, { Router } from "express";
import PrismaClient from "../../bin/database-connection.ts";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  const employeeEmailFetch = await PrismaClient.employee.findMany({
    select: {
      employeeEmail: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  res.json(employeeEmailFetch);
});

export default router;
