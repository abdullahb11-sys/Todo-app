import { Router } from "express";

import { taskController } from "./task.controller.js";

import { asyncHandler } from "../../utils/asyncHandler.js";

const router = Router();

router.get(
  "/",
  asyncHandler(
    taskController.getAllTasks.bind(taskController)
  )
);

router.post(
  "/",
  asyncHandler(
    taskController.createTask.bind(taskController)
  )
);

router.patch(
  "/:id",
  asyncHandler(
    taskController.updateTask.bind(taskController)
  )
);

router.delete(
  "/:id",
  asyncHandler(
    taskController.deleteTask.bind(taskController)
  )
);

export default router;