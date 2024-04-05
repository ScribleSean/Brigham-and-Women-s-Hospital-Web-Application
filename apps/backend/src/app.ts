import createError, { HttpError } from "http-errors";
import express, { Express, NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import nodesRouter from "./routes/nodes.ts";
import pathRouter from "./routes/path.ts";
import formRouter from "./routes/formRouter.ts"; // todo: change to flower

import csvRouter from "./routes/csv-handler";
import nodeRouter from "./routes/node-route";
import edgeRouter from "./routes/edge-route";
import downloadNodeDataRouter from "./routes/data-to-csv-node";
import downloadEdgeDataRouter from "./routes/data-to-csv-edge";

const app: Express = express(); // Set up the backend

// Setup generic middleware
app.use(
  logger("dev", {
    stream: {
      // This is a "hack" that gets the output to appear in the remote debugger :)
      write: (msg) => console.info(msg),
    },
  }),
); // This records all HTTP requests
app.use(express.json()); // This processes requests as JSON
app.use(express.urlencoded({ extended: false })); // URL parser
app.use(cookieParser()); // Cookie parser
app.use("/api/form", formRouter); // form router
app.use("/api/request", formRouter);
app.use("/api/csv-to-json", csvRouter);
app.use("/api/node-populate", nodeRouter);
app.use("/api/edge-populate", edgeRouter);
app.use("/api/download-node-csv", downloadNodeDataRouter);
app.use("/api/download-edge-csv", downloadEdgeDataRouter);

app.use("/healthcheck", (req, res) => {
  res.status(200).send();
});

app.use("/api/nodes", nodesRouter);
app.use("/api/path", pathRouter);

/**
 * Catch all 404 errors, and forward them to the error handler
 */
app.use(function (req: Request, res: Response, next: NextFunction): void {
  // Have the next (generic error handler) process a 404 error
  next(createError(404, `Not Found: ${req.method} ${req.path}`));
});

/**
 * Generic error handler
 */
app.use((err: HttpError, req: Request, res: Response): void => {
  // Log the error to the console for debugging
  console.error(`Error - ${err.status || 500} - ${err.message}`, {
    method: req.method,
    path: req.path,
    body: req.body,
    query: req.query,
    ip: req.ip,
  });

  res.status(err.status || 500).send({
    error: {
      message: err.message || "Internal Server Error",
      status: err.status || 500,
      path: req.path,
      method: req.method,
    },
  });
});

export default app; // Export the backend, so that www.ts can start it
