import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { PeoplePage } from '../PeoplePage/PeoplePage';
import { SwapiService } from '../../services/swapi-service';
import './App.css';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import { Row } from '../Row/Row';

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

        const { getPerson, 
                getStarship, 
                getPersonImage, 
                getPlanetImage } = this.swapiService;

        const personDetails = (
            <ItemDetails 
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        )
        const starshipDetails = (
            <ItemDetails 
                itemId={5}
                getData={getStarship}
                getImageUrl={getPlanetImage}
            />
        )

        return (
            <div>
                <Header />
                <Row 
                    left={personDetails}
                    right={starshipDetails}
                />
            </div>
        )
    }
}