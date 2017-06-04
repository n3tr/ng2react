
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import React from 'react';
import ReactDOM from 'react-dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('reactRoot') reactRoot;
  title = 'app works!';

  ngAfterViewInit() {
    ReactDOM.render(<h1>Hello, React</h1>, this.reactRoot.nativeElement);
  }
}
