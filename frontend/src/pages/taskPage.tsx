import { TaskForm } from "../features/tasks/components/TaskForm";
import { TaskFilters } from "../features/tasks/components/TaskFilters";
import { TaskList } from "../features/tasks/components/TaskList";

import { useTasks } from "../features/tasks/hooks/useTasks";

export function TasksPage() {
  const {
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
  } = useTasks();

  return (
    <main className="space-y-6 p-6">
      <TaskForm
        editingTask={editingTask}
        onCreateTask={createTask}
        onUpdateTask={updateTask}
      />

      <TaskFilters
        search={search}
        priority={priorityFilter}
        onSearchChange={setSearch}
        onPriorityChange={setPriorityFilter}
      />

      <TaskList
        tasks={tasks}
        onEditTask={setEditingTask}
        onDeleteTask={deleteTask}
      />
    </main>
  );
}