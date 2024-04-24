import express, { Router, Request, Response } from "express";
import { parseCSV } from "common/src/parser.ts";
import PrismaClient from "../bin/database-connection.ts";
import { EmployeeType } from "common/src/backend_interfaces/Employee.ts";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    await PrismaClient.employee.deleteMany({});

    // Parse the CSV string to an array of CSVEmployee objects
    const rowsEmployee = parseCSV(req.body["csvString"]);
    const transformedEmployee: EmployeeType[] = rowsEmployee.map((row) => {
      const rowval = Object.values(row);
      return {
        employeeEmail: rowval[0],
        name: rowval[1],
        position: rowval[2],
        numberOfServiceRequests: parseInt(rowval[3]),
      };
    });

    await PrismaClient.employee.createMany({
      data: transformedEmployee.map((self) => {
        return {
          employeeEmail: self.employeeEmail,
          name: self.name,
          position: self.position,
          numberOfServiceRequests: self.numberOfServiceRequests,
        };
      }),
    });

    res.sendStatus(200);
  } catch (error) {
    console.error(Error, "populating employee data: ${error}");
    res.sendStatus(500);
  }
});

router.get("/", async function (req: Request, res: Response) {
  try {
    const employeeCSV = await PrismaClient.employee.findMany();
    res.send(employeeCSV);
  } catch (error) {
    console.error(Error, "exporting employee data: ${error}");
    res.sendStatus(500);
  }
  res.sendStatus(200);
});
export default router;
