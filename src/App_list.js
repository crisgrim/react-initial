import React, { Component } from 'react';
import './App.css';
import cars from './data/cars.json'

class CarItem extends Component {
    render() {
        const { car, index } = this.props
        return(
            <li>
                <p><strong>Index: </strong>{index}</p>
                <p><strong>Id: </strong>{car.id}</p>
                <p><strong>Name: </strong>{car.name}</p>
                <p><strong>Company: </strong>{car.company}</p>
            </li>
        )
    }
}

class App extends Component {
    render() {
        return (
            <ul>
                {cars.map((car, index) => {
                    return (
                        <CarItem index={index} key={car.id} car={car} />
                    )
                })}
            </ul>
        );
    }
}

export default App;
