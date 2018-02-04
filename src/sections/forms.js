import React, {Component} from 'react';

export default class Forms extends Component {
    constructor() {
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleOnChange = (e) => {
        console.log(e.target.checked);
        this.setState({inputTerms: e.target.checked })
    }

    render() {
        return(
            <section>
                <h1>Forms</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text" id="name" name="name"
                        placeholder="Put your name here"
                        onChange={(e) => this.setState({inputName: e.target.value })}
                        value={this.state.inputName}/>

                    <label htmlFor="twitter">Twitter: </label>
                    <input
                        type="text" id="twitter" name="twitter"
                        placeholder="Put your twitter here"
                        onChange={(e) => this.setState({inputTwitter: e.target.value })}
                        value={this.state.inputTwitter}/>

                    <label htmlFor="terms">Accept the terms and conditions: </label>
                    <input
                        type="checkbox" id="terms" name="terms"
                        checked={this.state.inputTerms}
                        onChange={this.handleOnChange} />

                    <button>Send</button>
                </form>
            </section>
        )
    }
}
