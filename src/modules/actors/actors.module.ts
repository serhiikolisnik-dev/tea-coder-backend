import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './entities/actor.entities';

@Module({
  imports: [TypeOrmModule.forFeature([ActorEntity])],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}
