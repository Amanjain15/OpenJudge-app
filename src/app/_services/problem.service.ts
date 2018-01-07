import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProblemService {

  constructor(private http: HttpClient) {}

  public getProblem(problemCode) {
  	return this.http.get<any>('problem/' + problemCode );
  }
}
