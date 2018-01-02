import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/index'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	isLoggedIn: boolean = false;

  constructor(private auth:AuthService) {
  }

  logout() {
  	this.auth.logout();
  }

  ngOnInit() {
  	console.log("oninit");
  	this.auth.changeAuthentication.subscribe(isAuthenticated => {
  		console.log("auth change");
  		console.log(isAuthenticated);
  		this.isLoggedIn = isAuthenticated;
  	});
  }

}
