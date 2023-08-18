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
                    <Calendar name={id} days={props.days} type={props.type} nbResults={props.nbResults} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md={8} sm={12} xs={12}>
                    <h3>Chiens sortis</h3>
                    <Row md={4} sm={2} xs={1}>
                        {
                            dogs.map(e => {
                                return (
                                    <Col key={e} className="mb-4">
                                        <Fiche dog link name={e['id']} color={e['color']} notes={e['value'] + " balades"} />
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Col>
                <Col md={4}>
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