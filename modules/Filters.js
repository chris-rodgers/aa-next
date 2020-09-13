import React from 'react';
import styles from '../styles/modules/Filters.module.scss';
import classnames from "classnames";
const inputTypes = {
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
}

// Filters
export function Checkbox(props) {
    return <div className={styles.checkboxes}>{Object.keys(props.items).map(key => {
        const item = props.items[key];
        const className = classnames(styles.checkbox, { [`${styles['checkbox--active']}`]: props.filter[props.selectedModal] && props.filter[props.selectedModal][key] })
        // console.log(props.filter);
        return <div className={className} onClick={props.handleSetFilter} data-filter={props.selectedModal} data-item={key} key={key}>
            <div className={styles.checkbox__marker} />
            <div className={styles.checkbox__label}>{item.meta[0]}</div>
        </div>
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