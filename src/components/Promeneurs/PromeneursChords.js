import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import './plots.css';
import { ResponsiveChord } from '@nivo/chord'


export default function PromeneursChords(props) {

    const [days, setDays] = useState(7);
    const [type, setType] = useState("all");
    const [nbResults, setNbResults] = useState(5);



    const [data, setData] = useState([]);
    const [dataCat, setDataCat] = useState([]);
    const [categories, setCategories] = useState([]);


    function get_data() {
        fetch('http://185.98.137.192:5000/balades/promeneurs-chords')
            .then((response) => response.json())
            .then((d) => {
                setData(JSON.parse(d['data']));
                setCategories(d['labels']);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // let d = [[11, 0, 0, 2, 1, 1, 0], [0, 20, 6, 0, 4, 2, 2], [0, 9, 11, 1, 2, 2, 4], [2, 0, 1, 25, 5, 13, 1], [3, 8, 1, 5, 22, 3, 1], [1, 1, 1, 4, 1, 12, 0], [0, 4, 7, 1, 1, 0, 1]]
        // setData(d)
    }

    useEffect(() => {
        if (window.innerWidth >= 1200) {
            setNbResults(0);
            console.log(nbResults)
        }
        get_data();
    }, []);

    useEffect(() => {
        get_data();
    }, [days, type, nbResults]);

    return (
        <>

            <div style={{ "height": "600px" }}>
                <ResponsiveChord
                    // data={[[11, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 13, 6, 0, 4, 2, 1, 2, 3, 3, 0, 0, 6, 3, 4], [0, 9, 8, 1, 2, 2, 2, 4, 1, 0, 0, 0, 0, 2, 0], [2, 0, 1, 22, 5, 13, 0, 1, 4, 0, 7, 5, 0, 1, 0], [3, 8, 1, 5, 15, 3, 1, 1, 4, 2, 2, 3, 2, 3, 4], [1, 1, 1, 4, 1, 8, 2, 0, 0, 0, 1, 4, 0, 1, 0], [0, 2, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0], [0, 4, 7, 1, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0], [0, 2, 1, 2, 3, 0, 0, 0, 1, 1, 0, 0, 1, 0, 2], [0, 2, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 2, 0, 3], [0, 0, 0, 1, 2, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0], [1, 0, 0, 3, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 2, 0, 1], [0, 3, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0], [0, 4, 0, 0, 2, 0, 0, 0, 3, 2, 0, 0, 1, 0, 1]]}
                    // keys={['Flo', 'Renée', 'Denise', 'Cédric', 'Claude', 'Laura', 'Alice',
                    //     'Isa', 'Pauline', 'Margaux', 'Charline', 'Anne-Laure', 'Olivier',
                    //     'Agnès', 'Christian']}
                    data={data}
                    keys={categories}
                    margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                    valueFormat=".2f"
                    padAngle={0.02}
                    innerRadiusRatio={0.96}
                    innerRadiusOffset={0.02}
                    inactiveArcOpacity={0.25}
                    arcBorderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.6
                            ]
                        ]
                    }}
                    activeRibbonOpacity={0.75}
                    inactiveRibbonOpacity={0.25}
                    ribbonBorderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.6
                            ]
                        ]
                    }}
                    labelRotation={-90}
                    labelTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1
                            ]
                        ]
                    }}
                    colors={{ scheme: 'category10' }}
                    motionConfig="stiff"
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 70,
                            itemWidth: 80,
                            itemHeight: 14,
                            itemsSpacing: 0,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            symbolSize: 12,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </>
    );
}