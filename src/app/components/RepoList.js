import React from 'react';

const RepoListItem = ({ repo }) => {
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

const RepoList = ({ repos }) => {
    return (
        <ul className="repo-list">
            { repos.map( repo => <RepoListItem repo={repo} key={repo.id} />)}           
        </ul>
    )
}

export default RepoList