import React, { Component } from 'react';

class StatePractice extends Component {
    constructor() {
        super()
        this.state = {
            message = '',
            inputText: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter some text" onFocus={this.setState} />
                <h3>this.message</h3>
            </div>
        );
    }
}

export default StatePractice;