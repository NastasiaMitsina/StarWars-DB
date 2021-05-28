import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { ItemList } from '../ItemList/ItemList';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import './App.css';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { PeoplePage } from '../PeoplePage/PeoplePage';

export class App extends Component {
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
                <PeoplePage />
                <PeoplePage />
            </div>
        )
    }
}