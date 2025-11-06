import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class MovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsArray()
  @IsUUID('4', { each: true })
  actorIds: string[];

  // @IsNotEmpty()
  // @IsInt()
  // @Min(1988)
  // @Max(new Date().getFullYear())
  // releaseYear: number;
}
