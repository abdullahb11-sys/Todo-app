import type { Task } from "../types";

interface TaskCardProps {
  task: Task;
  onDeleteTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
}

export function TaskCard({
  task,
  onDeleteTask,
  onEditTask,
}: TaskCardProps) {
  const badgeColor = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700",
  }[task.priority];

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          {task.title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColor}`}
        >
          {task.priority}
        </span>

      </div>

      <p className="mt-3 text-gray-600">
        {task.description || "No description"}
      </p>

      <p className="mt-3 text-sm text-gray-500">
        {task.completed ? "✅ Completed" : "⏳ Pending"}
      </p>

      <div className="mt-5 flex gap-2">

        <button
          className="rounded-lg bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          onClick={() => onEditTask(task)}
        >
          Edit
        </button>

        <button
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>

      </div>

    </article>
  );
}