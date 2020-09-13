import React from 'react';
import { FixedSizeList as List, areEqual } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import memoize from "memoize-one";
import classnames from "classnames";
import styles from "../styles/search/search.module.scss";
import flight from "../styles/search/flight.module.scss";
import withModal from '../components/Modal';
import PassengerPicker from "../modules/PassengerPicker";
import { Checkbox, DepartureTime } from "../modules/Filters";
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var modals = {
    PassengerPicker,
    AIRLINE: Checkbox,
    DEPARTUREAIRPORT: Checkbox,
    ARRIVALAIRPORT: Checkbox,
    STOPS: Checkbox,
    DEPARTURETIME: DepartureTime

}
const outerRef = React.createRef();
let rawPriceGroups = [];
let segmentCount = 1;
const searchType = 'RETURN';

export default function Search() {
    const [selectedPriceGroup, setSelectedPriceGroup] = React.useState();
    const [filters, setFilters] = React.useState({});
    const [{ priceGroups, sort, filter }, setPriceGroups] = React.useState({ priceGroups: [], sort: "CHEAPEST", filter: {} });
    const [selectedModal, setSelectedModal] = React.useState();
    const itemSize = (44 * segmentCount) + 14; // (height of each segment * segment count) + padding

    const Modal = withModal(modals[selectedModal]);

    const handleSelectPriceGroup = e => {
        setSelectedPriceGroup(Number(e.currentTarget.dataset.id));
        if (outerRef.current) {
            outerRef.current.scroll({ top: itemSize * Number(e.currentTarget.dataset.index), behavior: "smooth" });
        }
    };

    const handleSelectModal = e => {
        setSelectedModal(e.target.dataset.modal);
    };

    const handleSetSort = e => {
        processPriceGroups({ sort: e.target.dataset.sort });
        if (outerRef.current) {
            outerRef.current.scroll({ top: 0, behavior: "smooth" });
        }
    }

    const handleSetFilter = e => {
        const { type, items } = filters[e.currentTarget.dataset.filter];
        let res = { ...filter };

        // Create filter label if doesn't already exist in obj
        res[e.currentTarget.dataset.filter] = res[e.currentTarget.dataset.filter] || {};

        // if item exists
        if(e.currentTarget.dataset.item){
            const item = items[e.currentTarget.dataset.item];
            res[e.currentTarget.dataset.filter] = {
                CHECKBOX: ({ [e.currentTarget.dataset.item]: y, ...rest }) => { return y ? rest : { ...rest, [e.currentTarget.dataset.item]: item.priceGroupIds } },
                RADIO: () => { return {[e.currentTarget.dataset.item]: item.priceGroupIds} } 
            }[type](res[e.currentTarget.dataset.filter]);
        } 
        // else reset filter
        else {
            res[e.currentTarget.dataset.filter] = {}
        }

    
        processPriceGroups({ filter: res });
    }

    const createFilters = () => {
        const res = {};

        const config = {
            SEGMENT: [
                {
                    name: 'AIRLINE',
                    type: 'CHECKBOX',
                    label: 'Airline',
                    key: 'displayAirlineCode',
                    meta: ['displayAirlineName'],
                },
                {
                    name: 'STOPS',
                    type: 'RADIO',
                    label: 'Stops',
                    key: segment => !segment.stops ? 'Direct' : 'With stops',
                    meta: []
                },
                {
                    name: 'DEPARTURETIME',
                    type: 'CHECKBOX',
                    label: 'Departre time',
                    key: segment => {
                        if(segment.departureTimeData > 2000){
                            return 4
                        }
                        if(segment.departureTimeData > 1500){
                            return 3
                        }
                        if(segment.departureTimeData > 1000){
                            return 2
                        }
                        return 1
                    },
                    meta: []
                }
            ],
            DEPART: [
                {
                    name: 'DEPARTUREAIRPORT',
                    type: 'CHECKBOX',
                    label: 'Departure Airport',
                    key: 'departureAirportCode',
                    meta: ['departureAirportName']
                }
            ],
            ARRIVE: [
                {
                    name: 'ARRIVALAIRPORT',
                    type: 'CHECKBOX',
                    label: 'Arrival Airport',
                    key: 'arrivalAirportCode',
                    meta: ['arrivalAirportName']
                }
            ]
        };

        const handleAddFilter = (type, x, priceGroupId) => {
            // console.log(type, x, priceGroupId)
            config[type].forEach(f => {
                res[f.name] = res[f.name] || { type: f.type, label: f.label, items: {} };
                const k = f.key;
                let l = null;
                if (typeof f.key === 'function') {
                    l = f.key(x);
                }

                res[f.name].items[l || x[k]] = {
                    meta: f.meta.map(key => x[key]),
                    priceGroupIds: [...res[f.name].items[l || x[k]] ? res[f.name].items[l || x[k]].priceGroupIds : [], priceGroupId]
                };
            });
        }

        // PRICEGROUP
        rawPriceGroups.forEach(priceGroup => {
            if (config.PRICEGROUP) { handleAddFilter('PRICEGROUP', priceGroup, priceGroup.id) }
            const firstSegment = priceGroup.groupSegments[0]
            const lastSegment = priceGroup.groupSegments[priceGroup.groupSegments.length - 1];
            const roundTrip = firstSegment.departureAirportCode == lastSegment.arrivalAirportCode;

            // SEGMENT
            priceGroup.groupSegments.forEach((groupSegment, si) => {
                const segment = groupSegment.segments[0]; // May need to change this

                if (config.SEGMENT) { handleAddFilter('SEGMENT', segment, priceGroup.id) }

                // LEG
                segment.legs.forEach((leg, li) => {
                    // DEPART
                    if (li == 0 && si == 0) {
                        if (config.DEPART) { handleAddFilter('DEPART', leg, priceGroup.id) }

                        // ARRIVE
                    } else if (li == segment.legs.length - 1 && (roundTrip || searchType == 'SINGLE') && searchType != 'MULTI' && si == 0) {
                        if (config.ARRIVE) { handleAddFilter('ARRIVE', leg, priceGroup.id) }

                        // STOP
                    } else {
                        if (config.STOP) { handleAddFilter('STOP', leg, priceGroup.id) }
                    }
                });
            });
        });

        console.log(res)

        setFilters(res);
    }

    const processPriceGroups = n => {
        // Sorting
        const newSort = n.sort || sort;
        const newFilter = n.filter || filter;
        const sortedPriceGroups = {
            CHEAPEST: items => items.sort((a, b) => a.fare.total - b.fare.total),
            FASTEST: items => items.sort((a, b) => a.lowestEft - b.lowestEft)
        }[newSort](rawPriceGroups);

        // Filtering
        let filteredPriceGroups = sortedPriceGroups;
        Object.keys(newFilter).forEach(key => {
            const merged = [].concat.apply([], Object.values(newFilter[key]));

            if (merged.length) {
                filteredPriceGroups = filteredPriceGroups.filter(x => merged.includes(x.id));
            }
        });

        setPriceGroups({ priceGroups: filteredPriceGroups, sort: newSort, filter: newFilter });
    }

    React.useEffect(() => {
        // Call search API
        [0].forEach(i => {
            fetch(`/api/search-${searchType.toLocaleLowerCase()}?api=${i}`).then(result => result.json()).then(data => {
                rawPriceGroups = [...rawPriceGroups, ...data.priceGroups];
                segmentCount = data.segmentCount;
                createFilters();
                processPriceGroups({});
            });
        })
    }, []);

    const itemData = createItemData({
        priceGroups: priceGroups || [],
        handleSelectPriceGroup,
        selectedPriceGroup
    });

    return <React.Fragment>
        <div className={styles.header}>
            <svg className={styles.header__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.47,4.61a2.81,2.81,0,0,0-.68-1.3L14.69.43A1.72,1.72,0,0,0,13.37,0l-.6.1-.15,0L11.18.37,11,.4,9.79.59a1.71,1.71,0,0,0-1.1.79L6.94,5a2.75,2.75,0,0,0-.21,1.45L9.22,20.82a1.31,1.31,0,0,0,1.5,1.05l9.45-1.5c.71-.12.92-.73.8-1.42Zm-5.62.9a2,2,0,0,1-2.38-2.22,2,2,0,0,1,1.26-1.67,2.05,2.05,0,0,1,2.8,1.55v0a2,2,0,0,1-1.68,2.33Z" style={{ fill: "#73caf1" }} />
                <path d="M17.65,7.18a3,3,0,0,0-.3-1.55l-2.3-3.9A1.9,1.9,0,0,0,13.81.87L13.16.8,13,.77,11.45.56h-.2L10,.37A1.8,1.8,0,0,0,8.55.86L5.62,4.09A2.86,2.86,0,0,0,5,5.49L3,21.07a1.41,1.41,0,0,0,1.21,1.56L14.44,24c.76.1,1.18-.47,1.29-1.23Zm-6.26-.84a2.19,2.19,0,1,1,2.48-1.89h0a2.21,2.21,0,0,1-2.48,1.9h0Z" style={{ fill: "#be1d2e" }} />
            </svg>
            <div className={styles.header__row}>
                <button className={styles.header__item}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7.13c0,.78-.74,1.42-2.59,1.42-1,0-2,0-3,0L10.22,14a.44.44,0,0,1-.38.21H9.1a.42.42,0,0,1-.43-.46L10,8.36c-1.67-.1-3.11-.25-4.21-.42L4.32,9.78a.48.48,0,0,1-.4.2H3.51a.49.49,0,0,1-.46-.7L4,7.53c-.34-.13-.53-.26-.53-.4s.19-.28.53-.4L3.05,5a.49.49,0,0,1,.46-.7h.41a.5.5,0,0,1,.4.19L5.76,6.31C6.86,6.14,8.3,6,10,5.89L8.67.47A.43.43,0,0,1,9.1,0h.74a.43.43,0,0,1,.38.22l3.19,5.52c1,0,1.95,0,3,0C18.24,5.7,19,6.34,19,7.13ZM7.61,18.3c1,0,2,0,3,0l3.19,5.52a.43.43,0,0,0,.38.22h.74a.43.43,0,0,0,.43-.47L14,18.11c1.67-.11,3.11-.25,4.21-.42l1.44,1.84a.5.5,0,0,0,.4.19h.41A.49.49,0,0,0,21,19L20,17.27c.34-.12.53-.26.53-.4s-.19-.27-.53-.4L21,14.72a.49.49,0,0,0-.46-.7h-.41a.48.48,0,0,0-.4.2l-1.44,1.84c-1.1-.17-2.54-.32-4.21-.42l1.3-5.43a.42.42,0,0,0-.43-.46h-.74a.44.44,0,0,0-.38.21l-3.19,5.53c-1,0-1.95,0-3,0-1.85,0-2.59.64-2.59,1.42S5.76,18.3,7.61,18.3Z"/></svg> London - Paris</button>
                <button className={styles.header__item}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.87,6.06a2.7,2.7,0,1,0-2.7,2.69A2.7,2.7,0,0,0,14.87,6.06Z"/><path d="M12.17,8.75a4.52,4.52,0,0,0-4.49,4.49v2.7a.91.91,0,0,0,.9.9h.9v3.59a.9.9,0,0,0,.9.9H14a.9.9,0,0,0,.91-.9V16.84h.9a.9.9,0,0,0,.89-.91V13.24A4.49,4.49,0,0,0,12.17,8.75Z"/></svg> 1 Adult</button>
                <button className={styles.header__item}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,5V3H16V5H8V3H6V5A2,2,0,0,0,4,7V19a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V7A2,2,0,0,0,18,5Zm0,14H6V9H18Z"/></svg> Sat 10 Oct - Sat 17 Oct</button>
                <button className={styles.header__item}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.59,5.41a2,2,0,1,1,2.83,0A2,2,0,0,1,7.59,5.41ZM6,16V7H4v9a5,5,0,0,0,5,5h6V19H9A3,3,0,0,1,6,16Zm14,4.07L14.93,15H11.5V11.32A9.52,9.52,0,0,0,17,13.48V11.32a6.75,6.75,0,0,1-4.67-2l-1.4-1.55a2.15,2.15,0,0,0-.69-.5,2.23,2.23,0,0,0-1-.23h0A2.25,2.25,0,0,0,7,9.25V15a3,3,0,0,0,3,3h5.07l3.5,3.5Z"/></svg>&nbsp; Economy</button>
            </div>
        </div>
        <div className={`${styles.header} ${styles['header--filters']}`}>
            <svg className={styles.header__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" fill="#384756" />
            </svg>
            <div className={styles.header__row}>
                {Object.keys(filters).map(key => {
                    return <button className={classnames(styles.header__item, { [`${styles['header__item--active']}`]: Object.keys(filter[key] || {}).length })} onClick={handleSelectModal} data-modal={key}><small>▼</small> {filters[key].label}</button>
                })}
            </div>
        </div>
        <AutoSizer>
            {({ height, width }) => (
                <List height={height - 88}
                    width={width}
                    itemCount={priceGroups.length}
                    itemSize={itemSize}
                    outerRef={outerRef}
                    itemData={itemData}
                >
                    {Result}
                </List>
            )}
        </AutoSizer>
        <div className={styles.sort}>
            <div className={classnames(styles.sort__item, { [`${styles['sort__item--active']}`]: sort == 'CHEAPEST' })} onClick={handleSetSort} data-sort="CHEAPEST">Cheapest</div>
            <div className={classnames(styles.sort__item, { [`${styles['sort__item--active']}`]: sort == 'FASTEST' })} onClick={handleSetSort} data-sort="FASTEST">Fastest</div>
        </div>
        <Flight open={selectedPriceGroup != undefined}
            handleClose={() => { setSelectedPriceGroup(undefined) }}
            position="bottom"
            selectedPriceGroup={selectedPriceGroup}
            priceGroups={priceGroups}
            title="Flight Details"
        />
        <Modal open={selectedModal} handleClose={() => { setSelectedModal(undefined) }} {...filters[selectedModal]} handleSetFilter={handleSetFilter} filter={filter} selectedModal={selectedModal} />
    </React.Fragment >
}

const Result = React.memo(({ data: { priceGroups, handleSelectPriceGroup, selectedPriceGroup }, index, style }) => {
    const priceGroup = priceGroups[index];
    const isActive = selectedPriceGroup == priceGroup.id;
    const className = classnames(styles['price-group'], { [`${styles['price-group--active']}`]: isActive })

    return <div style={style} key={priceGroup.id}>
        <div className={className} key={priceGroup.id} onClick={handleSelectPriceGroup} data-id={priceGroup.id} data-index={index}>
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
                            {/* <div className={styles.segment__tags}>
                                                    {segment.seatsAvailable ? <div className={styles.tag}>
                                                        {segment.seatsAvailable} seats left
                                                    </div> : null}
                                                    {segment.flexibleChange ? <div className={styles.tag}>
                                                        Flexible Change
                                                    </div> : null}
                                                    {segment.flexibleCancellation ? <div className={styles.tag}>
                                                        Flexible Cancellation
                                                    </div> : null}
                                                </div> */}
                        </div>
                    </div>
                })}
            </div>
            <div className={styles['price-group__price']} dangerouslySetInnerHTML={{ __html: formatPrice(priceGroup) }} />
        </div>
    </div>
}, areEqual);

