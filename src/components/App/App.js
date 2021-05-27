import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { ItemList } from '../ItemList/ItemList';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import './App.css';

export class App extends Component {
    state = {
        selectedPerson: null,
    }

    onPersonSelected  = (id) => {
        this.setState({
            selectedPerson: id
        })
    }  

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onPersonSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}