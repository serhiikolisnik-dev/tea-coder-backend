import { Body, Controller, Post } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorDto } from './dto/actor.dto';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Post()
  createActor(@Body() dto: ActorDto) {
    return this.actorsService.createActor(dto);
  }
}
