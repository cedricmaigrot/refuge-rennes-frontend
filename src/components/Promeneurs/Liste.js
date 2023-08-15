import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function ListePromeurs() {

    const [liste, setListe] = useState([]);


    function get_data() {
        fetch('http://185.98.137.192:5000/balades/personnes')
            .then((response) => response.json())
            .then((data) => {
                setListe(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        get_data();
    }, []);

    return (
        <>
            <Row md={6} sm={1}>
                {liste.map(person => {
                    return <Col>
                        <Card className="mb-2" bg="dark" text="white">
                            <Card.Body>{person}</Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </>
    );
}