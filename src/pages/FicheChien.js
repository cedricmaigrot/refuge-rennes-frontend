import {
    useParams
} from "react-router-dom";


import { Row, Col, Form } from "react-bootstrap";
import Fiche from "../components/Fiche";
import Calendar from "../components/Fiche-Chien/Calendar";
import ProportionPie from "../components/Fiche-Chien/ProportionPie";

export default function Home() {
    let { id } = useParams();

    return (
        <>
            {id && (
                <>
                    <h1>Fiche chien: {id}</h1>
                    <Row>
                        <Col md={2}>
                            <Fiche photo name={id} />
                            <hr />
                            <Form>
                                <Form.Check
                                    type="radio"
                                    name="group1"
                                    id={`chien-form`}
                                    label={`Chien 1`}
                                />
                                <Form.Check
                                    type="radio"
                                    name="group1"
                                    id={`chien-form`}
                                    label={`Chien 2`}
                                />
                                <Form.Check
                                    type="radio"
                                    name="group1"
                                    id={`chien-form`}
                                    label={`Chien 3`}
                                />
                            </Form>
                        </Col>
                        <Col md={10}>
                            <h3>Calendrier des sorties</h3>
                            <div style={{ "height": "250px" }}>
                                <Calendar type={"all"} />
                            </div>
                            <Row>
                                <Col md={6}>
                                    <h3>Promeneurs</h3>
                                    <Row md={3}>
                                        <Col className="mb-4">
                                            <Fiche human photo name="Anne-Laure" />
                                        </Col>
                                        <Col className="mb-4">
                                            <Fiche human photo name="Cédric" />
                                        </Col>
                                        <Col className="mb-4">
                                            <Fiche human photo name="Bénévole 3" />
                                        </Col>
                                        <Col className="mb-4">
                                            <Fiche human photo name="Bénévole 4" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <h3>Mises en parc/Balades</h3>
                                    <div style={{ "height": "400px" }}>
                                        <ProportionPie />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </>
            )}
            {!id && (
                <>
                    <h1>Liste des chiens du refuge: </h1>
                    <Row md={6}>
                        <Col className="mb-4">
                            <Fiche photo name="Sensei" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Kingston" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Jora" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Soultan" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Sensei" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Kingston" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Jora" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Soultan" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Sensei" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Kingston" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Jora" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Soultan" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Sensei" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Kingston" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Jora" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Soultan" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Sensei" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Kingston" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Jora" />
                        </Col>
                        <Col className="mb-4">
                            <Fiche photo name="Soultan" />
                        </Col>
                    </Row>
                </>
            )}

        </>
    );
}