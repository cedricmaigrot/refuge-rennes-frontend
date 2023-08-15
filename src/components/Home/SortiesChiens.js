import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Carousel, Card, OverlayTrigger } from 'react-bootstrap';

import { ResponsiveBar } from "@nivo/bar";
import { Tooltip } from 'react-tooltip'

import { useForm } from "react-hook-form";
import DogCard from '../Fiche';
import 'react-tooltip/dist/react-tooltip.css'

import './plots.css';

// import data from './SortiesChiensData'

export default function SortiesChiens(props) {

    const [days, setDays] = useState(7);
    const [type, setType] = useState("all");
    const [nbResults, setNbResults] = useState(5);


    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);


    function get_data() {
        fetch('http://185.98.137.192:5000/balades/sorties-chiens-categories/' + days + "/" + type + "/" + nbResults)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        if (window.innerWidth >= 1200) {
            setNbResults(5);
        }
        console.log(nbResults)
        get_data();
        fetch('http://185.98.137.192:5000/balades/categories')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        get_data();
    }, [days, type, nbResults]);

    return (
        <>
            <Row md={3} sm={1}>
                <Col>
                    <p>Interval de temps :</p>
                    <Form.Select aria-label="Interval de temps" value={days} onChange={e => setDays(e.target.value)}>
                        <option value="7">7 jours</option>
                        <option value="14">14 jours</option>
                        <option value="30">30 jours</option>
                        <option value="0">Toutes les dates</option>
                    </Form.Select>
                </Col>
                <Col>
                    <p>Type de sorties :</p>
                    <Form.Select aria-label="Type de sorties" value={type} onChange={e => setType(e.target.value)}>
                        <option value="all">Toutes les sorties</option>
                        <option value="balades">Seulement les balades</option>
                        <option value="parcs">Seulement les mises en parc</option>
                    </Form.Select>
                </Col>
                <Col>
                    <p>Nombre résultats :</p>
                    <Form.Select aria-label="Nombre résultats" value={nbResults} onChange={e => setNbResults(e.target.value)}>
                        <option value="0">Tous les résultats</option>
                        <option value="5">5 premiers résultats</option>
                        <option value="10">10 premiers résultats</option>
                        <option value="25">25 premiers résultats</option>
                    </Form.Select>
                </Col>
            </Row>

            <div style={{ "height": "500px" }}>
                <ResponsiveBar
                    data={data}
                    keys={categories}
                    indexBy="Chien"
                    margin={{ top: 50, right: 130, bottom: 150, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={['#777', '#333', '#F28E2B', '#A0CBE8', '#8CD17D', '#F1CE63', '#FF9D9A', '#D7B5A6']}
                    defs={[
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#AAA',
                            rotation: 10,
                            lineWidth: 1,
                            spacing: 8
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'Mise en parc'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'Autre'
                            },
                            id: 'lines'
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
            <Row md="6" className='mb-4 mt-4 not-mobile'>
                {
                    data.map((element, index) => {

                        return (
                            <Col key={element}>
                                <Card className='mb-4'>
                                    <Card.Header>{element['Chien']} -{' '}
                                        <span data-tooltip-id={"my-tooltip"} data-tooltip-delay-show={100} data-tooltip-delay-hide={500} data-tooltip-html={"<img width='200px' onError='this.onerror=null;this.src=" + '"/chiens/placeholder_dog.jpg"' + ";' src='/chiens/" + element['Chien'].toLowerCase() + ".jpg'} alt='ok'/>"}>
                                            👁
                                        </span>
                                    </Card.Header>
                                </Card>
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