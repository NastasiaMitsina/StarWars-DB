import React, { Component } from 'react';
import { Spiner } from '../Spiner/Spiner';
import './ItemList.css';

export class ItemList  extends Component {

    state = {
        items: null
    }

    componentDidMount() {
        const { getData } = this.props;
        
        getData()
            .then((items) => {
                this.setState({
                    items
                })
            })
    };

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);

            return (
                <li className="list-group-item" 
                    key={id}
                    onClick={() => this.props.onPersonSelected(id)}>
                    {label}
                </li>
            )
        })
    };

    render() {
        const { items } = this.state;

        if (!items) {
            return <Spiner />
        }

        const itemsList = this.renderItems(items)

        return (
            <ul className="item-list list-group">
                {itemsList}
            </ul>
        )
    }
}