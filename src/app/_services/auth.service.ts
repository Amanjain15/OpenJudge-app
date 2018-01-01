import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }
 
    public login(username: string, password: string) {
        return this.http.post('login/', { 
            username: username, 
            password: password 
        }).subscribe(response => {
                // login successful if there's a jwt token in the response
                if (response.success) {
                    console.log(response);
                    localStorage.setItem('current_user', JSON.stringify(response.user));
                    localStorage.setItem('refresh_token', JSON.stringify(response.refreshToken));
                } else {
                    
                }
                return response.user;
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

    cachedRequests: Array<HttpRequest<any>> = [];
    public collectFailedRequest(request): void {
        this.cachedRequests.push(request);
      }

    public retryFailedRequests(): void {
        // retry the requests. this method can
        // be called after the token is refreshed
      }

    public logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('current_user');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
    }

    public getAccessToken(): string {
        return localStorage.getItem('access_token');
    }

    public getRefreshToken(): string {
        return localStorage.getItem('refresh_token');
    }

    public isAuthenticated(): boolean {
        const refreshToken = this.getAccessToken();    
        return true;//tokenNotExpired(null, refreshToken);
    }
}