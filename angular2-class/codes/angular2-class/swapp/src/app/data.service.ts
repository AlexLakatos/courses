import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  baseUrl: string;

  constructor(private http:Http) {
    this.baseUrl = "http://swapi.co/api/"
  }

  getStarShips(id: number):Observable<any> {
    return this.http.get(`${this.baseUrl}/starships/${id}`)
  }

}
