import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

export default function Calendar(props) {
    const [data, setData] = useState([]);
    const [labelDays, setLabelDays] = useState("");
    const [labelType, setLabelType] = useState("");


    function preprocess() {
        fetch('http://185.98.137.192:5000/balades/calendrier-balades-benevole/' + props.name + '/' + props.days + '/' + props.type)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

        if (props.type == "all") {
            setLabelType("Mises en parc + balades")
        }
        else if (props.type == "parcs") {
            setLabelType("Seulement les mises en parc")
        }
        else if (props.type == "balades") {
            setLabelType("Seulement les balades")
        }

        if (props.days == 0) {
            setLabelDays("Tout l'historique");
        }
        else {
            setLabelDays("Seulement les " + props.days + " derniers jours");
        }
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
                    emptyColor="#eeeeee"
                    colors={['#FFAAAA', '#F1B8AA', '#E3C6AA', '#D5D5AA', '#C6E3AA', '#B8F1AA', '#AAFFAA']}
                    margin={{ top: 20, right: 40, bottom: 40, left: 25 }}
                    yearSpacing={40}
                    monthBorderColor="#333"
                    dayBorderWidth={2}
                    dayBorderColor="#ffffff"
                />
            </div>
            <Row md={2}>
                <Col><FontAwesomeIcon style={{ color: "#FFAAAA" }} icon={faSquare} />  Jour avec le moins de balades</Col>
                <Col><FontAwesomeIcon style={{ color: "#AAFFAA" }} icon={faSquare} />  Jour avec le plus de balades</Col>
            </Row>
        </>
    );
}