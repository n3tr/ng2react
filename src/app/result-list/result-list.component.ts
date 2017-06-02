import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Repo } from '../models/Repo';

@Component({
  selector: 'result-list',
  templateUrl: './result-list.component.html'
})
export class ResultListComponent implements OnInit {
  @Input('repos') repos: BehaviorSubject<Repo[]>;

  constructor() { }

  ngOnInit() {
  }

}
