import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { PageNotFoundComponent } from  './NotFound.component' 
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }