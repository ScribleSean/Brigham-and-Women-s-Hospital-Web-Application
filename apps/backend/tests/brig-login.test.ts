import { expect, test, describe } from "vitest";
import supertest from "supertest";
import app from "../src/app";

const request = supertest(app);

describe("brigBreakUserLoginRouter", () => {
  test("GET /api/sign-in-brig-user", async () => {
    const response = await request.get("/api/sign-in-brig-user?username=test");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("username");
    expect(response.body).toHaveProperty("highscore");
    expect(response.body).toHaveProperty("joeUnlocked");
    expect(response.body).toHaveProperty("wongUnlocked");
  });

  test("GET /api/sign-in-brig-user/joe", async () => {
    const response = await request.get(
      "/api/sign-in-brig-user/joe?username=test",
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("joeUnlocked");
  });

  test("GET /api/sign-in-brig-user/wong", async () => {
    const response = await request.get(
      "/api/sign-in-brig-user/wong?username=test",
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("wongUnlocked");
  });

  test("GET /api/sign-in-brig-user/highscore", async () => {
    const response = await request.get(
      "/api/sign-in-brig-user/highscore?username=test",
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("highscore");
  });

  test("POST /api/sign-in-brig-user", async () => {
    const response = await request
      .post("/api/sign-in-brig-user")
      .send({ username: "test" });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("username");
    expect(response.body).toHaveProperty("highscore");
    expect(response.body).toHaveProperty("joeUnlocked");
    expect(response.body).toHaveProperty("wongUnlocked");
  });
});
