import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller("/users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers():  Observable<any[]> {
    return this.appService.getUsers();
  }
}
