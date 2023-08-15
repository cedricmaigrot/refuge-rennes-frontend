// import Calendar from "../components/Home/Calendar";

import { Col, Row } from 'react-bootstrap';

import Calendar from "../components/Home/Calendar";
import SortiesChiens from "../components/Home/SortiesChiens";
import SortiesChiensStream from "../components/Home/SortiesChiensStream";
import ChiensSansBalade from '../components/Home/ChiensSansBalade';

export default function Home() {
    return (
        <>
            <h1>Accueil</h1>
            <div className="not-mobile" style={{ 'flexDirection': 'column' }}>
                <h2>Calendrier des sorties</h2>
                <div style={{ "height": "400px" }}>
                    <Calendar type={"all"} />
                </div>
            </div>

            <Row lg={2} sm={1} xs={1}>
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
            </Row>


            <hr />
            {/* <Row>
                <Col md={8} sm={6} xs={12}> */}
            <h2>Chiens les plus sortis</h2>
            <SortiesChiens />
            {/* </Col>
                <Col md={4} sm={6} xs={12}> */}
            <h2>Chiens sans balade</h2>
            <div style={{ "height": "600px" }}>
                <ChiensSansBalade />
            </div>
            {/* </Col>
            </Row> */}
        </>
    );
}