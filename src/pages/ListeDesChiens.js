import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Card } from "react-bootstrap";
import Fiche from '../components/Fiche';

export default function ListeDesChiens(props) {
    const [data, setData] = useState([]);
    const [showPhoto, setShowPhoto] = useState(true);



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
            <Form>
                <Form.Check // prettier-ignore
                    defaultChecked
                    type="switch"
                    id="custom-switch"
                    label="Afficher les photos des chiens"
                    onClick={e => setShowPhoto(!showPhoto)}
                />
            </Form>
            <hr />
            <Row lg={6} md={3} sm={2} xs={1}>
                {data.map(chien => {
                    return (
                        <Col key={chien} className="mb-4" id={chien}>
                            <Fiche photo={showPhoto} dogLink name={chien} />
                        </Col>
                    )
                })}

            </Row>
        </>
    );
}