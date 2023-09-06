// tasks.service.ts
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async create(taskData: Task): Promise<Task> {
    const createdTask = new this.taskModel(taskData);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findById(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, taskData: Task): Promise<Task> {
    taskData.updatedAt = new Date();
    return this.taskModel.findByIdAndUpdate(id, taskData, { new: true }).exec();
  }

  async delete(id: string): Promise<Task> {
    return this.taskModel.findByIdAndRemove(id).exec();
  }
}
