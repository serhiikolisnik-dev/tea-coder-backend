import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActorEntity } from './entities/actor.entities';
import { ActorDto } from './dto/actor.dto';

@Injectable()
export class ActorsService {
  constructor(
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) {}

  async createActor(dto: ActorDto): Promise<ActorEntity> {
    const { name } = dto;
    const actor = this.actorRepository.create({ name });
    return await this.actorRepository.save(actor);
  }
}
