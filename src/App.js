import React, { Component } from 'react';
import './App.css';

class Button extends Component {
    render() {
        return(
            <button className={this.props.classes} style={{border: this.props.borderColor}}>
                {this.props.label}
            </button>
        )
    }
}

Button.defaultProps = {
    borderColor: '1px solid #09f',
    classes: 'btn'
}

class ButtonError extends Component {
    render() {
        return(
            <Button classes="btn error" label={this.props.label} borderColor="1px solid red"></Button>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Button label="First Button"></Button>
                <ButtonError label="Second Button"></ButtonError>
            </div>
        );
    }
}

export default App;
