// task.entity.ts
import { Schema, Document } from 'mongoose';

export interface Task extends Document {
  title: string;
  description: string;
  status: string; // Example: 'todo', 'inProgress', 'done', etc.
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const TaskSchema = new Schema({
  title: String,
  description: String,
  status: String,
  dueDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
