import { HttpService } from '@nestjs/axios';
import { Injectable, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable,map, find, tap,filter, mergeMap, concatAll, flatMap } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  getUsers():  Observable<any[]>{
    return this.httpService.get('https://fakerapi.it/api/v1/users').pipe(map(response => response.data.data));
  }
}
