import React from 'react';
import './ItemList.css';

export const ItemList = (props) => {
    const { data, onItemSelected, children:renderLabel } = props;

    const itemsList = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item" 
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        )
    })

    return (
        <ul className="item-list list-group">
              {itemsList}
        </ul>
    )
}