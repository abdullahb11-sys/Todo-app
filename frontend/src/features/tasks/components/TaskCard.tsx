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
  return (
    <article>
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>{task.priority}</p>

      <p>{task.completed ? "Completed" : "Pending"}</p>

      <div className="space-x-2">
        <button
          type="button"
          onClick={() => onEditTask(task)}
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}