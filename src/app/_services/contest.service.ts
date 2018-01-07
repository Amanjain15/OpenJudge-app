import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContestService {

  constructor(private http: HttpClient) {}

  public getContest(contestCode) {
  	return this.http.get<any>('contest/' + contestCode );
  }
}
