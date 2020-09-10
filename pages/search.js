import React from 'react';
import Head from 'next/head';
import styles from "../styles/search/search.module.scss";
import withModal from '../components/Modal';

export default function Search() {
    const [results, setResults] = React.useState({});
    const [selectedFlight, setSelectedFlight] = React.useState();
    const [selectedFilter, setSelectedFilter] = React.useState();

    const handleSelectFlight = () => {
        setSelectedFlight({})
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
                return <div className={styles['price-group']} key={priceGroup.id} onClick={handleSelectFlight}>
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
        <Flight open={selectedFlight} handleClose={() => { setSelectedFlight(undefined) }} position="bottom"/>
        <Filter open={selectedFilter} handleClose={() => { setSelectedFilter(undefined) }} />
    </React.Fragment>
}

const Flight = withModal(props => {
    return <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet faucibus nisl vel dignissim. Fusce sit amet fermentum dui. Sed odio mi, rutrum a sem et, malesuada lacinia mi. Pellentesque eget sapien id purus condimentum aliquam. Morbi maximus, urna et viverra condimentum, risus erat suscipit sapien, ac malesuada odio metus non diam. Ut quis arcu non neque congue eleifend. Donec porttitor gravida arcu, sed viverra diam viverra eu. Etiam interdum rhoncus tincidunt. Sed purus urna, hendrerit at tincidunt sit amet, aliquet vitae turpis. Sed eleifend tincidunt odio et commodo. Praesent nec ullamcorper nibh. Vivamus sapien risus, sodales sit amet lectus eu, rhoncus hendrerit odio. Mauris nulla purus, molestie sed aliquet eu, tristique sed quam. Nunc fringilla nec orci ut finibus. Phasellus maximus ipsum eget justo lacinia, vitae eleifend augue auctor. Nam venenatis, mi at porttitor placerat, velit sem lobortis augue, id egestas nunc turpis non urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet faucibus nisl vel dignissim. Fusce sit amet fermentum dui. Sed odio mi, rutrum a sem et, malesuada lacinia mi. Pellentesque eget sapien id purus condimentum aliquam. Morbi maximus, urna et viverra condimentum, risus erat suscipit sapien, ac malesuada odio metus non diam. Ut quis arcu non neque congue eleifend. Donec porttitor gravida arcu, sed viverra diam viverra eu. Etiam interdum rhoncus tincidunt. Sed purus urna, hendrerit at tincidunt sit amet, aliquet vitae turpis. Sed eleifend tincidunt odio et commodo. Praesent nec ullamcorper nibh. Vivamus sapien risus, sodales sit amet lectus eu, rhoncus hendrerit odio. Mauris nulla purus, molestie sed aliquet eu, tristique sed quam. Nunc fringilla nec orci ut finibus. Phasellus maximus ipsum eget justo lacinia, vitae eleifend augue auctor. Nam venenatis, mi at porttitor placerat, velit sem lobortis augue, id egestas nunc turpis non urna.</div>
})

const Filter = withModal(props => {
    return <div></div>
})

function formatPrice(priceGroup) {
    return `${priceGroup.fareTotalPrefix}${priceGroup.fareTotalIntText}${priceGroup.fareTotalDecimalPoint}${priceGroup.fareTotalDecText}${priceGroup.fareTotalSuffix}`
}