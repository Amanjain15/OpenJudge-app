import { Component, OnInit } from '@angular/core';
import { AlertService, AuthService } from '../_services/index';
import { setInStorage, removeFromStorage, getFromStorage } from './../_helpers/index'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	model: any = {};
  errors:any = {};

  constructor(
  	private auth: AuthService,
  	private alertService: AlertService,
    private router: Router
  ){}

  ngOnInit() {
  	this.auth.logout();
  }

  dataAltered() {
    this.errors = {};
  }

  login() {
    this.auth.logout();
  	this.auth.login(this.model.username, this.model.password).subscribe((response:any) => {
      this.errors.incorrectPassword = !response.success;
      if (response.success) {
        console.log('login success');
        setInStorage('current_user', response.user);
        setInStorage('refresh_token', response.refreshToken);
        this.auth.triggerChange();
        this.router.navigate(['/']);
      } else {
        console.log('login faliure');
      }
    }, (error:any) => {
      // no user with this username
      this.errors.incorrectPassword = !error.success;
    });
  }
}
