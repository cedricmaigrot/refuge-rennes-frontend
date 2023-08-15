import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import './plots.css';
import PromeneursBarIndiv from './PromeneursBarIndiv';
import PromeneursBarCategories from './PromeneursBarCategories';

export default function PromeneursBarPlot(props) {

    const [days, setDays] = useState(7);
    const [type, setType] = useState("all");
    const [nbResults, setNbResults] = useState(5);



    const [data, setData] = useState([]);
    const [dataCat, setDataCat] = useState([]);
    const [categories, setCategories] = useState([]);


    function get_data() {
        fetch('http://185.98.137.192:5000/balades/promeneurs/' + days + "/" + type + "/" + nbResults)
            .then((response) => response.json())
            .then((d) => {
                setData(d);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        if (window.innerWidth >= 1200) {
            setNbResults(0);
            console.log(nbResults)
        }
        get_data();
        fetch('http://185.98.137.192:5000/balades/chiens')
            .then((response) => response.json())
            .then((d) => {
                setCategories(d);
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
            <div style={{ "height": "600px" }}>
                <PromeneursBarIndiv data={data} />
            </div>
            {/* <div style={{ "height": "600px" }}>
                <PromeneursBarCategories data={data} categories={categories} />
            </div> */}
        </>
    );
}