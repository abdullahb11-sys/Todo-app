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
    <div>
      <input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search..."
      />

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
      >
        <option>All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
  );
}