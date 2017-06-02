import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Repo } from '../models/Repo';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'result-page',
  templateUrl: './result-page.component.html'
})
export class ResultPageComponent implements OnInit {

  repos = new BehaviorSubject<Repo[]>([]);
  topic = new BehaviorSubject<String>('');
  loading = new BehaviorSubject<boolean>(false);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.topic.next(params.topic);
      this.loading.next(true);
      this.fetchRepoForTopic(params.topic);
    });
  }

  fetchRepoForTopic(topic) {
    fetch(
      `https://api.github.com/search/repositories?order=desc&q=topic:${topic}&sort=stars`
    )
    .then( response => response.json() )
    .then( json => json['items'] )
    .then( items => items.map( (repo) => new Repo(repo) ))
    .then( repos => {
      this.loading.next(false);
      this.repos.next(repos);
    })
    .catch( err => console.error(err));
  }

}
