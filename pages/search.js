import React from 'react';
import Head from 'next/head';
import styles from "../styles/search/search.module.scss";
import flight from "../styles/search/flight.module.scss";
import withModal from '../components/Modal';

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function Search() {
    const [results, setResults] = React.useState({});
    const [selectedPriceGroup, setSelectedPriceGroup] = React.useState();
    const [selectedFilter, setSelectedFilter] = React.useState();

    const handleSelectPriceGroup = e => {
        setSelectedPriceGroup(Number(e.currentTarget.dataset.id))
    };

    const handleSelectFilter = () => {
        setSelectedFilter({})
    };

    React.useEffect(() => {
        // Call search API
        fetch('/api/search').then(result => result.json()).then(setResults);
    }, []);

    if (!results.priceGroups) {
        return null;
    }

    return <React.Fragment>
        <div className={styles.header}>
            <div className={styles.header__row}>
                <button className={styles.header__item}>🛫&nbsp; London - Paris</button>
                <button className={styles.header__item}>👥&nbsp; 1 Adult</button>
                <button className={styles.header__item}>📅&nbsp; Sat 10 Oct - Sat 17 Oct</button>
            </div>
            <div className={styles.header__row}>
                <button className={styles.header__item} onClick={handleSelectFilter}>Flexible Changes</button>
                <button className={styles.header__item} onClick={handleSelectFilter}>Flexible Cancellation</button>
                <button className={styles.header__item} onClick={handleSelectFilter}>Stops</button>
                <button className={styles.header__item} onClick={handleSelectFilter}>Bags</button>
                <button className={styles.header__item} onClick={handleSelectFilter}>Airlines</button>
                <button className={styles.header__item} onClick={handleSelectFilter}>Class</button>
                <button className={styles.header__item} onClick={handleSelectFilter}>Times</button>
                <button className={styles.header__item} onClick={handleSelectFilter}>Duration</button>
            </div>
        </div>
        <div>
            {results.priceGroups ? results.priceGroups.map(priceGroup => {
                return <div className={styles['price-group']} key={priceGroup.id} onClick={handleSelectPriceGroup} data-id={priceGroup.id}>
                    <div className={styles['price-group__segments']}>
                        {priceGroup.groupSegments.map(groupSegments => {
                            const segment = groupSegments.segments[0]; // May have to loop through if we do grouping again
                            const stops = segment.legs.length - 1;
                            // console.log(groupSegments.segments)
                            return <div className={styles.segment} key={segment.itineraryGroupId}>
                                <div className={styles.segment__logo}>
                                    <img src={`/airlinelogos/${segment.operatingAirlineCode.toLowerCase()}_logo.gif`} />
                                </div>
                                <div className={styles.segment__content}>
                                    <div className={styles.segment__airports}>
                                        <div className={styles.airport}>
                                            <div className={styles.airport__time}>{segment.departureTime}</div>
                                            <div className={styles.airport__code}>{segment.departureAirportCode}</div>
                                        </div>
                                        <div className={styles.segment__legs}>
                                            <small>{segment.eft}</small>
                                            <div>{stops ? `${stops} Stop(s)` : 'Direct'}</div>
                                        </div>
                                        <div className={styles.airport}>
                                            <div className={styles.airport__time}>{segment.arrivalTime}</div>
                                            <div className={styles.airport__code}>{segment.arrivalAirportCode}</div>
                                        </div>
                                    </div>
                                    <div className={styles.segment__tags}>
                                        {segment.seatsAvailable ? <div className={styles.tag}>
                                            {segment.seatsAvailable} seats left
                                        </div> : null}
                                        {segment.flexibleChange ? <div className={styles.tag}>
                                            Flexible Change
                                        </div> : null}
                                        {segment.flexibleCancellation ? <div className={styles.tag}>
                                            Flexible Cancellation
                                        </div> : null}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className={styles['price-group__price']} dangerouslySetInnerHTML={{ __html: formatPrice(priceGroup) }} />
                </div>
            }) : null}
        </div>
        <Flight open={selectedPriceGroup != undefined}
            handleClose={() => { setSelectedPriceGroup(undefined) }}
            position="bottom"
            selectedPriceGroup={selectedPriceGroup}
            results={results}
            title="Flight Details"
        />
        <Filter open={selectedFilter}
            handleClose={() => { setSelectedFilter(undefined) }}
        />
    </React.Fragment>
}

const Flight = withModal(props => {
    const selectedPriceGroup = React.useRef(props.results.priceGroups.filter(priceGroup => priceGroup.id == props.selectedPriceGroup)).current[0];
    console.log(selectedPriceGroup);
    return <React.Fragment>
        <div>
            {selectedPriceGroup.groupSegments.map(groupSegment => {
                const segment = groupSegment.segments[0]; // May have to change this if we do grouping again

                return <div>
                    <div class={flight['segment-label']}>{groupSegment.label}</div>
                    <div class={flight.legs}>
                        {segment.legs.map((leg, i) => {
                            console.log(leg)
                            return <React.Fragment>
                                <div class={flight.airport}>
                                    <div class={flight.airport__dot} />
                                    <div>
                                        {leg.departureAirportName} <small>{leg.departureAirportCode}</small>
                                        <div>
                                            <small>Depart: {dateToString(new Date(leg.departureDateTime.date))}</small>
                                        </div>
                                    </div>
                                </div>
                                {segment.legs.length - 1 == i ? <div class={flight.airport}>
                                    <div class={flight.airport__dot} />
                                    <div>
                                        {leg.arrivalAirportName} <small>{leg.arrivalAirportCode}</small>
                                        <div>
                                            <small>Arrive: {dateToString(new Date(leg.arrivalDateTime.date))}</small>
                                        </div>
                                    </div>
                                </div> : null}
                            </React.Fragment>
                        })}
                    </div>
                </div>
            })}
        </div>
        <div class={flight.price}>
            Great Price!
            <strong dangerouslySetInnerHTML={{ __html: formatPrice(selectedPriceGroup) }}/>
        </div>
        <div class={flight.footer}>
            <button class="button">Book Flight</button>
        </div>
    </React.Fragment>
})

const Filter = withModal(props => {
    return <div></div>
})

function formatPrice(priceGroup) {
    return `${priceGroup.fareTotalPrefix}${priceGroup.fareTotalIntText}${priceGroup.fareTotalDecimalPoint}${priceGroup.fareTotalDecText}${priceGroup.fareTotalSuffix}`
}

function dateToString(date) {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getHours()}:${date.getMinutes()}`
}