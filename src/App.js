import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import FicheChien from "./pages/FicheChien"
import Promeneurs from "./pages/Promeneurs";

import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/promeneurs" element={<Promeneurs />} />
            <Route path="/fiche-chien" element={<FicheChien />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
