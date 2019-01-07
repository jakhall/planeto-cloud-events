import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {GroupComponent} from "./group-view/group-view.component"
import {MatListModule} from '@angular/material/list';
import {AuthGuard} from "../auth/auth.guard";
import {SearchGroupComponent} from './search-group/search-group.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'user/:id', component:UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'group/:id', component:GroupComponent, canActivate: [AuthGuard]},
  { path: 'search/:groupName',component:SearchGroupComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatListModule],
  exports: [RouterModule, MatListModule]
})

export class HomePageRoutingModule { }
