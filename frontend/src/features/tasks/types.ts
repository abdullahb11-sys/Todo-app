export type Priority = "Low" | "Medium" | "High";

export type PriorityFilter = Priority | "All";

export interface Task {
  id: string;
  title: string;
  description: string | null;
  priority: Priority;
  completed: boolean;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}