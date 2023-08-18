import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLink, faPlus, faPersonWalking, faDog } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap';


function Fiche(props) {

    const [color, setColor] = useState("gray");
    const [category, setCategory] = useState("Autre");

    useEffect(() => {

        if (props.human)
            fetch('http://185.98.137.192:5000/balades/promeneur/information/' + props.name)
                .then((response) => response.json())
                .then((data) => {
                    setColor(data['color'][0]);
                    setCategory(data['category'][0]);
                })
                .catch((err) => {
                    console.log(err.message);
                });

        if (props.color) {
            setColor(props.color)
        }
    }, []);


    function process_name(name) {
        return name.toLowerCase();
    }

    let placeholder = "/chiens/placeholder_dog.jpg"
    if (props.human) {
        placeholder = "/placeholder_human.jpg"
    }
    if (props.dog) {
        placeholder = "/chiens/placeholder_dog.jpg"
    }

    let page = '/fiche-chien/' + props.name
    if (props.human) {
        page = '/fiche-promeneur/' + props.name
    }

    return (
        <Card className="fiche"
            style={{ border: "4px solid " + color }}
        // bg="danger"
        // text='light'
        >
            {props.photo &&
                <Card.Img variant="top" src={"/chiens/" + process_name(props.name) + ".jpg"} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = placeholder;
                }} />
            }
            <Card.Header>

                {props.human && <FontAwesomeIcon style={{ color: color }} icon={faPersonWalking} />}
                {props.dog && <FontAwesomeIcon style={{ color: color }} icon={faDog} />}{' '}
                {props.name}
            </Card.Header>
            <Card.Body>
                {props.notes}
                {
                    props.link && props.notes && <br />
                }
                {props.human && category === "Salarié" && (<><Badge bg="light" style={{ color: "orange" }}>Salarié</Badge></>)}
                {props.human && category !== "Salarié" && (<><Badge bg="light" style={{ color: "teal" }}>Bénévole</Badge></>)}

            </Card.Body>
            {(props.notes || props.link) &&
                <Card.Footer>
                    {props.link &&
                        <>
                            <small>
                                <Link variant="primary" to={page} style={{ textDecoration: "None" }}>
                                    {/* <Badge> */}
                                    <Badge bg="secondary">Voir <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faLink} /></Badge>
                                    {/* </Badge> */}
                                </Link>
                            </small>
                        </>
                    }
                </Card.Footer>
            }
        </Card >
    );
}

export default Fiche;