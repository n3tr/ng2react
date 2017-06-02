import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  topics = new BehaviorSubject<String[]>(['React']);

  constructor( private router: Router) { }

  ngOnInit() {
  }

  addTopic(topic: string) {
    const currentTopics = this.topics.getValue();
    this.topics.next(currentTopics.concat([topic]));
  }

  selectTopic(topic: string) {
    event.preventDefault();
    this.router.navigate(['/topic', topic]);
  }
}
