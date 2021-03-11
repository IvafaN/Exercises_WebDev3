import React, { Component } from 'react';

class StatePractice extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            // imageWith: ''
        }
    }

    handleEnter = (e) => {
        this.setState({
            message: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            message: "You agree to the site terms of service by filling out the form."
        })
    }

    imgLoad = (event) => {
        const imageWidth = event.target.width

        if(imageWith > 100) {
            console.log("Your image is big!")
        }
    }

    render() {
        return (
            <div>
                <input type="text" onFocus={this.handleChange} />
                <h3>{this.state.message}</h3>
                <img src="https://picsum.photos/id/237/200/300" alt="puppy" onLoad={this.imgLoad} />
            </div>
        );
    }
}

export default StatePractice;