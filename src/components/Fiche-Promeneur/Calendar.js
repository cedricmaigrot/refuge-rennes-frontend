import React, { useState, useEffect } from 'react';


import ActivityCalendar from 'react-activity-calendar'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function Calendar(props) {
    const [data, setData] = useState([]);
    const [labelDays, setLabelDays] = useState("");
    const [labelType, setLabelType] = useState("");

    const explicitTheme = {
        light: ["#DDD", "#c80064", "#df979e", "#98d1d1", "#54bebe"]
        , dark: ["#DDD", "#c80064", "#df979e", "#98d1d1", "#54bebe"]
        ,
    };

    function preprocess() {
        const url = 'http://185.98.137.192:5000/balades/calendrier-balades-benevole/' + props.name + '/' + props.days + '/' + props.type
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

        if (props.type === "all") {
            setLabelType("Mises en parc + balades")
        }
        else if (props.type === "parcs") {
            setLabelType("Seulement les mises en parc")
        }
        else if (props.type === "balades") {
            setLabelType("Seulement les balades")
        }

        if (props.days === 0) {
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
            <ActivityCalendar
                theme={explicitTheme}
                colorScheme="dark"
                data={data}
                weekStart={1}
                blockRadius={5}
                blockSize={25}
                showWeekdayLabels
                renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                        'data-tooltip-id': 'react-tooltip',
                        'data-tooltip-html': `${activity.count} sorties le ${activity.date}`,
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
                        less: 'Peu',
                        more: 'Beaucoup',
                    },
                }}
            />
            <ReactTooltip id="react-tooltip" />

        </>
    );
}