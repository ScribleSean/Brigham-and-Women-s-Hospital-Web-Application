import express from "express";
import { expect, test, describe } from "vitest";
import supertest from "supertest";
import addEmployeeRouter from "../src/routes/addEmployee.ts";

const app = express();
app.use("/api", addEmployeeRouter);

const request = supertest(app);

describe("Employee API", () => {
  test("pass", async () => {
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
  test("fail", async () => {
    const newEmployeeData = {
      employeeEmail: 7,
      employeeFirstName: "John",
      employeeLastName: "Doe",
      employeePosition: 6,
      employeePermission: "admin",
      numberOfServiceRequests: 0,
      employeeID: 0,
    };
    const response = await request.post("/api").send(newEmployeeData);
    expect(response.status).toBe(204);
  });
});

describe("Delete Employee", () => {
  test("pass", async () => {
    const employee = {
      employeeEmail: "test@example.com",
    };
    const response = await request.post("/api").send(employee);
    expect(response.status).toBe(200);
  });
  test("fail", async () => {
    const employee = {
      employeeEmail: 7,
    };
    const response = await request.post("/api").send(employee);
    expect(response.status).toBe(204);
  });
});
