import React, { useState, useEffect } from 'react';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Row, Col } from 'react-bootstrap';
import SubCalendar from './SubCalendar';

export default function Calendar(props) {
    const [labelDays, setLabelDays] = useState("");

    useEffect(() => {
        if (props.days === 0) {
            setLabelDays("Tout l'historique");
        }
        else {
            setLabelDays("Seulement les " + props.days + " derniers jours");
        }
    }, [props]);

    return (
        <>
            <Row>
                <Col style={{ paddingLeft: "60px" }}>
                    <h3>Balades</h3>
                    <SubCalendar days={props.days} type="balades" />
                </Col>
                <Col style={{ paddingLeft: "60px" }}>
                    <h3>Parc</h3>
                    <SubCalendar days={props.days} type="parcs" />
                </Col>
                <Col style={{ paddingLeft: "60px" }}>
                    <h3>Balades + Parc</h3>
                    <SubCalendar days={props.days} type="all" />
                </Col>
            </Row>
            <hr />
            <p>
                Ce calendrier montre le nombre total de sorties par jour
                sur une certaine durée de temps
                (<span className='text-info'>Option sélectionnée : {labelDays}</span>).
                Les cases <span className='text-danger'>rouges</span> correspondent aux jours avec
                le <span className='text-danger'>moins de sorties</span>;
                les cases <span className='text-success'>vertes</span>
                , le <span className='text-success'>plus de sorties</span>.
            </p >
            <ReactTooltip id="react-tooltip" />

        </>
    );
}