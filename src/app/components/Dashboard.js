import React from 'react';
import TopicForm from './TopicForm';
import TopicList from './TopicList';
import RepoList from './RepoList';
import { Repo } from '../models/Repo'

export default class Dashboard extends React.Component {
    state = {
        topics: ['React', 'Angular', 'Vue'],
        repos: [],
        loading: false
    }

    addTopic(topic) {
        this.setState(Object.assign({}, this.state, {
            topics: this.state.topics.concat([topic])
        }))
    }

    selectTopic(topic) {
        this.fetchRepoForTopic(topic);
    }

    fetchRepoForTopic(topic) {
        this.setState({
            repos: [],
            loading: true
        })


        const header = new Headers({
            Authorization: 'token a65ddc5d87e40325e0753b82b711d9b1a360519a'
        });
        const options = {
            headers: header
        };


        fetch(
            `https://api.github.com/search/repositories?order=desc&q=topic:${topic}&sort=stars`,options
        )
            .then(response => response.json())
            .then(json => json['items'])
            .then(items => items.map((repo) => new Repo(repo)))
            .then(repos => {
                this.setState({
                    repos: repos,
                    loading: false
                })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <TopicForm onSubmitTopic={this.addTopic.bind(this)} />
                <TopicList topics={this.state.topics} onSelectTopic={this.selectTopic.bind(this)} />
                <RepoList repos={this.state.repos} />
                {this.state.loading ? <span>Loading</span> : null}
            </div>
        )
    }
}