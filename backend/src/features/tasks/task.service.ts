import { ApiError } from "../../utils/ApiError.js";

import { taskRepository } from "./task.repository.js";

import type {
  CreateTaskDto,
  UpdateTaskDto,
} from "./task.validation.js";

export class TaskService {
  async getAllTasks() {
    return taskRepository.findAll();
  }

  async createTask(task: CreateTaskDto) {
    return taskRepository.create(task);
  }

  async updateTask(
    id: string,
    task: UpdateTaskDto
  ) {
    const existingTask =
      await taskRepository.findById(id);

    if (!existingTask) {
      throw new ApiError(
        404,
        "Task not found"
      );
    }

    return taskRepository.update(id, task);
  }

  async deleteTask(id: string) {
    const existingTask =
      await taskRepository.findById(id);

    if (!existingTask) {
      throw new ApiError(
        404,
        "Task not found"
      );
    }

    await taskRepository.delete(id);
  }
}

export const taskService =
  new TaskService();