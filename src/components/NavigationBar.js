import { Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import Cookies from "universal-cookie";

function NavigationBar(props) {

    const cookies = new Cookies();

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Refuge Rennes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/promeneurs">Promeneurs</Nav.Link>
                        <NavDropdown title="Fiches" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/fiche-chien">Chien</NavDropdown.Item>
                            <NavDropdown.Item href="/fiche-chien">Promeneur</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Options" id="basic-nav-dropdown">
                            <Form className='m-2'>
                                <Form.Label className='mb-2'>Interval de temps</Form.Label>
                                <Form.Select
                                    aria-label="Interval de temps"
                                    value={props.days}
                                    onChange={e => { props.setDays(e.target.value); cookies.set('refuge_rennes_days', e.target.value); props.setShow(true) }}
                                >
                                    <option value="7">7 jours</option>
                                    <option value="14">14 jours</option>
                                    <option value="30">30 jours</option>
                                    <option value="0">Toutes les dates</option>
                                </Form.Select>
                                <Form.Label className='mb-2 mt-2'>Type de sorties</Form.Label>
                                <Form.Select
                                    aria-label="Type de sorties"
                                    value={props.type}
                                    onChange={e => { props.setType(e.target.value); cookies.set('refuge_rennes_type', e.target.value); props.setShow(true) }}
                                >
                                    <option value="all">Toutes les sorties</option>
                                    <option value="balades">Seulement les balades</option>
                                    <option value="parcs">Seulement les mises en parc</option>
                                </Form.Select>
                                <Form.Label className='mb-2 mt-2'>Résultats</Form.Label>
                                <Form.Select
                                    aria-label="Nombre de résultats"
                                    value={props.nbResults}
                                    onChange={e => { props.setNbResults(e.target.value); cookies.set('refuge_rennes_nbresults', e.target.value); props.setShow(true) }}
                                >
                                    <option value="0">Tous les résultats</option>
                                    <option value="5">5 premiers résultats</option>
                                    <option value="10">10 premiers résultats</option>
                                    <option value="25">25 premiers résultats</option>
                                </Form.Select>
                            </Form>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

{/* <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Refuge-Rennes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/promeneurs">Promeneurs</Nav.Link>
                        <Nav.Link href="/fiche-chien">Voir une fiche Chien</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            );
} */}

export default NavigationBar;