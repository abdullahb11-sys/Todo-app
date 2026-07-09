import type { Task } from "../types";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
}

export function TaskList({
  tasks,
  onDeleteTask,
  onEditTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}