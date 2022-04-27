import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home.js';
import Societe from './Societe';
import AfiEurope from './AfiEurope';
import Allianz from './Allianz';
import Alptis from './Alptis';
import April from './April';
import Generali from './Generali';
import SwissLife from './SwissLife';
import Tarif from './Tarif';
import Navbar from './Navbar';
import Footer from './Footer';
import Devis from './Devis.js';
import Pret from './Pret';
import Conso from './Conso.js';
import Rachat from './Rachat.js';
import Comparatif from './Comparatif';
import Courtier from './Courtier';
import MentionsLegales from './MentionsLegales';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route sensitive={false} path="/societe" element={<Societe />} />
        <Route sensitive={false} path="/AfiEurope" element={<AfiEurope />} />
        <Route sensitive={false} path="/Allianz" element={<Allianz />} />
        <Route sensitive={false} path="/Alptis" element={<Alptis />} />
        <Route sensitive={false} path="/April" element={<April />} />
        <Route sensitive={false} path="/Generali" element={<Generali />} />
        <Route sensitive={false} path="/SwissLife" element={<SwissLife />} />
        <Route sensitive={false} path="/Tarif" element={<Tarif />} />
        <Route sensitive={false} path="/Devis" element={<Devis />} />
        <Route sensitive={false} path="/Pret" element={<Pret />} />
        <Route sensitive={false} path="/Conso" element={<Conso />} />
        <Route sensitive={false} path="/Rachat" element={<Rachat />} />
        <Route sensitive={false} path="/Comparatif" element={<Comparatif />} />
        <Route sensitive={false} path="/Courtier" element={<Courtier />} />
        <Route sensitive={false} path="/Contact" element={<Contact />} />
        <Route sensitive={false} path="/MentionsLegales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>

  )
}

export default App;
