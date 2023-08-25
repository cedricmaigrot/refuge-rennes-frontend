import React, { useState, useEffect } from 'react';

import { ResponsiveChord } from '@nivo/chord'


export default function PromeneursChords(props) {

    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        let url = 'http://185.98.137.192:5000/balades/promeneurs-chords/' + props.days + '/' + props.type + '/' + props.nbResults + ''
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((d) => {
                setData(JSON.parse(d['data']));
                setCategories(d['labels']);
                setColors(d['colors']);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [props.days, props.type, props.nbResults]);

    return (
        <>

            <div style={{ "height": "600px" }}>
                <ResponsiveChord
                    data={data}
                    keys={categories}
                    margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
                    colors={colors}
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
                    // colors={{ scheme: 'category10' }}
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