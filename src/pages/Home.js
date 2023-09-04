import React, { useState, useEffect } from 'react';

import { Card, Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import Calendar from "../components/Home/Calendar";
import SortiesChiens from "../components/Home/SortiesChiens";
import ChiensSansBalade from '../components/Home/ChiensSansBalade';



export default function Home(props) {

    const [type, setType] = useState('all');

    return (
        <>
            <h1>Accueil</h1>
            <Card
                className='mt-4 d-none d-md-block'
            >
                <Card.Header>
                    <h2>Calendrier des sorties</h2>
                </Card.Header>
                <Card.Body>
                    <Calendar days={90} />
                </Card.Body>
            </Card>

            <Card
                className='mt-4'
            >
                <Card.Header>
                    <h2>Chiens les plus sortis</h2>
                </Card.Header>
                <Card.Body>
                    <Form className='m-2' inline>
                        <Form.Select
                            aria-label="Type de sorties"
                            value={type}
                            onChange={e => { setType(e.target.value) }}
                        >
                            <option value="all">Toutes les sorties</option>
                            <option value="balades">Seulement les balades</option>
                            <option value="parcs">Seulement les mises en parc</option>
                        </Form.Select>
                    </Form>

                    <Row>
                        <Col style={{ paddingLeft: "60px" }}>
                            <h3>Les 7 derniers jours</h3>
                            <SortiesChiens days={7} type={type} nbResults={props.nbResults} />
                        </Col>
                        <Col style={{ paddingLeft: "60px" }}>
                            <h3>Les 14 derniers jours</h3>
                            <SortiesChiens days={14} type={type} nbResults={props.nbResults} />
                        </Col>
                        <Col style={{ paddingLeft: "60px" }}>
                            <h3>Depuis le 31/07/2023</h3>
                            <SortiesChiens days={0} type={type} nbResults={props.nbResults} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card
                className='mt-4'
            >
                <Card.Header>
                    <h2>Chiens sans balade</h2>
                </Card.Header>
                <Card.Body>
                    <ChiensSansBalade />
                </Card.Body>
            </Card>

        </>
    );
}