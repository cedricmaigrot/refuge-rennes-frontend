import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';


import { ResponsiveBar } from "@nivo/bar";
export default function PromeneursBarPlot(props) {


    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);


    function get_data() {
        console.log('http://185.98.137.192:5000/balades/promeneurs/' + props.days + "/" + props.type + "/" + props.nbResults);

        fetch('http://185.98.137.192:5000/balades/promeneurs/' + props.days + "/" + props.type + "/" + props.nbResults)
            .then((response) => response.json())
            .then((data_received) => {
                let cat = []
                let col = []
                setData(data_received);
                data_received.map(e => {

                    cat.push(e['Personne'])
                    col.push(e['color'])
                })
                setCategories(cat);
                setColors(col);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        get_data();
    }, [props.days, props.type, props.nbResults]);

    return (
        <>
            <div style={{ "height": "600px" }}>
                <ResponsiveBar
                    data={data}
                    keys={categories}
                    indexBy="Personne"
                    margin={{ top: 50, right: 5, bottom: 150, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={colors}
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
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                />
            </div>
        </>
    );
}