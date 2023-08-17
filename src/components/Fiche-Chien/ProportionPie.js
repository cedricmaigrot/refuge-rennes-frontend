import React, { useState, useEffect } from 'react';

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsivePie } from '@nivo/pie'
import './plots.css';

export default function ProportionPie(props) {
    const [walkers, setWalkers] = useState([]);
    const [colors, setColors] = useState([]);

    function get_data() {
        fetch('http://185.98.137.192:5000/balades/fiche-chien/promeneurs/' + props.name.toLowerCase() + '/' + props.days + '/all/0')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setWalkers(data);
                let c = []
                data.map(walker => {
                    c.push(walker['color'])
                })
                setColors(c)
                console.log(colors)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        get_data()
    }, []);
    useEffect(() => {
        get_data()
    }, [props]);

    return (
        <>
            <ResponsivePie
                data={walkers}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                colors={colors}
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
                            id: 'Mise en parc'
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