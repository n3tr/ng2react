import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

import { Repo } from '../models/Repo';

import React from 'react';
import ReactDOM from 'react-dom';

import RepoList from '../components/RepoList';
import TopicList from '../components/TopicList';
import TopicForm from '../components/TopicForm';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('repoListHost') repoListHost;
  @ViewChild('topicListHost') topicListHost;
  @ViewChild('topicFormHost') topicFormHost;

  topics = new BehaviorSubject<String[]>(['React', 'Angular', 'Vue']);
  repos = new BehaviorSubject<Repo[]>([]);
  loading = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.repos.subscribe( repos => {
      ReactDOM.render(<RepoList repos={repos} />, this.repoListHost.nativeElement);
    });

    this.topics.subscribe( topics => {
      ReactDOM.render(<TopicList topics={topics} onSelectTopic={this.selectTopic.bind(this)} />, this.topicListHost.nativeElement);
    });

    ReactDOM.render(<TopicForm  onSubmitTopic={this.addTopic.bind(this)} />, this.topicFormHost.nativeElement);
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
