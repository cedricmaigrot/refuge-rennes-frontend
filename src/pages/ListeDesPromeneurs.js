import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from "react-bootstrap";
import Fiche from '../components/Fiche';

export default function ListeDesPromeneurs(props) {
    const [data, setData] = useState([]);
    const [showPhoto, setShowPhoto] = useState(false);



    useEffect(() => {
        fetch('http://185.98.137.192:5000/balades/personnes')
            .then((response) => response.json())
            .then((data) => {
                const d = data.filter((e) => e !== "Mise en parc");
                setData(d);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <>
            <h1>Liste des promeneurs du refuge: </h1>
            <Form>
                <Form.Check // prettier-ignore
                    defaultChecked={showPhoto}
                    type="switch"
                    id="custom-switch"
                    label="Afficher les photos des promeneurs"
                    onClick={e => setShowPhoto(!showPhoto)}
                />
            </Form>
            <hr />
            <Row lg={6} md={3} sm={2} xs={1}>
                {data.map(e => {
                    return (
                        <Col key={e} className="mb-4" id={e}>
                            <Fiche photo={showPhoto} human link name={e} />
                        </Col>
                    )
                })}

            </Row >
        </>
    );
}