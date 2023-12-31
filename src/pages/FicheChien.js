import React, { useState, useEffect } from 'react';

import {
    Link,
    useParams
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


import { Row, Col, Card, Button } from "react-bootstrap";
import Fiche from "../components/Fiche";
import Calendar from "../components/Fiche-Chien/Calendar";
import ProportionPie from "../components/Fiche-Chien/ProportionPie";

export default function FicheChien(props) {
    let { id } = useParams();

    const [walkers, setWalkers] = useState([]);

    useEffect(() => {
        fetch('http://185.98.137.192:5000/balades/fiche-chien/promeneurs/' + id.toLowerCase() + '/0/balades/0')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setWalkers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);

    return (
        <>
            <h1>{id}</h1>

            <Link to={"/fiche-chien#" + id}>

                <Button variant="secondary" className='mt-4 mb-4'>
                    <FontAwesomeIcon icon={faArrowLeft} /> Retour à la liste des chiens
                </Button>
            </Link>

            <Row sm={1} xs={1}>
                <Col md={4}>
                    <Fiche photo name={id} />
                </Col>
                <Col md={8} className=" d-none d-md-block">
                    <h3>Calendrier des sorties</h3>
                    <div style={{ 'marginLeft': "50px" }}>
                        <Calendar name={id} days={props.days} type={props.type} nbResults={props.nbResults} />
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md={6} sm={12} xs={12}>
                    <h3>Promeneurs</h3>
                    <Row md={3} sm={2} xs={1}>
                        {
                            walkers.map(walker => {
                                return (
                                    <Col key={walker} className="mb-4">
                                        <Fiche human link name={walker['id']} color={walker['color']} walkCount={walker['value']} />
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Col>
                <Col md={6}>
                    <h3>Mises en parc/Balades</h3>

                    <Card
                    // bg="dark"
                    // text='light'
                    >
                        <Card.Body>
                            <div style={{ "height": "400px" }}>
                                <ProportionPie name={id} days={props.days} type={props.type} nbResults={props.nbResults} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}