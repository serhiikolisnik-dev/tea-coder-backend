import { Controller } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller({
  path: 'movie',
  host: ['api.themovie.com', 'api.googleapis.com'],
})
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
}
