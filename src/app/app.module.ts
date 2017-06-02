import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { TopicListComponent } from './topic-list/topic-list.component';



//
// APPLICATION ROUTES
//
const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'topic/:topic',      component: ResultPageComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResultPageComponent,
    TopicFormComponent,
    TopicListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
