import { api } from "./axios";

import type { Task } from "../features/tasks/types";
import type { CreateTaskData } from "../features/tasks/schema";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const taskApi = {
  async getAll() {
    const response =
      await api.get<ApiResponse<Task[]>>("/tasks");

    return response.data.data;
  },

  async create(task: CreateTaskData) {
    const response =
      await api.post<ApiResponse<Task>>(
        "/tasks",
        task
      );

    return response.data.data;
  },

  async update(
    id: string,
    task: Partial<CreateTaskData>
  ) {
    const response =
      await api.patch<ApiResponse<Task>>(
        `/tasks/${id}`,
        task
      );

    return response.data.data;
  },

  async delete(id: string) {
    await api.delete(`/tasks/${id}`);
  },
};