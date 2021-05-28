import React, { Component } from 'react';
import './ErrorButton.css';

export class ErrorButton extends Component {
    state = {
        renderError: false
    };

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button
                className='btn-margin error-button btn btn-danger '
                onClick={() => this.setState({renderError: true})}
            >
                Throw Error
            </button>
        )
    };
}
;