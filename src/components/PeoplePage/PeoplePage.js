import React, { Component } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ItemList } from '../ItemList/ItemList';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import { SwapiService } from '../../services/swapi-service';
import './PeoplePage.css';
import { Row } from '../Row/Row';

export class PeoplePage extends Component {
    swapiService = new SwapiService();

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

        const itemList = (
            <ItemList 
                onPersonSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({ name, gender }) => `${name} (${gender})`}
            />
        );
    
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return (
            <Row left={itemList} right={personDetails} />
        )
    }
}