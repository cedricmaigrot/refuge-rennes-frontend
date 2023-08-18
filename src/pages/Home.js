// import Calendar from "../components/Home/Calendar";

import { Card, Col, Row } from 'react-bootstrap';

import Calendar from "../components/Home/Calendar";
import SortiesChiens from "../components/Home/SortiesChiens";
import SortiesChiensStream from "../components/Home/SortiesChiensStream";
import ChiensSansBalade from '../components/Home/ChiensSansBalade';

import ActivityCalendar from 'react-activity-calendar'

import data from "./data.json"

export default function Home(props) {

    const explicitTheme = { light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'], dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'], };

    return (
        <>
            <h1>Accueil</h1>


            {/* <Card
                className='mt-4 d-none d-md-block' */}
            {/* // bg="dark"
            // text='light'
            > */}
            {/* <Card.Header>
                    <h2>Calendrier des sorties</h2>
                </Card.Header>
                <Card.Body> */}
            <ActivityCalendar
                theme={explicitTheme}
                data={data}
                datestart={"2023-01-01"}
                labels={{
                    months: [
                        'Jan',
                        'Feb',
                        'Mär',
                        'Apr',
                        'Mai',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Okt',
                        'Nov',
                        'Dez',
                    ],
                    weekstart: 1,
                    weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                    totalCount: '{{count}} Aktivitäten in {{year}}',
                    legend: {
                        less: 'Weniger',
                        more: 'Mehr',
                    },
                }}
            />
            {/* <Calendar days={props.days} type={props.type} /> */}
            {/* </Card.Body>
            </Card> */}

            {/* <div className="not-mobile" style={{ 'flexDirection': 'column' }}>
            </div> */}

            {/* <Row lg={2} sm={1} xs={1}>
                <Col>
                    <h2>Sorties (derniers 14j)</h2>
                    <div style={{ "height": "250px" }}>
                        <SortiesChiensStream offsetType="" />
                    </div>
                </Col>
                <Col>
                    <h2>Proportions sorties (derniers 14j)</h2>
                    <div style={{ "height": "250px" }}>
                        <SortiesChiensStream offsetType="expand" />
                    </div>
                </Col>
            </Row> */}



            <Card
                className='mt-4'
            // bg="dark"
            // text='light'
            >
                <Card.Header>
                    <h2>Chiens les plus sortis</h2>
                </Card.Header>
                <Card.Body>
                    <SortiesChiens days={props.days} type={props.type} nbResults={props.nbResults} />
                </Card.Body>
            </Card>

            <Card
                className='mt-4'
            // bg="dark"
            // text='light'
            >
                <Card.Header>
                    <h2>Chiens sans balade</h2>
                </Card.Header>
                <Card.Body>
                    <ChiensSansBalade />
                </Card.Body>
            </Card>

        </>
    );
}