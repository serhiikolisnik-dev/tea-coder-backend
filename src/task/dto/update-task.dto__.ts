import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';
import { StartsWith } from 'src/common/decorators/starts-with.decorator';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskDto {
  @IsString({ message: 'title must be a string' })
  @IsNotEmpty({ message: 'title is required' })
  @StartsWith('Task:')
  @Length(3, 64, { message: 'title must be between 3 and 64 characters' })
  title: string;

  @IsBoolean()
  isCompleted: boolean;
}

export class PartialUpdateTaskDto extends PartialType(UpdateTaskDto) {}
