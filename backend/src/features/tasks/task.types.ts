export type Priority = "Low" | "Medium" | "High";

export interface TaskRow {
  id: string;
  title: string;
  description: string | null;
  priority: Priority;
  completed: boolean;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}

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

export interface CreateTaskDto {
  title: string;
  description?: string;
  priority: Priority;
}