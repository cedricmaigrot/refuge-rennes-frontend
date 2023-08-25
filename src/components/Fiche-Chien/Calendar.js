import React, { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from "react-bootstrap";

import ActivityCalendar from 'react-activity-calendar'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function Calendar(props) {
    const [data, setData] = useState([]);

    const explicitTheme = {
        light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
        dark: ['#383838', '#E96479', '#7DB9B6', '#F5E9CF', '#4D455D'],
    };

    useEffect(() => {
        const url = 'http://185.98.137.192:5000/balades/fiche-chien/calendar/' + props.name + '/' + props.days + '/' + props.type
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [props]);

    const frenchMonths = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

    function tootip_text(activity) {
        if (activity.count === 0)
            return `Pas de sortie le ${activity.date}`
        if (activity.count === 1)
            return `Mise en parc le ${activity.date}`
        if (activity.count === 2)
            return `Une balade le ${activity.date}`
        if (activity.count === 3)
            return `Mise en parc et une balade le ${activity.date}`
        if (activity.count === 4)
            return `Deux balades le ${activity.date}`
        if (activity.count === 5)
            return `Mise en parc et deux balades le ${activity.date}`
        return `Valeur (${activity.count}) inconnue`
    }

    return (
        <>
            <ActivityCalendar
                theme={explicitTheme}
                colorScheme="dark"
                colors={["gray", "red", "blue", "purple", "purple"]}
                data={data}
                weekStart={1}
                blockRadius={5}
                blockSize={25}
                showWeekdayLabels
                renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                        'data-tooltip-id': 'react-tooltip',
                        'data-tooltip-html': tootip_text(activity),
                    })
                }
                labels={{
                    months: { frenchMonths },
                    weekdays: [
                        'Dimanche', // Sunday first!
                        'Lundi',
                        'Mardi',
                        'Mercredi',
                        'Jeudi',
                        'Vendredi',
                        'Samedi',
                    ],
                    totalCount: '{{count}} sorties',
                    legend: {
                        // less: 'Peu de sorties',
                        // more: 'Beaucoup de sorties',
                        less: '',
                        more: '',
                    },
                }}
            />
            <ReactTooltip id="react-tooltip" />
            <Row md={4}>
                <Col>
                    <FontAwesomeIcon style={{ 'color': '#E96479' }} icon={faSquare} /> Parc
                </Col>
                <Col>
                    <FontAwesomeIcon style={{ 'color': '#7DB9B6' }} icon={faSquare} /> Balade
                </Col>
                <Col>
                    <FontAwesomeIcon style={{ 'color': '#F5E9CF' }} icon={faSquare} /> Parc + Balade
                </Col>
                <Col>
                    <FontAwesomeIcon style={{ 'color': '#4D455D' }} icon={faSquare} /> 2 balades
                </Col>
            </Row>
            {/* dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'], */}

        </>
    );
}