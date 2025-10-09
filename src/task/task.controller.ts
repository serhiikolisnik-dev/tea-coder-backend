import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTaskByID(@Param('id') id: string) {
    return this.taskService.getTaskByID(+id);
  }

  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.taskService.createTask(dto);
  }

  @Put(':id')
  updateTaskByID(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.updateTaskByID(+id, dto);
  }

  @Patch(':id')
  updatePatchTaskByID(
    @Param('id') id: string,
    @Body() dto: Partial<UpdateTaskDto>,
  ) {
    return this.taskService.updatePatchTaskByID(+id, dto);
  }

  @Delete(':id')
  deleteTaskByID(@Param('id') id: string) {
    return this.taskService.deleteTaskByID(+id);
  }
}
