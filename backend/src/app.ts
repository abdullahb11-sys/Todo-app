import express from "express";
import cors from "cors";
import morgan from "morgan";

import { taskRoutes } from "./features/tasks/index.js";

import { notFoundMiddleware } from "./middleware/notFound.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Todo API is running 🚀",
  });
});

app.use("/api/tasks", taskRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;