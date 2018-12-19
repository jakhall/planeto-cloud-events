import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "primeng/primeng";
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { EventManagementComponent } from './event-management/event-management.component';
import {DialogModule, ButtonModule} from "primeng/primeng";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessageModule, MenubarModule,CalendarModule, MultiSelectModule, RadioButtonModule, DropdownModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [HomePageComponent, AppHeaderComponent, EventManagementComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MenubarModule,
    CardModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    CalendarModule,
    MultiSelectModule,
    TableModule,
    DropdownModule,
    RadioButtonModule
  ],
  exports: [AppHeaderComponent, EventManagementComponent],
})
export class HomePageModule { }
