import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Task Learn Nest',
      isActive: false,
    },
    {
      id: 2,
      title: 'Task Learn API',
      isActive: true,
    },
  ];
  getTasks() {
    return this.tasks;
  }

  getTaskByID(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  createTask(dto: CreateTaskDto) {
    const { title, description, priority, tags } = dto;

    const task = {
      id: this.tasks.length + 1,
      title,
      description,
      priority,
      tags,
      isActive: false,
    };
    this.tasks.push(task);
    return task;
  }

  updateTaskByID(id: number, dto: UpdateTaskDto) {
    const task = this.getTaskByID(id);
    Object.assign(task, dto);
    return task;
  }

  updatePatchTaskByID(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.getTaskByID(id);
    Object.assign(task, dto);
    return task;
  }

  deleteTaskByID(id: number) {
    const task = this.getTaskByID(id);
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    return task;
  }
}
