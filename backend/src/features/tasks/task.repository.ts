import { supabase } from "../../config/supabase.js";

import { mapTaskRow } from "./task.mapper.js";

import type { TaskRow } from "./task.types.js";
import type {
  CreateTaskDto,
  UpdateTaskDto,
} from "./task.validation.js";

export class TaskRepository {
  async findAll() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      throw error;
    }

    return (data as TaskRow[]).map(mapTaskRow);
  }

  async findById(id: string) {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!data) {
      return null;
    }

    return mapTaskRow(data as TaskRow);
  }

  async create(task: CreateTaskDto) {
    const { data, error } = await supabase
      .from("tasks")
      .insert({
        title: task.title,
        description: task.description ?? null,
        priority: task.priority,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return mapTaskRow(data as TaskRow);
  }

  async update(
    id: string,
    task: UpdateTaskDto
  ) {
    const payload = {
      ...(task.title !== undefined && {
        title: task.title,
      }),
      ...(task.description !== undefined && {
        description: task.description,
      }),
      ...(task.priority !== undefined && {
        priority: task.priority,
      }),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("tasks")
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return mapTaskRow(data as TaskRow);
  }

  async delete(id: string) {
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }
  }
}

export const taskRepository = new TaskRepository();