import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { Repo } from '../models/Repo';

import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from '../components/Dashboard';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('dashboardHost') dashboardHost;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    ReactDOM.render(
      <div>
        <Dashboard/>
      </div>
    ,
    this.dashboardHost.nativeElement);
  }
}
