import React, { Component } from 'react';
import './RandomPlanet.css';
import { SwapiService } from '../../services/swapi-service'
import { Spiner } from '../Spiner/Spiner';

export class RandomPlanet extends Component {

    SwapiService = new SwapiService;

    state = {
        planet: {},
        loading: true
    }

    constructor() {
        super();
        this.updatePlanet();
    };

    onPlanetLoaded = (planet) => {
        return this.setState({ 
            planet,
            loading: false
         })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;

        this.SwapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
    }

    render() {
        const { planet, loading } = this.state;
        
        const spiner = loading ? <Spiner /> : null;
        const planetInfo = !loading ? <PlanetInfo planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded bg-dark">
                {spiner}
                {planetInfo}
            </div>
        )
    }
}

const PlanetInfo = ({ planet }) => {
    const {id, name, population, rotationPeriod, diameter} = planet

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}