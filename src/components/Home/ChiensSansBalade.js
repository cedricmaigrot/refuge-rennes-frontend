import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import { ResponsiveBar } from "@nivo/bar";

import { useForm } from "react-hook-form";

import DogCard from '../Fiche';
// import data from './SortiesChiensData'

export default function ChiensSansBalade(props) {

    const [days, setDays] = useState(7);

    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);


    function get_data() {
        fetch('http://185.98.137.192:5000/balades/chiens-sans-balade')
            .then((response) => response.json())
            .then((d) => {
                setData(d['data']);
            })
            .catch((err) => {
                console.log(err.message);
            });
        console.log(data)
    }

    useEffect(() => {
        get_data();
    }, []);

    useEffect(() => {
        get_data();
    }, [days]);

    return (
        <Row md={6} sm={2} xs={1}>
            {data.map(e => {
                return <Col className='mb-4'><DogCard photo dog name={e} /></Col>
            })}
        </Row>
    );
}