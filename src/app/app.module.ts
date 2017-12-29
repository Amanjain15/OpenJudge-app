import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { PageNotFoundComponent } from  './NotFound.component' 
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [ 
   { path: 'login', component: LoginComponent }, 
   { path: '', component: HomeComponent}
   // { path: 'Inventory', component: AppInventory }, 
   // { path: '**', component: PageNotFoundComponent } 
];  

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }