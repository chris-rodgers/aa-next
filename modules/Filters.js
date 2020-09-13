import React from 'react';
const inputTypes = {
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
}

// Filters
export function Checkbox(props) {
    return <div>{Object.keys(props.items).map(key => {
        const item = props.items[key];
        const id = `filter_${Math.random().toString(36)}`;

        // console.log(props.filter);
        return <React.Fragment key={key}>
            <div onClick={props.handleSetFilter} data-filter={props.selectedModal} data-item={key}>
                {item.meta[0]}
            </div>
        </React.Fragment>
    })}</div>
}

// export function createFilters(priceGroups, config) {

// }

// // Airline Filters
// res.AIRLINE.items[segment.displayAirlineCode] = {
//     label: segment.displayAirlineName,
//     imageSrc: `/airlinelogos/${segment.displayAirlineCode.toLowerCase()}_logo.gif`,
//     priceGroupIds: [...res.AIRLINE.items[segment.displayAirlineCode] ? res.AIRLINE.items[segment.displayAirlineCode].priceGroupIds : [], priceGroup.id]
// };

{
    
}