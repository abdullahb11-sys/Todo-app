import type {
  Request,
  Response,
} from "express";

import { taskService } from "./task.service.js";

import {
  createTaskSchema,
  updateTaskSchema,
  taskIdSchema,
} from "./task.validation.js";

import { ApiResponse } from "../../utils/ApiResponse.js";

export class TaskController {
  async getAllTasks(
    _req: Request,
    res: Response
  ) {
    const tasks =
      await taskService.getAllTasks();

    res.json(
      new ApiResponse(
        true,
        "Tasks fetched successfully",
        tasks
      )
    );
  }

  async createTask(
    req: Request,
    res: Response
  ) {
    const body =
      createTaskSchema.parse(req.body);

    const task =
      await taskService.createTask(body);

    res.status(201).json(
      new ApiResponse(
        true,
        "Task created successfully",
        task
      )
    );
  }

  async updateTask(
    req: Request,
    res: Response
  ) {
    const { id } =
      taskIdSchema.parse(req.params);

    const body =
      updateTaskSchema.parse(req.body);

    const task =
      await taskService.updateTask(
        id,
        body
      );

    res.json(
      new ApiResponse(
        true,
        "Task updated successfully",
        task
      )
    );
  }

  async deleteTask(
    req: Request,
    res: Response
  ) {
    const { id } =
      taskIdSchema.parse(req.params);

    await taskService.deleteTask(id);

    res.json(
      new ApiResponse(
        true,
        "Task deleted successfully"
      )
    );
  }
}

export const taskController =
  new TaskController();