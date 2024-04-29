import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { EmployeeType } from "common/src/backend_interfaces/Employee.ts";

const router: Router = express.Router();

router.post("/", async (req, res) => {
  function generateId() {
    return Math.floor(Math.random() * 1000000000);
  }
  const employee: EmployeeType = req.body;
  try {
    const newEmployee = await PrismaClient.employee.create({
      data: {
        employeeEmail: employee.employeeEmail,
        employeeFirstName: employee.employeeFirstName,
        employeeLastName: employee.employeeLastName,
        employeeFullName:
          employee.employeeFirstName + " " + employee.employeeLastName,
        employeePosition: employee.employeePosition,
        employeePermission: employee.employeePermission,
        employeeID: generateId(),
        numberOfServiceRequests: 0,
      },
    });
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error("Unable to create form");
    console.log(error);
    res.sendStatus(204);
    return;
  }
});

export default router;
