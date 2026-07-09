import { useEffect, useState } from "react";

import { taskApi } from "../../../api/taskApi";

import type { Task, PriorityFilter } from "../types";
import type { CreateTaskData } from "../schema";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] =
    useState<PriorityFilter>("All");
  const [editingTask, setEditingTask] =
    useState<Task | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await taskApi.getAll();
    setTasks(data);
  }

  async function createTask(task: CreateTaskData) {
    await taskApi.create(task);
    await loadTasks();
  }

  async function updateTask(
    id: string,
    task: Partial<CreateTaskData>
  ) {
    await taskApi.update(id, task);
    await loadTasks();
    setEditingTask(null);
  }

  async function deleteTask(id: string) {
    await taskApi.delete(id);
    await loadTasks();
  }

  return {
    tasks,
    search,
    priorityFilter,
    editingTask,

    setSearch,
    setPriorityFilter,
    setEditingTask,

    createTask,
    updateTask,
    deleteTask,
  };
}