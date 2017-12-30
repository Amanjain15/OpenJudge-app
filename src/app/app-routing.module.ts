import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//     { path: '', pathMatch: 'full', component: HomeComponent },
//     {
//         path: 'products',
//         component: ProductListComponent,
//         children: [
//             { path: 'add', component: ProductAddEditComponent },
//             { path: 'edit/:id', component: ProductAddEditComponent }
//         ]
//     },

// ];

const routes: Routes = [ 
   { path: 'login', component: LoginComponent, data: {
   	animation: {
   		value: 'login'
   }}}, 
   { path: '', component: HomeComponent, pathMatch: 'full', data: {
   	animation: {
   		value: 'home'
   }}}
   // { path: '**', component: PageNotFoundComponent } 
];  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, LoginComponent, FooterComponent, NavComponent];