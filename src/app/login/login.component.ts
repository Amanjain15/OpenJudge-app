import { Component, OnInit } from '@angular/core';
import { AlertService, AuthService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	model: any = {};

  constructor(
  	private auth: AuthService,
  	private alertService: AlertService
  ){}

  ngOnInit() {
  	this.auth.logout();
  }

  login() {
    console.log("clicked");
  	this.auth.login(this.model.username, this.model.password);
  }
}
