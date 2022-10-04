import React, { useEffect, useState } from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { getSub } from '../services/frontendRoutes'

// const groups = [
//     {
//         "id": 1,
//         "title": "P2022-0003"
//     },
//     {
//         "id": 2,
//         "title": "P2022-0009"
//     },
//     {
//         "id": 3,
//         "title": "2980"
//     }
// ]

// const items = [
//     {
//         "id": 1,
//         "title": "Amouage Capital Store Oman",
//         "group": 1,
//         "start_time": "2022-02-26T10:44:00.000Z",
//         "end_time": "2022-04-01T10:44:00.000Z"
//     },
//     {
//         "id": 2,
//         "title": "NISHANE 3x3 PODIUM YAS MALL",
//         "group": 2,
//         "start_time": "2022-03-04T12:29:00.000Z",
//         "end_time": "2022-03-19T12:29:00.000Z"
//     },
//     {
//         "id": 3,
//         "title": "GARRARD Boutique  (kingdom Mall-Riyadh)  Furniture",
//         "group": 3,
//         "start_time": "2022-02-05T07:18:00.000Z",
//         "end_time": "2022-02-07T07:18:00.000Z"
//     }
// ]

// const items_1 = items.map(i => {
//     i.start_time = moment(i.start_time, 'YYYY-MM-DDTHH:mm:ss');
//     i.end_time = moment(i.end_time, 'YYYY-MM-DDTHH:mm:ss');
//     return i;
// })

export default function SubAssebmly() {

    const [groups, setGroups] = useState([]);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await getSub();
            setGroups(data.data.groups);
            const item = data.data.items;
            let itemss = item.map(i => {
                i.start_time = moment(i.start_time, 'YYYY-MM-DDTHH:mm:ss');
                i.end_time = moment(i.end_time, 'YYYY-MM-DDTHH:mm:ss');
                return i;
            })
            setItems(itemss)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div>
                SubAssebmly
                <Timeline
                    groups={groups}
                    items={items}
                    defaultTimeStart={moment().startOf('year')}
                    defaultTimeEnd={moment().endOf('year')}
                />
            </div>
        </div>
    )
}
