import React, { useState, useEffect } from 'react';


import DataTable from 'react-data-table-component';
import './verif.css';



const columns = [
    {
        name: 'name',
        selector: row => row.name,
        width: "16%",
        conditionalCellStyles: [
            {
                when: row => row.color === "green",
                classNames: ['greenLevel'],
            },
            {
                when: row => row.color === "blue",
                classNames: ['blueLevel'],
            },
            {
                when: row => row.color === "red",
                classNames: ['redLevel'],
            },
            {
                when: row => row.color === "black",
                classNames: ['blackLevel'],
            },
        ],

    },
    {
        name: 'PL',
        width: "5%",
        selector: row => row.lundi_parc,
    },
    {
        name: 'BL',
        width: "7%",
        selector: row => row.lundi_balade,
    },
    {
        name: 'PMa',
        width: "5%",
        selector: row => row.mardi_parc,
    },
    {
        name: 'BMa',
        width: "7%",
        selector: row => row.mardi_balade,
    },
    {
        name: 'Pme',
        width: "5%",
        selector: row => row.mercredi_parc,
    },
    {
        name: 'BMe',
        width: "7%",
        selector: row => row.mercredi_balade,
    },
    {
        name: 'PJ',
        width: "5%",
        selector: row => row.jeudi_parc,
    },
    {
        name: 'BJ',
        width: "7%",
        selector: row => row.jeudi_balade,
    },
    {
        name: 'PV',
        width: "5%",
        selector: row => row.vendredi_parc,
    },
    {
        name: 'BV',
        width: "7%",
        selector: row => row.vendredi_balade,
    },
    {
        name: 'PS',
        width: "5%",
        selector: row => row.samedi_parc,
    },
    {
        name: 'DS',
        width: "7%",
        selector: row => row.samedi_balade,
    },
    {
        name: 'PD',
        width: "5%",
        selector: row => row.dimanche_parc,
    },
    {
        name: 'BD',
        width: "7%",
        selector: row => row.dimanche_balade,
    },
];


export default function Verif(props) {
    const [data, setData] = useState([]);

    function get_data() {


        fetch('http://185.98.137.192:5000/balades/verif/feuille/1')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        get_data();
    }, []);


    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};