import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller("/products")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts():  Observable<any[]> {
    return this.appService.getProducts();
  }

  @Get(":id")
  getProductById(@Param('id')id:string) {
 
    return this.appService.getProductById(id);
  }

}