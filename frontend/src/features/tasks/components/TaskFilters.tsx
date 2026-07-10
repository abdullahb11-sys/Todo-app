interface TaskFiltersProps {
  search: string;
  priority: string;
  onSearchChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

export function TaskFilters({
  search,
  priority,
  onSearchChange,
  onPriorityChange,
}: TaskFiltersProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row">

      <input
        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
        placeholder="Search tasks..."
      />

      <select
        className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
        value={priority}
        onChange={(e) =>
          onPriorityChange(e.target.value)
        }
      >
        <option>All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

    </div>
  );
}