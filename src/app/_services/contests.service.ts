import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContestsService {

  constructor(private http: HttpClient) {}

  public getContests() {
  	return this.http.get<any>('contest/');
  }
}
