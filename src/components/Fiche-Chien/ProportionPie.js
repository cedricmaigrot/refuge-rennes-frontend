import React, { useState, useEffect } from 'react';

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsivePie } from '@nivo/pie'
import './plots.css';

export default function ProportionPie(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetch('http://185.98.137.192:5000/balades/calendrier-sorties-chiens/' + props.type)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         setData(data);
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });

        setData([
            {
                "id": "Mise en Parc",
                "label": "Mises en parc",
                "value": 593,
                "color": "hsl(101, 70%, 50%)"
            },
            {
                "id": "Balades Cédric",
                "label": "Balades Cédric",
                "value": 380,
                "color": "hsl(278, 70%, 50%)"
            },
            {
                "id": "Balades Anne-Laure",
                "label": "Balades Anne-Laure",
                "value": 380,
                "color": "hsl(150, 40%, 50%)"
            },
            {
                "id": "Balades Bénévole 3",
                "label": "Balades Bénévole 3",
                "value": 380,
                "color": "hsl(278, 70%, 50%)"
            },
            {
                "id": "Balades Bénévole 4",
                "label": "Balades Bénévole 4",
                "value": 380,
                "color": "hsl(150, 40%, 50%)"
            }
        ]
        )
    }, []);


    return (
        <>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'Mise en Parc'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
            // legends={[
            //     {
            //         anchor: 'bottom',
            //         direction: 'row',
            //         justify: false,
            //         translateX: 0,
            //         translateY: 56,
            //         itemsSpacing: 0,
            //         itemWidth: 100,
            //         itemHeight: 18,
            //         itemTextColor: '#999',
            //         itemDirection: 'left-to-right',
            //         itemOpacity: 1,
            //         symbolSize: 18,
            //         symbolShape: 'circle',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemTextColor: '#000'
            //                 }
            //             }
            //         ]
            //     }
            // ]}
            />
        </>
    );
}