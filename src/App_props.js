import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Textheader extends Component {
    render() {
        return (
            <h2>Hello, {this.props.title}</h2>
        );
    }
}

class Text extends Component {
    render() {
        const {
            array,
            hassClass,
            multiply,
            newTitle,
            number,
            objectToText,
            title,
            text
        } = this.props;
        const mapArray = array.map(multiply);
        return (
            <div className={hassClass ? 'has-class' : ''}>
                <p>{mapArray.join(', ')} - {number} - {text}</p>
                {title}
                <p>{newTitle}</p>
                <p>{objectToText.name} {objectToText.lastname}</p>
            </div>
        );
    }
}

Text.defaultProps = {
    newTitle: 'Title by default'
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome madafakars!</h1>
                </header>
                <Textheader title="madafakars" />
                <Text
                    array={[2, 5, 7]}
                    hassClass={true}
                    multiply={(number) => number * 4}
                    number={1}
                    objectToText={{name: 'cris', lastname: 'ponce'}}
                    title={<p>Título del curso</p>}
                    text="whatever you want"
                />
                <picture>
                    <source srcSet="https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/54eb07cb74150_-_9-things-your-dog-wants-to-tell-you-mdn.jpg?crop=1xw:0.75xh;center,top&resize=100:*" media="(max-width: 767px)" />
                    <source srcSet="https://housemydog.com/blog/wp-content/uploads/2016/05/bigstock-Movie-Director-Dog-crop.jpg" media="(min-width: 768px)" />
                    <img srcSet="https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/54eb07cb74150_-_9-things-your-dog-wants-to-tell-you-mdn.jpg?crop=1xw:0.75xh;center,top&resize=100:*" alt="My default" />
                </picture>
            </div>
        );
    }
}

export default App;
