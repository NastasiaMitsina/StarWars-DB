import React, { Component } from 'react';
import './RandomPlanet.css';
import { SwapiService } from '../../services/swapi-service'

export class RandomPlanet extends Component {

    SwapiService = new SwapiService;

    state = {
        planet: {}
    }

    constructor() {
        super();
        this.updatePlanet();
    };

    onPlanetLoaded = (planet) => {
        return this.setState({ planet })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;

        this.SwapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
    }

    render() {
        const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;

        return (
            <div className="random-planet jumbotron rounded bg-dark">
                <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}