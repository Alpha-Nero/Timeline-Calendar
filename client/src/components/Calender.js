import React, { useEffect, useState } from 'react'
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const groups = [
    {
        "id": 0,
        "title": "2975"
    },
    {
        "id": 1,
        "title": "P2022-0003"
    },
    {
        "id": 2,
        "title": "P2022-0009"
    },
    {
        "id": 3,
        "title": "2980"
    },
    {
        "id": 4,
        "title": "P2022-0044"
    },
    {
        "id": 5,
        "title": "2847"
    },
    {
        "id": 6,
        "title": "2848"
    },
    {
        "id": 7,
        "title": "2866"
    },
    {
        "id": 8,
        "title": "2828"
    },
    {
        "id": 9,
        "title": "P2022-0015"
    },
    {
        "id": 10,
        "title": "P2022-0160"
    },
    {
        "id": 11,
        "title": "P2022-0066"
    },
    {
        "id": 12,
        "title": "P2022-0177"
    },
    {
        "id": 13,
        "title": "P2022-0173"
    }
]

const items = [
    {
        "id": 0,
        "title": "GIVENCHY Vendome, Qatar",
        "group": 0,
        "start_time": "2022-02-14T07:02:00.000Z",
        "end_time": "2022-03-08T07:02:00.000Z"
    },
    {
        "id": 1,
        "title": "Amouage Capital Store Oman",
        "group": 1,
        "start_time": "2022-02-26T10:44:00.000Z",
        "end_time": "2022-04-01T10:44:00.000Z"
    },
    {
        "id": 2,
        "title": "NISHANE 3x3 PODIUM YAS MALL",
        "group": 2,
        "start_time": "2022-03-04T12:29:00.000Z",
        "end_time": "2022-03-19T12:29:00.000Z"
    },
    {
        "id": 3,
        "title": "GARRARD Boutique  (kingdom Mall-Riyadh)  Furniture",
        "group": 3,
        "start_time": "2022-02-05T07:18:00.000Z",
        "end_time": "2022-02-07T07:18:00.000Z"
    },
    {
        "id": 4,
        "title": "NISHANE BLM POPUP",
        "group": 4,
        "start_time": "2022-03-10T05:16:00.000Z",
        "end_time": "2022-03-20T05:16:00.000Z"
    },
    {
        "id": 5,
        "title": "SERGE LUTENS-QDF",
        "group": 5,
        "start_time": "2022-02-21T05:46:00.000Z",
        "end_time": "2022-04-26T05:46:00.000Z"
    },
    {
        "id": 6,
        "title": "NARCISO RODRIGUEZ-QATAR",
        "group": 6,
        "start_time": "2022-02-21T05:51:00.000Z",
        "end_time": "2022-04-26T05:51:00.000Z"
    },
    {
        "id": 7,
        "title": "NARS-QATAR",
        "group": 7,
        "start_time": "2022-03-12T05:55:00.000Z",
        "end_time": "2022-04-30T05:55:00.000Z"
    },
    {
        "id": 8,
        "title": "Acqua Di Parma- Qatar Duty Free-Departure",
        "group": 8,
        "start_time": "2022-03-26T05:58:00.000Z",
        "end_time": "2022-04-27T05:58:00.000Z"
    },
    {
        "id": 9,
        "title": "ADP-ARRIVALS",
        "group": 9,
        "start_time": "2022-04-25T08:59:00.000Z",
        "end_time": "2022-06-03T08:59:00.000Z"
    },
    {
        "id": 10,
        "title": "SHAY UP-MAKE UP GRIDS",
        "group": 10,
        "start_time": "2022-06-08T09:05:00.000Z",
        "end_time": "2022-06-20T09:05:00.000Z"
    },
    {
        "id": 11,
        "title": "AMOUAGE- ABUJA AROMA",
        "group": 11,
        "start_time": "2022-05-09T10:29:00.000Z",
        "end_time": "2022-07-30T10:29:00.000Z"
    },
    {
        "id": 12,
        "title": "ARMANI PRIVE-FACES DUBAI HILLS",
        "group": 12,
        "start_time": "2022-07-15T12:49:00.000Z",
        "end_time": "2022-08-06T12:49:00.000Z"
    },
    {
        "id": 13,
        "title": "CDG- FRAGRANCE BAR",
        "group": 13,
        "start_time": "2022-06-22T12:56:00.000Z",
        "end_time": "2022-07-04T12:56:00.000Z"
    }
]




var keys = {
    groupIdKey: "id",
    groupTitleKey: "title",
    groupRightTitleKey: "rightTitle",
    itemIdKey: "id",
    itemTitleKey: "title",
    itemDivTitleKey: "title",
    itemGroupKey: "group",
    itemTimeStartKey: "start",
    itemTimeEndKey: "end"
};





export default function Calender() {

    const visibleTimeStart = moment().startOf("day").valueOf();
    const visibleTimeEnd = moment().startOf("day").add(1, "day").valueOf();
    const [state, setState] = useState({
        visibleTimeEnd,
        visibleTimeStart
    })

    // useEffect(() => {
    //     console.log('State', state)
    //     console.log('Groups', state.groups);
    //     console.log('visibleTimeEnd', state.visibleTimeEnd);
    //     console.log('visibleTimeStart', state.visibleTimeStart);
    // }, [])




    //Buttons
    const onPrevClick = () => {
        setState((state) => {
            const zoom = state.visibleTimeEnd - state.visibleTimeStart;
            console.log('prev start', state.visibleTimeStart - zoom);
            console.log('prev end', state.visibleTimeEnd - zoom);
            return {
                visibleTimeStart: state.visibleTimeStart - zoom,
                visibleTimeEnd: state.visibleTimeEnd - zoom
            };
        });
    };

    const onNextClick = () => {
        setState((state) => {
            const zoom = state.visibleTimeEnd - state.visibleTimeStart;
            console.log('next start', state.visibleTimeStart + zoom);
            console.log('next end', state.visibleTimeEnd + zoom);
            return {
                visibleTimeStart: state.visibleTimeStart + zoom,
                visibleTimeEnd: state.visibleTimeEnd + zoom
            };
        });
    };

    const onTimeChange = (visibleTimeStart, visibleTimeEnd) => {
        setState(visibleTimeStart, visibleTimeEnd)
    }

    return (
        <>

            {/* <button onClick={() => onPrevClick()}>{"< Prev"}</button>
            <button onClick={() => onNextClick()}>{"Next >"}</button> */}
            <Timeline
                groups={groups}
                items={items}
                keys={keys}
                // visibleTimeStart={state.visibleTimeStart}
                // visibleTimeEnd={state.visibleTimeEnd}
                defaultTimeStart={moment().add(-12, 'hour')}
                defaultTimeEnd={moment().add(12, 'hour')}
            //onTimeChange={onTimeChange}
            />
        </>
    )
}
