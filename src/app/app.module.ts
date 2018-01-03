import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// import { PageNotFoundComponent } from  './NotFound.component' 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AlertService, AuthService, ContestsService } from './_services/index';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { ContestsComponent } from './contests/contests.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    ContestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule, HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule, Ng2OrderModule, NgxPaginationModule
  ],
  providers: [
  AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  AlertService, ContestsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }