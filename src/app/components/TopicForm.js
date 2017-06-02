import React from 'react'

export default class TopicForm extends React.Component {
    state = {
        text: ''
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmitTopic(this.state.text)
        this.clearText()
    }

    clearText() {
        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="search">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="search-form__input"
                        autoComplete="off"
                        placeholder="Type something"
                        name="topic"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                </form>
            </div>
        )
    }
}