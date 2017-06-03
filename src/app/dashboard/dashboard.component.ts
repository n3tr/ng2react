import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

import { Repo } from '../models/Repo';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  topics = new BehaviorSubject<String[]>(['React', 'Angular', 'Vue']);
  repos = new BehaviorSubject<Repo[]>([]);
  loading = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: string) {
    const currentTopics = this.topics.getValue();
    this.topics.next(currentTopics.concat([topic]));
  }

  selectTopic(topic: string) {
    event.preventDefault();
    this.fetchRepoForTopic(topic);
  }

  fetchRepoForTopic(topic) {
    this.repos.next([]);
    this.loading.next(true);

    const header = new Headers({
        Authorization: 'token a65ddc5d87e40325e0753b82b711d9b1a360519a'
    });
    const options = {
        headers: header
    };


    fetch(
      `https://api.github.com/search/repositories?order=desc&q=topic:${topic}&sort=stars`, options
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
