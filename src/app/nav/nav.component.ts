import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/index'
// import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

	isLoggedIn: boolean = false;
  user:any = {};

  constructor(private auth:AuthService) {
  }

  logout() {
    this.isLoggedIn = false;
  	this.auth.logout();
  }

  loggedIn() {
    this.user = this.auth.getUser();
    this.isLoggedIn = true;
  }

  ngOnInit() {
  	if(this.auth.isAuthenticated()){
      this.loggedIn();
    }
  	this.auth.changeAuthentication.subscribe(isAuthenticated => {
      if(isAuthenticated){
        this.loggedIn();
      }
    });
  }

}
