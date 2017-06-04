
import React from 'react';

function RepoListItem({ repo }) {
    return (
        <li className="repo-list__item">
            <a href={repo.html_url}>
                <div className="repo-info">
                <img className="repo-info__avatar" src={repo.avatar_url}/>
                <span className="repo-info__title">{ repo.name }</span>
                <span className="repo-info__stars">{ repo.stargazers_count }</span>
                </div>
            </a>
        </li>
    )
}

export default class RepoList extends React.Component {
    render() {

        const repos = this.props.repos || [];
        const repoList = repos.map( (repo) => <RepoListItem repo={repo} key={repo.id} />)
        return (
            <ul className="repo-list">
                { repoList }
            </ul>
        )
    }
}