const Flight = withModal(props => {
    const selectedPriceGroup = React.useRef(props.priceGroups.filter(priceGroup => priceGroup.id == props.selectedPriceGroup)).current[0];
    return <React.Fragment>
        <div>
            {selectedPriceGroup.groupSegments.map(groupSegment => {
                const segment = groupSegment.segments[0]; // May have to change this if we do grouping again

                return <div>
                    <div className={flight['segment-label']}>{groupSegment.label}</div>
                    <div className={flight.legs}>
                        {segment.legs.map((leg, i) => {
                            return <React.Fragment>
                                <div className={flight.airport}>
                                    <div className={flight.airport__dot} />
                                    <div>
                                        {leg.departureAirportName} <small>{leg.departureAirportCode}</small>
                                        <div>
                                            <small>Depart: {dateToString(new Date(leg.departureDateTime.date))}</small>
                                        </div>
                                    </div>
                                </div>
                                {segment.legs.length - 1 == i ? <div className={flight.airport}>
                                    <div className={flight.airport__dot} />
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
        <div className={flight.price}>
            Great Price!
            <strong dangerouslySetInnerHTML={{ __html: formatPrice(selectedPriceGroup) }} />
        </div>
        <div className={flight.footer}>
            <button className="button">Book Flight</button>
        </div>
    </React.Fragment>
})

const createItemData = memoize(data => data)

function formatPrice(priceGroup) {
    return `${priceGroup.fareTotalPrefix}${priceGroup.fareTotalIntText}${priceGroup.fareTotalDecimalPoint}${priceGroup.fareTotalDecText}${priceGroup.fareTotalSuffix}`
}

function dateToString(date) {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getHours()}:${date.getMinutes()}`
}