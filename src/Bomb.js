import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {secondsLeft: this.props.initialCount}
    }
    countDown() {
        setTimeout(() => {
            this.setState({secondsLeft: this.state.secondsLeft -1})
        }, 1000);
    }
    render() {
        this.countDown()
        return (
            <div>
                {this.state.secondsLeft === 0? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        );
    }
}

export default Bomb;

