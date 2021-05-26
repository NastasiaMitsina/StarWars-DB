import React, { Component } from 'react';
import './RandomPlanet.css';
import { SwapiService } from '../../services/swapi-service'
import { Spiner } from '../Spiner/Spiner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export class RandomPlanet extends Component {

    SwapiService = new SwapiService;

    state = {
        planet: {},
        loading: true,
        error: false
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
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;

        this.SwapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state;
        
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spiner = loading && !error ? <Spiner /> : null;
        const planetInfo = hasData ? <PlanetInfo planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded bg-dark">
                {errorMessage}
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