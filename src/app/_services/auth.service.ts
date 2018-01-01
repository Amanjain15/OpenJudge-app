import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { setInStorage, getFromStorage, removeFromStorage, tokenNotExpired } from './../_helpers/index'

import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }
    
    cachedRequests: Array<HttpRequest<any>> = [];

    public login(username: string, password: string) {
        return this.http.post<any>('login/', { 
            username: username, 
            password: password 
        }).subscribe((response:any) => {
                // login successful if there's a jwt token in the response
                console.log(response);
                if (response.success) {
                    console.log('login success');
                    setInStorage('current_user', response.user);
                    setInStorage('refresh_token', response.refreshToken);
                } else {
                    console.log('login faliure');
                }
            });
    }

    public generateAccessToken(){
        this.http.get('access_token').subscribe(
            data => {
                console.log(data)
            },
            err => {
                console.log(err)
            });
    }
    
    public collectFailedRequest(request): void {
        this.cachedRequests.push(request);
      }

    public retryFailedRequests(): void {
        // retry the requests. this method can
        // be called after the token is refreshed
    }

    public logout() {
        // remove user from local storage to log user out
        removeFromStorage('current_user');
        removeFromStorage('refresh_token');
        removeFromStorage('access_token');
    }

    public getAccessToken(): string {
        return getFromStorage('access_token');
    }

    public getRefreshToken(): string {
        return getFromStorage('refresh_token');
    }

    public isAuthenticated(): boolean {
        const refreshToken = this.getRefreshToken();
        return tokenNotExpired(refreshToken);
    }
}