import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPersonWalking, faAddressCard, faGears } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap';


function Fiche(props) {

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

    return (
        <Card className="fiche"
        // bg="danger"
        // text='light'
        >
            {props.photo &&
                <Card.Img variant="top" src={"/chiens/" + process_name(props.name) + ".jpg"} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = placeholder;
                }} />
            }
            <Card.Body>
                <Card.Title>
                    {props.human && <FontAwesomeIcon style={{ color: props.color }} icon={faPersonWalking} />}{' '}
                    {props.name}
                </Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}

            </Card.Body>
            {(props.notes || props.dogLink) &&
                <Card.Footer>
                    {props.dogLink &&
                        <>
                            <small>
                                <Link variant="primary" to={'/fiche-chien/' + props.name + '#top'} style={{ textDecoration: "None" }}>
                                    {/* <Badge> */}
                                    (Voir {props.name} <FontAwesomeIcon icon={faEye} />)
                                    {/* </Badge> */}
                                </Link>
                            </small>
                        </>
                    }
                    {props.notes}
                </Card.Footer>
            }
        </Card>
    );
}

export default Fiche;