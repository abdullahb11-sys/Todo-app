import { TaskCard } from "./TaskCard";

import type { Task } from "../types";

interface Props {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onEditTask: (task: Task) => void;
}

export function TaskList({
  tasks,
  onDeleteTask,
  onEditTask,
}: Props) {

  if (!tasks.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center text-gray-500">
        No tasks found.
      </div>
    );
  }

  return (
    <div className="space-y-4">

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