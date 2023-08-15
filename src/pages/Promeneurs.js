// import Calendar from "../components/Home/Calendar";

import { Col, Row } from 'react-bootstrap';

import ListePromeurs from '../components/Promeneurs/Liste';
import PromeneursBarPlot from '../components/Promeneurs/PromeneursBarPlot';
import PromeneursChords from '../components/Promeneurs/PromeneursChords';

export default function Promeneurs() {
    return (
        <>
            <h1>Les promeneurs du refuges</h1>
            {/* <div className="not-mobile">
                <h2>Liste des promeneurs</h2>
                <ListePromeurs />
            </div>
            <hr /> */}
            <h2>Nombre de balades par promeneur</h2>
            <PromeneursBarPlot />
            <h2>Correspondances entre les promeneurs</h2>
            <PromeneursChords />
        </>
    );
}