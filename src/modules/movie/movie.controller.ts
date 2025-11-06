import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovies() {
    return this.movieService.getMovies();
  }

  @Get(':id')
  getMovieByID(@Param('id') id: string) {
    return this.movieService.getMovieByID(id);
  }

  @Post()
  createMovie(@Body() dto: MovieDto) {
    return this.movieService.createMovie(dto);
  }

  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.updateMovie(id, dto);
  }

  @Patch(':id/:isAvailable')
  availableMovie(
    @Param('id') id: string,
    @Param('isAvailable', ParseBoolPipe) isAvailable: boolean,
  ) {
    return this.movieService.availableMovie(id, isAvailable);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(id);
  }
}
