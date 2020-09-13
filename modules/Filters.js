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
        ['Before 10am', <React.Fragment><path d="M35.86,64.14a20,20,0,1,1,28.28,0" /><line x1="50" y1="4" x2="50" y2="14" /><line x1="50" y1="70" x2="50" y2="96" /><line x1="82.53" y1="17.47" x2="75.46" y2="24.54" /><line x1="96" y1="50" x2="86" y2="50" /><line x1="14" y1="50" x2="4" y2="50" /><line x1="24.54" y1="24.54" x2="17.47" y2="17.47" /><line x1="50" y1="70" x2="39.5" y2="80.5" /><line x1="50.5" y1="70" x2="61" y2="80.5" /></React.Fragment>],
        ['10am - 3pm', <React.Fragment><circle cx="50" cy="50" r="20" /><line x1="50" y1="4" x2="50" y2="14" /><line x1="50" y1="86" x2="50" y2="96" /><line x1="82.53" y1="17.47" x2="75.46" y2="24.54" /><line x1="24.54" y1="75.46" x2="17.47" y2="82.53" /><line x1="96" y1="50" x2="86" y2="50" /><line x1="14" y1="50" x2="4" y2="50" /><line x1="82.53" y1="82.53" x2="75.46" y2="75.46" /><line x1="24.54" y1="24.54" x2="17.47" y2="17.47" /></React.Fragment>],
        ['3pm - 8pm', <React.Fragment><path d="M35.86,64.14a20,20,0,1,1,28.28,0" /><line x1="50" y1="4" x2="50" y2="14" /><line x1="50.5" y1="96" x2="50.5" y2="70" /><line x1="82.53" y1="17.47" x2="75.46" y2="24.54" /><line x1="96" y1="50" x2="86" y2="50" /><line x1="14" y1="50" x2="4" y2="50" /><line x1="24.54" y1="24.54" x2="17.47" y2="17.47" /><line x1="50.5" y1="96" x2="61" y2="85.5" /><line x1="50" y1="96" x2="39.5" y2="85.5" /></React.Fragment>],
        ['After 8pm', <React.Fragment><path d="M71,75a25,25,0,1,1,7.2-48.94,37,37,0,1,0,0,47.88A24.83,24.83,0,0,1,71,75Z" /></React.Fragment>],
    ]

    return <div>
        <div className={styles.times}>
            {departureTimes.map((label, i) => {
                const className = classnames(styles.time, { [`${styles['time--active']}`]: props.filter[props.selectedModal] && props.filter[props.selectedModal][i + 1] })
                return <div className={styles.column}>
                    <div className={className} onClick={props.handleSetFilter} data-filter={props.selectedModal} data-item={i + 1} key={i}>
                        <svg className={styles.time__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">{label[1]}</svg>
                        <div className={styles.time__label}>{label[0]}</div>
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