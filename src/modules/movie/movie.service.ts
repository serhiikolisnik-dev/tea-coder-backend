import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { In, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { ActorEntity } from '../actors/entities/actor.entities';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
  ) {}

  async getMovies(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      order: {
        createdAt: 'desc',
      },
    });
  }

  async getMovieByID(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: {
        id,
      },
    });

    if (!movie) throw new NotFoundException(`Movie with id ${id} not found`);
    return movie;
  }

  async createMovie(dto: MovieDto): Promise<MovieEntity> {
    const { title, actorIds } = dto;

    const actors = await this.actorRepository.find({
      where: {
        id: In(actorIds),
      },
    });

    if (!actors || !actors.length)
      throw new NotFoundException('One or several actor does not exist');

    const movie = this.movieRepository.create({ title, actors });
    return await this.movieRepository.save(movie);
  }

  async updateMovie(id: string, dto: MovieDto): Promise<MovieEntity> {
    const movie = await this.getMovieByID(id);
    Object.assign(movie, dto);
    await this.movieRepository.save(movie);
    return movie;
  }

  async availableMovie(id: string, isAvailable: boolean): Promise<MovieEntity> {
    const movie = await this.getMovieByID(id);
    movie.isAvailable = isAvailable;
    await this.movieRepository.save(movie);
    return movie;
  }

  async deleteMovie(id: string): Promise<MovieEntity> {
    const movie = await this.getMovieByID(id);
    await this.movieRepository.remove(movie);
    return movie;
  }
}
