import express, { Router } from "express";
import { Form } from "common/src/form.ts";

const router: Router = express.Router();

const database: Form[] = [];

router.post("/", async function (req, res) {
  const form: Form = req.body;

  database.push(form);
  console.log(database);
  console.log("this coo");
  res.status(200).json({ message: "success" });
});

router.get("/", (req, res) => {
  res.json(database);
}); // get

export default router;
