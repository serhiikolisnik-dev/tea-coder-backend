import { IsNotEmpty, IsString, Length, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskDto {
  @IsString({ message: 'Custom STRING' })
  @IsNotEmpty({ message: 'Custom NO_EMPTY' })
  @Length(2, 100, { message: 'Custom MIN and MAX' })
  title: string;

  @IsBoolean({ message: 'Custom BOOLEAN' })
  isActive: boolean;
}

export class PartialUpdateTaskDto extends PartialType(UpdateTaskDto) {}
