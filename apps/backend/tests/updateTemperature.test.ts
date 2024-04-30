import express from "express";
import { expect, test, describe } from "vitest";
import supertest from "supertest";
import updateTemperatureRouter from "../src/routes/updateTemperature.ts";

const app = express();
app.use("/api/update-temperature", updateTemperatureRouter);

const request = supertest(app);

describe("Temperature API", () => {
  test("should update temperature", async () => {
    const response = await request
      .post("/api/update-temperature")
      .send({ value: 20 });
    expect(response.status).toBe(200);
  });
  test("should fail to update temperature", async () => {
    const response = await request
      .post("/api/update-temperature")
      .send({ value: "20" });
    expect(response.status).toBe(500);
  });
});
