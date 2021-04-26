import { Injectable } from '@nestjs/common';
import { Movie } from './models/Movie';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private movies: Movie[] = [
    { id: 1, name: 'Star Wars: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2019 },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}
