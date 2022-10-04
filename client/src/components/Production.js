import React, { useEffect, useState } from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { getProd } from '../services/frontendRoutes'


export default function Production() {

    const [groups, setGroups] = useState([]);
    const [items, setItems] = useState([]);


    const fetchData = async () => {
        try {
            const { data } = await getProd();
            setGroups(data.data.groups);
            const item = data.data.items;
            let itemss = item.map(i => {
                i.start_time = moment(i.start_time, 'YYYY-MM-DDTHH:mm:ss');
                i.end_time = moment(i.end_time, 'YYYY-MM-DDTHH:mm:ss');
                return i;
            })
            setItems(itemss);
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
                Production
                <Timeline
                    groups={groups}
                    items={items}
                    defaultTimeStart={moment().startOf('year').toDate()}
                    defaultTimeEnd={moment().endOf('year').toDate()}
                />
            </div>
        </div>
    )
}


/*
const { data } = await getProd();
            setGroups(data.data.groups);
            gruups = data.data.groups
            console.log('Gruups', gruups)
            const item = data.data.items;
            let itemss = item.map(i => {
                i.start_time = moment(i.start_time, 'YYYY-MM-DDTHH:mm:ss');
                i.end_time = moment(i.end_time, 'YYYY-MM-DDTHH:mm:ss');
                return i;
            })
            console.log('Itemms', itemss);
            setItems(itemss);*/