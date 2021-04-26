import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Movie} from "./models/Movie";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMovies(): Movie[] {
    return this.appService.getMovies();
  }
}
