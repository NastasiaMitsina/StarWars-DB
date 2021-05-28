import React, { Component } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ItemList } from '../ItemList/ItemList';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import './PeoplePage.css';

export class PeoplePage extends Component {
    state = {
        selectedPerson: 4,
        hasError: false
    }

    onPersonSelected  = (id) => {
        this.setState({
            selectedPerson: id
        })
    }; 

    componentDidCatch() {
        return this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <ErrorMessage />
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onPersonSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}