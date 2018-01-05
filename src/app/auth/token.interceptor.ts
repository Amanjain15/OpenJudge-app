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
import { snakeToCamel } from './../_helpers/index'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  baseUrl:string = 'http://0.0.0.0:8000/api';
  auth:any;

  constructor(private injector: Injector) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth = this.injector.get(AuthService);

    request = request.clone({
      setHeaders: {
        Authorization: this.auth.getAccessToken() || 'None',
        'x-auth-token': this.auth.getRefreshToken() || 'None'
      },
      url: this.prepareUrl(request.url)
    });

    return next.handle(request).map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        event = event.clone({
          body: snakeToCamel(event.body)
        })
        return event
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.auth.collectFailedRequest(request);
          this.auth.generateAccessToken();
        }
      }
    });
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }

  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : this.baseUrl + '/' + url;    
    return url.replace(/([^:]\/)\/+/g, '$1');
  }
}