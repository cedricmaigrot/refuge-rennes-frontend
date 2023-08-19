
import React, { useState, useCallback, useEffect } from "react";

import { Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Cookies from "universal-cookie";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPersonWalking, faAddressCard, faGears } from '@fortawesome/free-solid-svg-icons'

function NavigationBar(props) {
    const cookies = new Cookies();
    const [show, setShow] = useState(false);
    const [showNavText, setShowNavText] = useState(true);
    const [y, setY] = useState(window.scrollY);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const handleNavigation = useCallback(
    //     (e) => {
    //         const window = e.currentTarget;
    //         if (window.scrollY < 50) {
    //             setShowNavText(true)
    //         } else {
    //             setShowNavText(false)
    //         }
    //         setY(window.scrollY);
    //     },
    //     [y]
    // );

    // useEffect(() => {
    //     setY(window.scrollY);
    //     window.addEventListener("scroll", handleNavigation);

    //     return () => {
    //         window.removeEventListener("scroll", handleNavigation);
    //     };
    // }, [handleNavigation]);


    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Refuge Rennes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> {showNavText && "Accueil"}</Nav.Link>
                            <Nav.Link href="/promeneurs"><FontAwesomeIcon icon={faPersonWalking} /> {showNavText && "Promeneurs"}</Nav.Link>
                            <NavDropdown title={(<><FontAwesomeIcon icon={faAddressCard} /> {showNavText && "Fiches"}</>)} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/fiche-chien">Chien</NavDropdown.Item>
                                <NavDropdown.Item href="/fiche-promeneur">Promeneur</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={handleShow} >
                                <FontAwesomeIcon icon={faGears} /> {showNavText && "Options"}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='m-2' inline>
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

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Valider
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
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