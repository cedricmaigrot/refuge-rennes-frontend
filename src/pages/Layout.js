import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Alert, Container } from "react-bootstrap";

const Layout = (props) => {
    const [show, setShow] = useState(true);

    return (
        <>
            <NavigationBar
                days={props.days}
                setDays={props.setDays}
                type={props.type}
                setType={props.setType}
                nbResults={props.nbResults}
                setNbResults={props.setNbResults}
                setShow={setShow}
            />
            <Container>
                <Alert show={show} variant="info" className="mt-4 mb-4" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Options choisies :  </Alert.Heading>
                    <p>
                        <ul>
                            <li>Analyse réalisée les données {props.days == 0 && "de tout l'historique de données" || "des " + props.days + " jours"}.</li>
                            <li>Utilisation des sorties de type : {props.type == "all" && "Toutes les sorties (parcs + balades)"}{props.type == "parcs" && "Seulement les mises en parc"}{props.type == "balades" && "Seulement les balades"}.</li>
                            <li>Affichage {props.nbResults == 0 && "de tous les résultats" || "des " + props.nbResults + " premiers résultats"}.</li>
                        </ul>
                    </p>
                </Alert>
                <Outlet />
            </Container>
        </>
    )
};

export default Layout;