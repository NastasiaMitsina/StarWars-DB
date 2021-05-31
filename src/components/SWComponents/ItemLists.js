import React from 'react';
import { ItemList } from '../ItemList/ItemList';
import { withData } from '../HOChelpers/WithData';
import { SwapiService } from '../../services/swapi-service';

const swapiService = new SwapiService;

const { getAllPeople,
        getAllPlanets,
        getAllStarships } = swapiService;

export const PersonList = withData(ItemList, getAllPeople);
export const PlanetList = withData(ItemList, getAllPlanets);
export const StarshipList = withData(ItemList, getAllStarships);