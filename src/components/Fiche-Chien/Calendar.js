import React, { useState, useEffect } from 'react';

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar'
import './plots.css';

export default function Calendar(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://185.98.137.192:5000/balades/calendrier-sorties-chiens/' + props.type)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <>
            <ResponsiveCalendar
                data={data}
                from="2023-07-01"
                to="2023-09-01"
                emptyColor="#eeeeee"
                colors={['#FFAAAA', '#F1B8AA', '#E3C6AA', '#D5D5AA', '#C6E3AA', '#B8F1AA', '#AAFFAA']}
                margin={{ top: 20, right: 40, bottom: 40, left: 25 }}
                yearSpacing={40}
                minValue="20"
                maxValue="75"
                monthBorderColor="#333"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                    {
                        anchor: 'top-right',
                        direction: 'column',
                        translateX: -30,
                        translateY: 15,
                        itemCount: 4,
                        itemWidth: 40,
                        itemHeight: 20,
                        itemsSpacing: 14,
                        // itemDirection: 'right-to-left'
                    }
                ]}
            />
        </>
    );
}