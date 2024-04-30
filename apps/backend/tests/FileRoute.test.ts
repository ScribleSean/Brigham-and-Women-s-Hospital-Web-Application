import express from "express";
import { expect, test, describe } from "vitest";
import supertest from "supertest";
import FileRouter from "../src/routes/FileRoute.ts";

const app = express();
app.use("/api", FileRouter);

const request = supertest(app);

describe("FileRoute API", () => {
  test("GET /nodes should return status 200 and an array of nodes", async () => {
    const response = await request.get("/nodes");
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /nodes should return status 404 on unsuccessful creation", async () => {
    const data = { nodes: [{ name: "Node 1" }, { name: "Node 2" }] };
    const response = await request.post("/nodes").send(data);
    expect(response.status).toEqual(404);
  });

  test("DELETE /nodes should return status 404 on unsuccessful deletion", async () => {
    const data = { deleteIDs: ["nodeID1", "nodeID2"] };
    const response = await request.delete("/nodes").send(data);
    expect(response.status).toEqual(404);
  });

  test("GET /edges should return status 200 and an array of edges", async () => {
    const response = await request.get("/edges");
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /edges should return status 404 on usuccessful creation", async () => {
    const data = { edges: [{ source: "nodeID1", target: "nodeID2" }] };
    const response = await request.post("/edges").send(data);
    expect(response.status).toEqual(404);
  });

  test("DELETE /edges should return status 404 on successful deletion", async () => {
    const data = { deleteIDs: ["edgeID1", "edgeID2"] };
    const response = await request.delete("/edges").send(data);
    expect(response.status).toEqual(404);
  });
});
