import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home.js';
import Societe from './compagnies-assurances/Societe';
import AfiEurope from './compagnies-assurances/AfiEurope';
import Allianz from './compagnies-assurances/Allianz';
import Alptis from './compagnies-assurances/Alptis';
import April from './compagnies-assurances/April';
import Generali from './compagnies-assurances/Generali';
import SwissLife from './compagnies-assurances/SwissLife';
import Tarif from './tarif/Tarif';
import Navbar from './Navbar';
import Footer from './Footer';
import Devis from './devis/Devis.js';
import Pret from './pret/Pret';
import Conso from './pret/Conso.js';
import Rachat from './pret/Rachat.js';
import Comparatif from './comparatif/Comparatif';
import Courtier from './courtier/Courtier';
import MentionsLegales from './mentions-legales/MentionsLegales';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="App">
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compagnies-assurances/Societe" element={<Societe />} />
        <Route path="/compagnies-assurances/AfiEurope" element={<AfiEurope />} />
        <Route path="/compagnies-assurances/Allianz" element={<Allianz />} />
        <Route path="/compagnies-assurances/Alptis" element={<Alptis />} />
        <Route path="/compagnies-assurances/April" element={<April />} />
        <Route path="/compagnies-assurances/Generali" element={<Generali />} />
        <Route path="/compagnies-assurances/SwissLife" element={<SwissLife />} />
        <Route path="/tarif/Tarif" element={<Tarif />} />
        <Route path="/devis/Devis" element={<Devis />} />
        <Route path="/pret/Pret" element={<Pret />} />
        <Route path="/pret/Conso" element={<Conso />} />
        <Route path="/pret/Rachat" element={<Rachat />} />
        <Route path="/comparatif/Comparatif" element={<Comparatif />} />
        <Route path="/courtier/Courtier" element={<Courtier />} />
        <Route path="/contact/Contact" element={<Contact />} />
        <Route path="/mentions-legales/MentionsLegales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
