import React from 'react';
import { ResponsiveBar } from "@nivo/bar";

export default function PromeneursBarIndiv(props) {

    return (
        <>
            <ResponsiveBar
                data={props.data}
                keys={['total']}
                indexBy="Personne"
                margin={{ top: 50, right: 5, bottom: 150, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                // colors={['#777', '#FFF', '#F28E2B', '#A0CBE8', '#8CD17D', '#F1CE63', '#FF9D9A', '#D7B5A6']}
                defs={[
                    {
                        id: 'linesSalaries',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#AAA',
                        rotation: 45,
                        lineWidth: 1,
                        spacing: 5
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#AAA',
                        rotation: -45,
                        lineWidth: 2,
                        spacing: 5
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'Mise en parc'
                        },
                        id: 'lines'
                    },
                    // {
                    //     match: {
                    //         id: 'Autre'
                    //     },
                    //     id: 'linesBis'
                    // }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -90,
                    legend: 'Chien',
                    legendPosition: 'middle',
                    legendOffset: 100
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'effectif',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="black"
                // labelTextColor={{
                //     from: 'color',
                //     modifiers: [
                //         [
                //             'darker',
                //             1.6
                //         ]
                //     ]
                // }}
                // legends={[
                //     {
                //         dataFrom: 'keys',
                //         anchor: 'bottom-right',
                //         direction: 'column',
                //         justify: false,
                //         translateX: 120,
                //         translateY: 0,
                //         itemsSpacing: 2,
                //         itemWidth: 100,
                //         itemHeight: 20,
                //         itemDirection: 'left-to-right',
                //         itemOpacity: 0.85,
                //         symbolSize: 20,
                //         effects: [
                //             {
                //                 on: 'hover',
                //                 style: {
                //                     itemOpacity: 1
                //                 }
                //             }
                //         ]
                //     }
                // ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        </>
    );
}