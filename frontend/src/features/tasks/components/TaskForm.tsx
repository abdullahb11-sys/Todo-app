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
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-4 rounded-xl border bg-white p-5"
>

<h2 className="text-xl font-semibold">
    {editingTask ? "Edit Task" : "Create Task"}
</h2>

<div>

<label className="mb-1 block font-medium">
Title
</label>

<input
className="w-full rounded-lg border p-2"
type="text"
{...register("title")}
/>

</div>

<div>

<label className="mb-1 block font-medium">
Description
</label>

<textarea
rows={4}
className="w-full rounded-lg border p-2"
{...register("description")}
/>

</div>

<div>

<label className="mb-1 block font-medium">
Priority
</label>

<select
className="w-full rounded-lg border p-2"
{...register("priority")}
>

<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>

</div>

<button
className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
type="submit"
>

{editingTask ? "Update Task" : "Create Task"}

</button>

</form>
  );
}