import { Component, OnInit, EventEmitter, AfterViewInit, Output } from '@angular/core';

@Component({
  selector: 'topic-form',
  templateUrl: './topic-form.component.html'
})
export class TopicFormComponent implements OnInit {

  @Output() onSubmitTopic = new EventEmitter<string>();

  currentText = '';

  constructor() { }

  ngOnInit() { }

  onSubmit(event: Event) {
    event.preventDefault();
    this.onSubmitTopic.emit(this.currentText);
    this.currentText = '';

  }

}
