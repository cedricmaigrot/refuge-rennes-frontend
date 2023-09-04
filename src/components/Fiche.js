import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleHalfStroke, faPersonWalking, faDog } from '@fortawesome/free-solid-svg-icons'
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons/faCircle'
import { Badge } from 'react-bootstrap';
import './Fiche.css';


function Fiche(props) {

    const [imgPlaceholder, setImgPlaceholder] = useState("/chiens/placeholder_dog.jpg");
    const [url, setUrl] = useState('/fiche-chien/' + props.name);
    const [color, setColor] = useState("gray");
    const [category, setCategory] = useState("Autre");

    function process_name(name) {
        return name.toLowerCase();
    }

    useEffect(() => {
        if (props.human) {
            fetch('http://185.98.137.192:5000/balades/promeneur/information/' + props.name)
                .then((response) => response.json())
                .then((data) => {
                    setColor(data['color'][0]);
                    console.log(data['category'][0])
                    if (data['category'][0] === "Salarié") {
                        setCategory('Salarié')
                        setColor('orange')
                    } else {
                        setCategory('Bénévole')
                        setColor('teal')
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
            setImgPlaceholder("/placeholder_human.jpg")
            setUrl('/fiche-promeneur/' + props.name)
        }
        if (props.dog) {
            fetch('http://185.98.137.192:5000/balades/chien/' + props.name.toLowerCase())
                .then((response) => response.json())
                .then((data) => {
                    console.log(props.name)
                    console.log(data)
                    setColor(data[0]['levelColor']);

                    if (data[0]['level'] === 'vert') {
                        setCategory((<>
                            <FontAwesomeIcon icon={faCircleHalfStroke} />
                            <FontAwesomeIcon icon={faCircleRegular} />
                        </>))
                    }
                    if (data[0]['level'] === 'bleu') {
                        setCategory((<>
                            <FontAwesomeIcon icon={faCircle} />
                            <FontAwesomeIcon icon={faCircleRegular} />
                        </>))
                    }
                    if (data[0]['level'] === 'rouge') {
                        setCategory((<>
                            <FontAwesomeIcon icon={faCircle} />
                            <FontAwesomeIcon icon={faCircleHalfStroke} />
                        </>))
                    }
                    if (data[0]['level'] === 'noir') {
                        setCategory((<>
                            <FontAwesomeIcon icon={faCircle} />
                            <FontAwesomeIcon icon={faCircle} />
                        </>))
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
            setImgPlaceholder("/chiens/placeholder_dog.jpg")
            setUrl('/fiche-chien/' + props.name)
        }

        console.log(color)
    }, []);



    return (
        <Card className="fiche"
            style={{ border: "3px solid " + color }}
        >
            {props.photo &&
                <Card.Img variant="top" src={"/chiens/" + process_name(props.name) + ".jpg"} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = imgPlaceholder;
                }} />
            }
            <Card.Body>

                {props.human && <FontAwesomeIcon style={{ color: color }} icon={faPersonWalking} />}
                {props.dog && <FontAwesomeIcon style={{ color: color }} icon={faDog} />}{' '}
                {props.name}
                {' '}
                {
                    props.walkCount && (
                        <Badge>{props.walkCount} balades</Badge>
                    )
                }


                {props.notes}

            </Card.Body>
            <Card.Footer>
                <Link to={url} style={{ textDecoration: "None" }}>
                    <Badge bg="dark">Voir plus</Badge>
                </Link>{' '}
                <Badge bg="light" style={{ color: color }}>{category}</Badge>
            </Card.Footer>
        </Card >
    );
}

export default Fiche;