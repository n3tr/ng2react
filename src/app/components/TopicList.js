import React from 'react';

function TopicListItem({ topic, onSelectTopic }) {
    return (
        <li className="topic-list__item" >
            <a href="#"
                onClick={(event) => {
                    event.preventDefault()
                    onSelectTopic(topic)
                }}>{topic}</a>
        </li>
    )
}

function TopicList({ topics, onSelectTopic }) {

    const topicList = topics.map(
        topic => <TopicListItem topic={topic} onSelectTopic={onSelectTopic} key={topic} />
    )

    return (
        <div className="topics">
            <ul className="topic-list cf">
                {topicList}
            </ul>
        </div>
    )
}

export default TopicList