import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Carousel, Card, OverlayTrigger } from 'react-bootstrap';

import { ResponsiveBar } from "@nivo/bar";
import { Tooltip } from 'react-tooltip'

import { useForm } from "react-hook-form";
import DogCard from '../Fiche';
import 'react-tooltip/dist/react-tooltip.css'


// import data from './SortiesChiensData'

export default function SortiesChiens(props) {

    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);


    function get_data() {
        fetch('http://185.98.137.192:5000/balades/sorties-chiens-categories/' + props.days + "/" + props.type + "/" + props.nbResults)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        get_data();
        fetch('http://185.98.137.192:5000/balades/categories')
            .then((response) => response.json())
            .then((data) => {

                let cat = []
                let col = []
                data.map(e => {
                    cat.push(e['Categorie'])
                    col.push(e['color'])
                })

                setCategories(cat);
                setColors(col);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        get_data();
    }, [props]);

    return (
        <>

            <div style={{ "height": "500px" }}>
                <ResponsiveBar
                    data={data}
                    keys={categories}
                    indexBy="Chien"
                    margin={{ top: 50, right: 130, bottom: 150, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={colors}
                    defs={[
                        {
                            id: 'grayLines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(128, 128, 128, 0.3)',
                            rotation: -30,
                            lineWidth: 3,
                            spacing: 10
                        },
                        {
                            id: 'blackLines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(30, 30, 30, 0.3)',
                            rotation: 30,
                            lineWidth: 3,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: "Autre"
                            },
                            id: 'blackLines'
                        },
                        {
                            match: {
                                id: "Mise en parc"
                            },
                            id: 'grayLines'
                        }
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
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                />
            </div>
            <Row md="6">
                {
                    data.map((element, index) => {

                        return (
                            <Col className="mb-4 mt-4 d-none d-md-block" >
                                <DogCard photo dog dogLink name={element['Chien']} />
                                {/* <Card className='mb-4'>
                                    <Card.Header>{element['Chien']} -{' '}
                                        <span data-tooltip-id={"my-tooltip"} data-tooltip-delay-show={100} data-tooltip-delay-hide={500} data-tooltip-html={"<img width='200px' onError='this.onerror=null;this.src=" + '"/chiens/placeholder_dog.jpg"' + ";' src='/chiens/" + element['Chien'].toLowerCase() + ".jpg'} alt='ok'/>"}>
                                            👁
                                        </span>
                                    </Card.Header>
                                </Card> */}
                            </Col>
                        )
                        // <Col className='mb-4'><DogCard name={element['Chien']} /></Col>
                    })

                }

            </Row>
            <Tooltip id="my-tooltip" />




        </>
    );
}