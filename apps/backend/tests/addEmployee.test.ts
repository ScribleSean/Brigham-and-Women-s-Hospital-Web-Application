import express from "express";
import { expect, test, describe } from "vitest";
import supertest from "supertest";
import addEmployeeRouter from "../src/routes/addEmployee.ts";

const app = express();
app.use("/api", addEmployeeRouter);

const request = supertest(app);

describe("Employee API", () => {
  test("should send 204", async () => {
    const newEmployeeData = {
      employeeEmail: "test@example.com",
      employeeFirstName: "John",
      employeeLastName: "Doe",
      employeePosition: "Developer",
      employeePermission: "admin",
      numberOfServiceRequests: 0,
      employeeID: 0,
    };
    const response = await request.post("/api").send(newEmployeeData);
    expect(response.status).toBe(201);
  });
});
