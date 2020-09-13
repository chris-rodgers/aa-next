import React from 'react';
import styles from '../styles/modules/Filters.module.scss';
import classnames from "classnames";

// Filters
export function Checkbox(props) {
    return <div>
        <div className={`${styles.checkboxes} ${styles[`checkboxes--${props.selectedModal.toLowerCase()}`]}`}>{Object.keys(props.items).map(key => {
            const item = props.items[key];
            const className = classnames(styles.checkbox, { [`${styles['checkbox--active']}`]: props.filter[props.selectedModal] && props.filter[props.selectedModal][key] })
            // console.log(props.filter);
            return <div className={styles.column}>
                <div className={className} onClick={props.handleSetFilter} data-filter={props.selectedModal} data-item={key} key={key}>
                    <div className={styles.checkbox__marker} />

                    {{
                        AIRLINE: <img src={`/airlinelogos/${key.toLowerCase()}_logo.gif`} alt={item.meta[0]} />,
                        STOPS: <div className={styles.checkbox__label}>{key}</div>,
                    }[props.selectedModal] || <div className={styles.checkbox__label}>{item.meta[0]}</div>}
                </div>
            </div>
        })}</div>
        <button className={styles.reset} onClick={props.handleSetFilter} data-filter={props.selectedModal}>× Reset</button>
    </div>
}

export function DepartureTime(props) {
    const departureTimes = [
        'Before 10am',
        '10am - 3pm',
        '3pm - 8pm',
        'After 8pm',
    ]

    return <div>
        <div className={`${styles.checkboxes} ${styles[`checkboxes--departuretime`]}`}>
            {departureTimes.map((label, i) => {
                const className = classnames(styles.checkbox, { [`${styles['checkbox--active']}`]: props.filter[props.selectedModal] && props.filter[props.selectedModal][i + 1] })
                return <div className={styles.column}>
                    <div className={className} onClick={props.handleSetFilter} data-filter={props.selectedModal} data-item={i + 1} key={i}>
                        <div className={styles.checkbox__marker} />
                        <div className={styles.checkbox__label}>{label}</div>
                    </div>
                </div>
            })}
        </div>
        <button className={styles.reset} onClick={props.handleSetFilter} data-filter={props.selectedModal}>× Reset</button>
    </div>
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