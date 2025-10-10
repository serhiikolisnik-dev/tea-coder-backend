import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly moviesRepository: Repository<MovieEntity>,
  ) {}

  async getMovies(): Promise<MovieEntity[]> {
    return await this.moviesRepository.find();
  }

  async createMovie(dto: CreateMovieDto): Promise<MovieEntity> {
    const movie = this.moviesRepository.createMovie(dto);
  }
}
