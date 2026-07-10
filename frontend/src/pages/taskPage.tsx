import { TaskForm } from "../features/tasks/components/TaskForm";
import { TaskFilters } from "../features/tasks/components/TaskFilters";
import { TaskList } from "../features/tasks/components/TaskList";

import type { Task, PriorityFilter } from "../features/tasks/types";
import type { CreateTaskData } from "../features/tasks/schema";

interface TasksPageProps {
  tasks: Task[];

  search: string;

  priorityFilter: PriorityFilter;

  editingTask: Task | null;

  setSearch: (value: string) => void;

  setPriorityFilter: (
    value: PriorityFilter
  ) => void;

  setEditingTask: (
    task: Task | null
  ) => void;

  createTask: (
    task: CreateTaskData
  ) => Promise<void>;

  updateTask: (
    id: string,
    task: CreateTaskData
  ) => Promise<void>;

  deleteTask: (
    id: string
  ) => Promise<void>;
}

export function TasksPage({
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
}: TasksPageProps) {
  return (
    <div className="space-y-6">

      <TaskForm
        editingTask={editingTask}
        onCreateTask={createTask}
        onUpdateTask={updateTask}
      />

      <div className="rounded-xl border bg-white p-4">

        <TaskFilters
          search={search}
          priority={priorityFilter}
          onSearchChange={setSearch}
          onPriorityChange={setPriorityFilter}
        />

      </div>

      <TaskList
        tasks={tasks}
        onEditTask={setEditingTask}
        onDeleteTask={deleteTask}
      />

    </div>
  );
}