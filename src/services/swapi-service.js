export class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResourse (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Could not get ${url}` + `, received ${res.status}`)
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResourse(`/people/`);
        return res.results.map(this._upgradePerson);
    };
    async getPerson(id) {
        const person = await this.getResourse(`/people/${id}`);
        return this._upgradePerson(person)
    };

    async getAllPlanets() {
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._upgradePlanet);
    };
    async getPlanet(id) {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._upgradePlanet(planet);
    };

    async getAllStarships() {
        const res = await this.getResourse(`/starships/`);
        return res.results.map(this._upgradePlanet);
    };
    async getStarship(id) {
        const starship = await this.getResourse(`/starships/${id}`);
        return this._upgradeStarship(starship);
    };

    _getId (item) {
        const regEx = /\/([0-9]*)\/$/;
        return item.url.match(regEx)[1];
    }

    _upgradePlanet(planet) {
        return {
            id: this._getId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _upgradeStarship(starship) {
        return {
            id: this._getId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _upgradePerson(person) {
        return {
            id: this._getId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear
        }
    }
}