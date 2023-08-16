import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
        <Card>
            {props.photo &&
                <Card.Img variant="top" src={"/chiens/" + process_name(props.name) + ".jpg"} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = placeholder;
                }} />
            }
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
}

export default Fiche;