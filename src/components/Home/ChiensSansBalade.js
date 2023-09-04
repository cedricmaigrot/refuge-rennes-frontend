import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import DogCard from '../Fiche';

export default function ChiensSansBalade(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://185.98.137.192:5000/balades/chiens-sans-balade')
            .then((response) => response.json())
            .then((d) => {
                setData(d['data']);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <Row md={6} sm={2} xs={1}>
            {data.map(e => {
                return <Col className='mb-4'><DogCard photo dog name={e} /></Col>
            })}
        </Row>
    );
}