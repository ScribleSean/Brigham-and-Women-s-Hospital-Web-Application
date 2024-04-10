// flower service request router
import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";

const router: Router = express.Router();

router.delete("/", async (req, res) => {
  try {
    await PrismaClient.node.deleteMany({});
    await PrismaClient.edge.deleteMany({});
    res.status(200).json({ message: "Tables deleted successfully." });
  } catch (error) {
    console.error(`Error deleting tables: ${error}`);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
