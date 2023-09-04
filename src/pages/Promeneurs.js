// import Calendar from "../components/Home/Calendar";

import { Card, Col, Row } from 'react-bootstrap';
import PromeneursBarPlot from '../components/Promeneurs/PromeneursBarPlot';
import PromeneursChords from '../components/Promeneurs/PromeneursChords';

export default function Promeneurs(props) {
    return (
        <>
            <h1>Les promeneurs du refuges</h1>

            <Row md={2} sm={1} xs={1}>
                <Col>
                    <Card
                        className='mt-4'
                    // bg="dark"
                    // text='light'
                    >
                        <Card.Header>
                            <h2>Nombre de balades par promeneur</h2>
                        </Card.Header>
                        <Card.Body>
                            <PromeneursBarPlot days={0} type={"balades"} nbResults={10} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card
                        className='mt-4'
                    // bg="dark"
                    // text='light'
                    >
                        <Card.Header>
                            <h2>Correspondances entre les promeneurs</h2>
                        </Card.Header>
                        <Card.Body>
                            <PromeneursChords days={0} type={"balades"} nbResults={10} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>







        </>
    );
}