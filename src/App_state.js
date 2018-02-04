import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {counter: this.props.initialCounter}
        setInterval(() => {
            this.setState({counter: this.state.counter + 1})
        }, 1000);
    }

    render() {
        return (
            <NumberCounter number={this.state.counter} />
        );
    }
}

Counter.defaultProps = {
    initialCounter: -10
}

class NumberCounter extends Component {
    render() {
        return(
            <span>{this.props.number}</span>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Counter initialCounter={10} />
        );
    }
}

export default App;
