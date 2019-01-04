import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'userProfile', component:UserProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
