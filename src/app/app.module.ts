import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { ResultListComponent } from './result-list/result-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopicFormComponent,
    TopicListComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
