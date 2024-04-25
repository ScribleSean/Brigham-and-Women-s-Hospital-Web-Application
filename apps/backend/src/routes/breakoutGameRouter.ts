//router to handle breakout brighman game highscores
import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";
const router: Router = express.Router();
import { breakoutHighScore } from "common/src/backend_interfaces/breakoutHighScore.ts";

router.get("/", async function (req, res) {
  const highScoreFetch = await PrismaClient.breakOutHighScore.findMany({
    orderBy: {
      time: "desc",
    },
    take: 5,
  });
  res.json(highScoreFetch);
});

router.post("/", async function (req, res) {
  const newhs: breakoutHighScore = req.body;

  try {
    await PrismaClient.breakOutHighScore.create({
      data: {
        initial: newhs.initial,
        time: Number(newhs.time),
      },
    });
    res.status(200).json({ message: "HS Posted" });
    console.log("yurp");
  } catch (error) {
    console.error("HS did not post :(");
    console.log(error);
    res.sendStatus(204);
    return;
  }
});

export default router;
