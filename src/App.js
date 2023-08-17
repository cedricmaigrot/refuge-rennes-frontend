import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import FicheChien from "./pages/FicheChien"
import Promeneurs from "./pages/Promeneurs";

import Cookies from "universal-cookie";

import './App.css';
import ListeDesChiens from './pages/ListeDesChiens';

function App() {

  const cookies = new Cookies();
  if (!cookies.get('refuge_rennes_days')) { cookies.set('refuge_rennes_days', 7) }
  if (!cookies.get('refuge_rennes_type')) { cookies.set('refuge_rennes_type', "all") }
  if (!cookies.get('refuge_rennes_nbresults')) { cookies.set('refuge_rennes_nbresults', 5) }

  const [days, setDays] = useState(cookies.get('refuge_rennes_days'));
  const [type, setType] = useState(cookies.get('refuge_rennes_type'));
  const [nbResults, setNbResults] = useState(cookies.get('refuge_rennes_nbresults'));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout
              days={days}
              setDays={setDays}
              type={type}
              setType={setType}
              nbResults={nbResults}
              setNbResults={setNbResults}
            />
          }>
            <Route index element={<Home days={days} type={type} nbResults={nbResults} />} />
            <Route path="/promeneurs" element={<Promeneurs days={days} type={type} nbResults={nbResults} />} />
            <Route path="/fiche-chien" element={<ListeDesChiens />} />
            <Route path="/fiche-chien/:id" element={<FicheChien days={days} type={type} nbResults={nbResults} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
