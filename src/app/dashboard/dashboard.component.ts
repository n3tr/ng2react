import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

class Repo {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  avatar_url: string;

  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.full_name = json.full_name;
    this.stargazers_count = json.stargazers_count;
    this.avatar_url = json.owner.avatar_url;
  }
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  topics = new BehaviorSubject<String[]>(['React']);
  repos = new BehaviorSubject<Repo[]>([]);
  typingTopic = '';

  constructor() { }

  ngOnInit() {
  }

  addTopic(event: Event) {
    event.preventDefault();
    const currentTopics = this.topics.getValue();
    this.topics.next(currentTopics.concat([this.typingTopic]));
    this.typingTopic = '';
  }

  selectTopic(event: Event, topic: string) {
    event.preventDefault();
    this.repos.next([]);
    fetch(
      `https://api.github.com/search/repositories?order=desc&q=topic:${topic}&sort=stars`
    )
    .then( response => response.json() )
    .then( json => json['items'] )
    .then( items => items.map( (repo) => new Repo(repo) ))
    .then( repos => {
      this.repos.next(repos);
    })
    .catch( err => console.error(err));
  }
}
