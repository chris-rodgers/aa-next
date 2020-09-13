import React from 'react';
import styles from '../styles/modules/Filters.module.scss';
import classnames from "classnames";
const inputTypes = {
    CHECKBOX: 'checkbox',
    RADIO: 'radio'
}

// Filters
export function Checkbox(props) {
    console.log(props)
    return <div className={`${styles.checkboxes} ${styles[`checkboxes--${props.selectedModal.toLowerCase()}`]}`}>{Object.keys(props.items).map(key => {
        const item = props.items[key];
        const className = classnames(styles.checkbox, { [`${styles['checkbox--active']}`]: props.filter[props.selectedModal] && props.filter[props.selectedModal][key] })
        // console.log(props.filter);
        return <div className={styles.column}>
            <div className={className} onClick={props.handleSetFilter} data-filter={props.selectedModal} data-item={key} key={key}>
                <div className={styles.checkbox__marker} />

                {{
                    AIRLINE: <React.Fragment>
                        <img src={`/airlinelogos/${key.toLowerCase()}_logo.gif`} alt={item.meta[0]} />
                    </React.Fragment>
                }[props.selectedModal] || <div className={styles.checkbox__label}>{item.meta[0]}</div>}
            </div>
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