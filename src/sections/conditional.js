import React, { Component } from 'react';

class ComponentA extends Component {
    render() {
        return(
            <p>Component A</p>
        )
    }
}

class ComponentB extends Component {
    render() {
        return(
            <p>Component B</p>
        )
    }
}

export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = {showA : true}
    }

    render() {
        return (
            <div>
                <h1>Conditional Rendering:</h1>
                {this.state.showA ? <ComponentA /> : <ComponentB />}
            </div>
        )
    }
}
