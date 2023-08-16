import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from "react-bootstrap";
import Fiche from '../components/Fiche';

export default function ListeDesChiens(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://185.98.137.192:5000/balades/chiens')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <>
            <h1>Liste des chiens du refuge: </h1>
            <Row md={6}>
                {data.map(chien => {
                    return (
                        <Col key={chien} className="mb-4">
                            <Fiche photo dogLink name={chien} />
                        </Col>
                    )
                })}

            </Row>
        </>
    );
}