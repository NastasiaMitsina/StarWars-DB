import React from 'react';
import { ItemDetails, Record } from '../ItemDetails/ItemDetails';
import { SwapiService } from '../../services/swapi-service';

const swapiService = new SwapiService;

const { getPerson,
        getPlanet,
        getStarship,
        getPersonImage,
        getPlanetImage,
        getStarshipImage } = swapiService;

export const PersonDetails = ({ itemId }) => { 
    return (
        <ItemDetails 
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field='name' label='Name' />
            <Record field='gender' label='Gender' />
            <Record field='birthYear' label='Birth Year' />
            <Record field='eyeColor' label='Eye Color' />

        </ItemDetails>
    )
}

export const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field='name' label='Name' />
            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diameter' />

        </ItemDetails>
    )
}

export const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field='model' label='Model' />
            <Record field='length' label='Length' />
            <Record field='passengers' label='Passengers' />
            <Record field='costInCredits' label='Cost' />

        </ItemDetails>
    )
}