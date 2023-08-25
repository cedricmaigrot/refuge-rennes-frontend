import React, { useState, useEffect } from 'react';

import {
    Link,
    useParams
} from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Row, Col, Form, Card, Button } from "react-bootstrap";
import Fiche from "../components/Fiche";
import Calendar from "../components/Fiche-Promeneur/Calendar";
import ProportionPie from "../components/Fiche-Promeneur/ProportionPie";

export default function FichePromeneur(props) {
    let { id } = useParams();

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('http://185.98.137.192:5000/balades/fiche-promeneur/chiens/' + id.toLowerCase() + '/0/balades/0')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDogs(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <h1>{id}</h1>
            <Link to={"/fiche-promeneur#" + id}>
                <Button variant="secondary" className='mt-4 mb-4'>
                    <FontAwesomeIcon icon={faArrowLeft} /> Retour à la liste des promeneurs
                </Button>
            </Link>

            <Row sm={1} xs={1}>
                <Col md={4}>
                    <Fiche photo human name={id} />
                </Col>
                <Col md={8} className=" d-none d-md-block">
                    <h3>Calendrier des sorties</h3>
                    <div style={{ 'marginLeft': "50px" }}>
                        <Calendar name={id} days={props.days} type={props.type} nbResults={props.nbResults} />
                    </div>
                </Col>
            </Row>
            <hr />

            <Card
            // bg="dark"
            // text='light'
            >
                <Card.Body>
                    <Row md={2}>
                        {
                            [7, 30].map(nb => {
                                return (
                                    <Col>
                                        <h3>{nb} jours</h3>
                                        <div style={{ "height": "400px" }}>
                                            <ProportionPie name={id} days={nb} type={props.type} nbResults={props.nbResults} />
                                        </div>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Card.Body>
            </Card>
            <h3>Chiens sortis</h3>
            <Row md={6} sm={2} xs={1}>
                {
                    dogs.map(e => {
                        return (
                            <Col key={e} className="mb-4">
                                {/* <Fiche dog link name={e['id']} color={e['color']} notes={e['value'] + " balades"} /> */}
                                <Fiche dog link name={e['label']} color={e['color']} />
                            </Col>
                        )
                    })
                }

            </Row>
        </>
    );
}