import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { SwapiService } from '../../services/swapi-service';
import './App.css';
import { Row } from '../Row/Row';
import { PersonList, PlanetList, StarshipList } from '../SWComponents/ItemLists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../SWComponents/Details';

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
                getStarshipImage,
                getAllPeople } = this.swapiService;


        return (
            <div>
                <Header />

                {/* <PersonList onItemSelected={() => {}} >
                    { ({name}) => <span>{name}</span> }
                </PersonList>

                <PlanetList onItemSelected={() => {}} >
                    { ({name}) => <span>{name}</span> }
                </PlanetList>

                <StarshipList onItemSelected={() => {}} >
                    { ({name}) => <span>{name}</span> }
                </StarshipList> */}

                <PersonDetails itemId={11}/>
                <PlanetDetails itemId={3}/>
                <StarshipDetails itemId={13}/>
            </div>
        )
    }
}