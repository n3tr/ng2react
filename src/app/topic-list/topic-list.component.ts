import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'topic-list',
  templateUrl: './topic-list.component.html'
})
export class TopicListComponent implements OnInit {
  @Input('topics') topics: string[] = [];
  @Output() onSelectTopic = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  selectTopic(event: Event, topic: string) {
    event.preventDefault();
    this.onSelectTopic.emit(topic);
  }

}
