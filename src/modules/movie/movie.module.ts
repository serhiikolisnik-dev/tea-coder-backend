import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { ActorEntity } from '../actors/entities/actor.entities';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, ActorEntity])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
