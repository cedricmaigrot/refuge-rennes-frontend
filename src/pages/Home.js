

// import Calendar from "../components/Home/Calendar";

import { Card } from 'react-bootstrap';

import Calendar from "../components/Home/Calendar";
import SortiesChiens from "../components/Home/SortiesChiens";
import ChiensSansBalade from '../components/Home/ChiensSansBalade';



export default function Home(props) {

    return (
        <>
            <h1>Accueil</h1>


            <Card
                className='mt-4 d-none d-md-block'
            // bg="dark"
            // text='light'
            >
                <Card.Header>
                    <h2>Calendrier des sorties</h2>
                </Card.Header>
                <Card.Body>

                    <Calendar days={0} />
                </Card.Body>
            </Card>

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
                    <SortiesChiens days={0} type={props.type} nbResults={props.nbResults} />
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