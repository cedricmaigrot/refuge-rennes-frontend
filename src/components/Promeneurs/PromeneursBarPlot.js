import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import PromeneursBarIndiv from './PromeneursBarIndiv';
import PromeneursBarCategories from './PromeneursBarCategories';

export default function PromeneursBarPlot(props) {


    const [data, setData] = useState([]);
    const [dataCat, setDataCat] = useState([]);
    const [categories, setCategories] = useState([]);


    function get_data() {
        fetch('http://185.98.137.192:5000/balades/promeneurs/' + props.days + "/" + props.type + "/" + props.nbResults)
            .then((response) => response.json())
            .then((d) => {
                setData(d);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
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
    }, [props.days, props.type, props.nbResults]);

    return (
        <>
            <div style={{ "height": "600px" }}>
                <PromeneursBarIndiv data={data} />
            </div>
            {/* <div style={{ "height": "600px" }}>
                <PromeneursBarCategories data={data} categories={categories} />
            </div> */}
        </>
    );
}