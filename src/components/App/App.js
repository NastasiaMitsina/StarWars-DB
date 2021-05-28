import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { ItemList } from '../ItemList/ItemList';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { PeoplePage } from '../PeoplePage/PeoplePage';
import { SwapiService } from '../../services/swapi-service';
import './App.css';

export class App extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <ErrorMessage />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList 
                            onPersonSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList 
                            onPersonSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}