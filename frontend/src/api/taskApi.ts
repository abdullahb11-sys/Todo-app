import { axiosInstance } from "./axios";

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
      await axiosInstance.get<ApiResponse<Task[]>>("/tasks");

    return response.data.data;
  },

  async create(task: CreateTaskData) {
    const response =
      await axiosInstance.post<ApiResponse<Task>>(
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
      await axiosInstance.patch<ApiResponse<Task>>(
        `/tasks/${id}`,
        task
      );

    return response.data.data;
  },

  async delete(id: string) {
    await axiosInstance.delete(`/tasks/${id}`);
  },
};