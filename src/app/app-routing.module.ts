import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContestsComponent } from './contests/contests.component';
import { ContestComponent } from './contest/contest.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProblemComponent } from './problem/problem.component';
import { SubmissionComponent } from './submission/submission.component';
import { SubmitComponent } from './submit/submit.component';
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
   { path: '', component: HomeComponent, pathMatch: 'full', data: {animation: {value: 'home'}}}, 
   { path: 'login', component: LoginComponent, data: {animation: {value: 'login'}}}, 
   { path: 'contests', component: ContestsComponent, data: {animation: {value: 'contests'}}},
   { path: 'contest/:contestCode', component: ContestComponent,data: {animation: {value: 'contest'}}},
   { path: 'contest/:contestCode/leaderboard', component: ContestsComponent, data: {animation: {value: 'leaderboard'}}},
   { path: 'problem/:problemCode', component: ProblemComponent, data: {animation: {value: 'problem'}}},
   { path: 'problem/:problemCode/submit', component: SubmitComponent, data: {animation: {value: 'submit'}}},
   // { path: '**', component: PageNotFoundComponent } 
];  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, LoginComponent, FooterComponent, NavComponent, ProblemComponent, ContestsComponent, ContestComponent, SubmitComponent];