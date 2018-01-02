import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { setInStorage, removeFromStorage, getFromStorage, tokenNotExpired } from './../_helpers/index'

import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    
    @Output() changeAuthentication: EventEmitter<boolean> = new EventEmitter();

    cachedRequests: Array<HttpRequest<any>> = [];

    public login(username: string, password: string) {
        return this.http.post<any>('login/', { 
            username: username, 
            password: password 
        })
    }

    public triggerChange() {
        this.changeAuthentication.emit(this.isAuthenticated());
    }

    public generateAccessToken(): string{
        this.http.get<any>('access_token/').subscribe(
            response => {
                this.setAccessToken(response.accessToken);
                this.retryFailedRequests();
            },
            err => {
                console.log(err);
                this.logout();
            });
        return this.getAccessToken();
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
        this.triggerChange();
    }

    public setAccessToken(token): void {
        setInStorage('access_token', token);
    }

    public setRefreshToken(token): void {
        setInStorage('refresh_token', token);
    }

    public setUser(User): void {
        setInStorage('current_user', User);
    }

    public getUser(): any {
        return getFromStorage('current_user');
    }

    public getRefreshToken(): string {
        return getFromStorage('refresh_token');
    }

    public getAccessToken(): string {
        return getFromStorage('access_token');
    }

    public isAuthenticated(): boolean {
        const refreshToken = this.getRefreshToken();
        return tokenNotExpired(refreshToken);
    }
}