import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { createTaskSchema } from "../schema";

import type { CreateTaskData } from "../schema";
import type { Task } from "../types";

interface TaskFormProps {
  editingTask: Task | null;

  onCreateTask: (
    task: CreateTaskData
  ) => Promise<void>;

  onUpdateTask: (
    id: string,
    task: CreateTaskData
  ) => Promise<void>;
}

export function TaskForm({
  editingTask,
  onCreateTask,
  onUpdateTask,
}: TaskFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTaskData>({
    resolver: zodResolver(createTaskSchema),

    defaultValues: {
      title: "",
      description: "",
      priority: "Medium",
    },
  });

  useEffect(() => {
    if (editingTask) {
      reset({
        title: editingTask.title,
        description:
          editingTask.description ?? "",
        priority: editingTask.priority,
      });
    } else {
      reset({
        title: "",
        description: "",
        priority: "Medium",
      });
    }
  }, [editingTask, reset]);

  const onSubmit = async (
    data: CreateTaskData
  ) => {
    if (editingTask) {
      await onUpdateTask(
        editingTask.id,
        data
      );
    } else {
      await onCreateTask(data);
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>
        {editingTask
          ? "Edit Task"
          : "Create Task"}
      </h2>

      <div>
        <label>Title</label>

        <input
          type="text"
          {...register("title")}
        />

        {errors.title && (
          <p>{errors.title.message}</p>
        )}
      </div>

      <div>
        <label>Description</label>

        <textarea
          {...register("description")}
        />

        {errors.description && (
          <p>{errors.description.message}</p>
        )}
      </div>

      <div>
        <label>Priority</label>

        <select {...register("priority")}>
          <option value="Low">Low</option>
          <option value="Medium">
            Medium
          </option>
          <option value="High">
            High
          </option>
        </select>
      </div>

      <button type="submit">
        {editingTask
          ? "Update Task"
          : "Create Task"}
      </button>
    </form>
  );
}