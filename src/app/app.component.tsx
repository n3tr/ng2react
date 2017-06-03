import { Component, AfterViewInit, ViewChild } from '@angular/core';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('reactRoot') reactRoot;
  title = 'app works!';

  ngAfterViewInit() {
    ReactDOM.render(<App />, this.reactRoot.nativeElement);
  }
}
