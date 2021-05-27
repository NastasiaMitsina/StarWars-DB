import React, { Component } from 'react';
import { SwapiService } from '../../services/swapi-service';
import { Spiner } from '../Spiner/Spiner';
import './ItemList.css';

export class ItemList  extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(arr) {
        return arr.map(({ name, id }) => {
            return (
                <li className="list-group-item" 
                    key={id}
                    onClick={() => this.props.onPersonSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spiner />
        }

        const items = this.renderItems(peopleList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}