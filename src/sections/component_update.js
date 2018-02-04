import React, {Component} from 'react';
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
    dog: 'https://imgfave.azureedge.net/image_cache/1318558225370484.jpg',
    suricato: 'http://www.infoanimales.com/wp-content/uploads/2011/12/suricata-2.jpg'
}

const ANIMAL_KEYS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component {
    state = {src:ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextProps) {
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }

    shouldComponentUpdate(nextProps) {
        // this.props.animal Old information
        // nextProps.animal New information
        return this.props.animal !== nextProps.animal
    }

    render() {
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                />
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMAL_KEYS)
}

export default class Animal extends Component {
    state = {animal:'dog'}

    renderButton = (animal) => {
        return(
            <button
                // disabled={animal === this.state.animal}
                key={animal}
                onClick={() => this.setState({animal})}
            >
                {animal}
            </button>
        )
    }

    render() {
        return(
            <div>
                <h4>Phase of update component</h4>
                {ANIMAL_KEYS.map(this.renderButton)}
                <AnimalImage animal={this.state.animal} />
            </div>
        )
    }
}
