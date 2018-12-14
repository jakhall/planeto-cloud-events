import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService} from "./services/app.service";
import { CardModule} from "primeng/primeng";
import {DialogModule, ButtonModule} from "primeng/primeng";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessageModule, MenubarModule,CalendarModule, MultiSelectModule, RadioButtonModule, DropdownModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    BrowserAnimationsModule
  ],
  providers: [AppService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
