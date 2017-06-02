import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

import { TopicService } from '../topic.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  topics: BehaviorSubject<string[]>;

  constructor( private router: Router, private topicService: TopicService) {
    this.topics = this.topicService.topics;
  }

  addTopic(topic: string) {
    this.topicService.addTopic(topic);
  }

  selectTopic(topic: string) {
    event.preventDefault();
    this.router.navigate(['/topic', topic]);
  }
}
