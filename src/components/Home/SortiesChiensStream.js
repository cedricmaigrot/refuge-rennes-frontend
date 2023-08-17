import React, { useState, useEffect } from 'react';

import { ResponsiveStream } from '@nivo/stream'

export default function SortiesChiensStream(props) {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://185.98.137.192:5000/balades/calendrier-sorties-chiens-stream')
            .then((response) => response.json())
            .then((data) => {
                console.log("SortiesChiensStream");
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <ResponsiveStream
            data={data}
            keys={[
                'Parc',
                'Balade'
            ]}
            // label="Date"
            margin={{ top: 50, right: 75, bottom: 50, left: 40 }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40
            }}
            enableGridX={true}
            enableGridY={false}
            offsetType={props.offsetType}
            order="ascending"
            colors={{ scheme: 'nivo' }}
            fillOpacity={0.85}
            borderColor={{ theme: 'background' }}
            // defs={[
            //     {
            //         id: 'dots',
            //         type: 'patternDots',
            //         background: 'inherit',
            //         color: '#2c998f',
            //         size: 4,
            //         padding: 2,
            //         stagger: true
            //     },
            //     {
            //         id: 'squares',
            //         type: 'patternSquares',
            //         background: 'inherit',
            //         color: '#e4c912',
            //         size: 6,
            //         padding: 2,
            //         stagger: true
            //     }
            // ]}
            // fill={[
            //     {
            //         match: {
            //             id: 'Paul'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'Marcel'
            //         },
            //         id: 'squares'
            //     }
            // ]}
            dotSize={8}
            dotColor={{ from: 'color' }}
            dotBorderWidth={2}
            dotBorderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.7
                    ]
                ]
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000'
                            }
                        }
                    ]
                }
            ]}
        />
    );
}