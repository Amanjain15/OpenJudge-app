import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { AuthService } from './../_services/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { snakeToCamel } from './../_helpers/index'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  baseUrl:string = 'http://localhost:8000/api';
  auth:any;

  constructor(private injector: Injector) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth = this.injector.get(AuthService);
    
    request = request.clone({
      setHeaders: {
        Authorization: this.auth.getAccessToken()||'None',
        // 'Content-Type': 'application/json' 
      },
      url: this.prepareUrl(request.url)
    });

    console.log(request);
    // request.url = 'http://localhost:8000' + request.url
    
    return next.handle(request).map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        event = event.clone({ body: snakeToCamel(event.body) })
        return event
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.auth.generateAccessToken();
          this.auth.collectFailedRequest(request);
        }
      }
    });
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }

  private prepareUrl(url: string): string {
    console.log(this.isAbsoluteUrl(url));
    url = this.isAbsoluteUrl(url) ? url : this.baseUrl + '/' + url;
    console.log(url);
    
    return url.replace(/([^:]\/)\/+/g, '$1');
  }
}