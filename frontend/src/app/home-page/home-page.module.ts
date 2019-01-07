import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardModule,
  CheckboxModule,
  DataListModule,
  DataTableModule,
  InputTextModule,
  MenuModule,
  SplitButtonModule,
  TabMenuModule
} from 'primeng/primeng';
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
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GroupComponent} from './group-view/group-view.component'
import {DataSharingService} from './app-header/data-sharing.service'
@NgModule({
  declarations: [HomePageComponent,
                AppHeaderComponent,
                EventManagementComponent,
                LoginComponent,
                SignupComponent,
                UserProfileComponent,
                GroupComponent,
              ],
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
    RadioButtonModule,
    InputTextModule, DataTableModule, ButtonModule, DialogModule,
    CheckboxModule, DataListModule, MenubarModule,MenuModule,TabMenuModule,FullCalendarModule,SplitButtonModule
  ],
  exports: [AppHeaderComponent, EventManagementComponent],
  providers: [DataSharingService],
})
export class HomePageModule { }
