import {
  IsString,
  IsNotEmpty,
  Length,
  IsOptional,
  IsNumber,
  IsPositive,
  IsInt,
  IsArray,
  IsEnum,
  Matches,
  IsUrl,
} from 'class-validator';

import { StartWith } from '../decorators/start-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  @StartWith('Task:')
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt({ message: 'Custom INT' })
  @IsNumber({}, { message: 'Custom NUMBER' })
  @IsPositive()
  priority: number;

  @IsOptional()
  @IsArray()
  @IsEnum(TaskTag, { each: true, message: 'Each item must be a ENUM' })
  tags: TaskTag[];

  // @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
  //   message:
  //     'Password must contain at least one uppercase letter and one number',
  // })
  // @IsString()
  // password: string;
  //
  // @IsUrl({}, { message: 'Custom URL' })
  // webURL: string;
}
