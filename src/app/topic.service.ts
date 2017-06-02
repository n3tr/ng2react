import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TopicService {

  topics = new BehaviorSubject<string[]>(['react', 'angular', 'vue']);

  constructor() { }

  addTopic(topic) {
    const currentTopics = this.topics.getValue();
    this.topics.next(currentTopics.concat([topic]));
  }

}
