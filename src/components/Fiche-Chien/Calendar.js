import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar'

export default function Calendar(props) {
    const [data, setData] = useState([]);
    const [labelDays, setLabelDays] = useState("");
    const [labelType, setLabelType] = useState("");


    function preprocess() {
        fetch('http://185.98.137.192:5000/balades/fiche-chien/calendar/' + props.name + '/' + props.days + '/' + props.type)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    useEffect(() => {
        preprocess()
    }, []);

    useEffect(() => {
        preprocess()
    }, [props]);

    const frenchMonths = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    return (
        <>
            <div style={{ "height": "150px" }}>
                <ResponsiveCalendar
                    monthLegend={(_year, month) => frenchMonths[month]}
                    data={data}
                    from="2023-07-01"
                    to="2023-09-01"
                    emptyColor="#EEE"
                    colors={['#F99', '#EEE', '#99F', '#9F9', '#9FF', '#FF9']}
                    margin={{ top: 20, right: 120, bottom: 40, left: 25 }}
                    yearSpacing={40}
                    minValue="-1"
                    maxValue="4"
                    monthBorderColor="#333"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                />
            </div>
            <Row md={3}>
                <Col><FontAwesomeIcon style={{ color: "#F99" }} icon={faSquare} />  Mise en parc</Col>
                <Col><FontAwesomeIcon style={{ color: "#99F" }} icon={faSquare} />  Mise en parc + 1 balade</Col>
                <Col><FontAwesomeIcon style={{ color: "#9FF" }} icon={faSquare} />  Mise en parc + 2 balades</Col>
                <Col><FontAwesomeIcon style={{ color: "#9F9" }} icon={faSquare} />   1 balade</Col>
                <Col><FontAwesomeIcon style={{ color: "#FF9" }} icon={faSquare} />   2 balades</Col>
            </Row>
            {/* <b>Légende :</b>
            <p>
                Case <span style={{ color: "#F99" }}>rouge</span> : Mise en parc<br />
                Case <span style={{ color: "#99F" }}>rouge</span> : Mise en parc + 1 balade<br />
                Case <span style={{ color: "#9F9" }}>rouge</span> : 1 balade<br />
                Case <span style={{ color: "#9FF" }}>rouge</span> : Mise en parc + 2 balades<br />
                Case <span style={{ color: "#FF9" }}>rouge</span> : 2 balades<br />
            </p > */}
        </>
    );
}