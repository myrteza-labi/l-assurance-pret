import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import Home from './home/Home.js'; 
import CompagniesAssurances from './compagnies-assurances/CompagniesAssurances';
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
import PretConso from './pret/PretConso.js';
import PretRachat from './pret/PretRachat.js';
import Comparatif from './comparatif/Comparatif';
import Courtier from './courtier/Courtier';

/*import IntroBox from './IntroBox';
import ThemeBox from './ThemeBox';
import MainImage from './MainImage';
import TextBox from './TextBox';
import SimpleTextBox from './SimpleTextBox';
import StarBox from './StarBox';
import ListBox from './ListBox';
import IconBox from './IconBox';
import logoInsurance from './images/insurance.png'; 
import logoHome from './images/home.png'; 
import ag2r from './images/logos-assurances/ag2r.jpg'; 
import agpm from './images/logos-assurances/agpm.jpg'; 
import allianz from './images/logos-assurances/allianz.jpg'; 
import alptis from './images/logos-assurances/alptis.jpg'; 
import aprep from './images/logos-assurances/aprep.jpg'; 
import april from './images/logos-assurances/april.jpg'; 
import covea from './images/logos-assurances/covea.jpg'; 
import generali from './images/logos-assurances/generali.jpg'; 
import premium from './images/logos-assurances/premium.jpg'; 
import spheriavie from './images/logos-assurances/spheriavie.jpg'; 
import swisslife from './images/logos-assurances/swisslife.jpg'; 
import televie from './images/logos-assurances/televie.jpg'; 
import afieurope from './images/logos-assurances/afieurope.jpg'; 
import ugip from './images/logos-assurances/ugip.jpg'; 
import unim from './images/logos-assurances/unim.jpg'; 
import houseimage from './images/house.jpg'
import compareImg from './images/compare.jpg'
import ItemsSection from './ItemsSection'; 
import independanceLogo from './images/icon-step/independance.png'
import comparaisonLogo from './images/icon-step/comparaison.png'
import comparaison2Logo from './images/icon-step/comparaison2.png'
import conseilLogo from './images/icon-step/conseil.png'
import rapideLogo from './images/icon-step/rapide.png'
import handchekLogo from './images/icon-step/handchek.png'
import profilLogo from './images/icon-step/profil.png'
import projetLogo from './images/icon-step/projet.png'
import courtier from './images/pexels-moose-photos-1586996.jpg'; 
import creditImmo from './images/pexels-alexandr-podvalny-7599735.jpg'; 
import creditImmo2 from './images/pexels-will-mu-3802666.jpg'; 
import AfiEurope from './AfiEurope';
*/


/*
  STARBOX

        <div className="starBoxList">
          <StarBox/>
          <ListBox/>
          <ListBox/>
        </div>


*/ 








function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/compagnies-assurances/CompagniesAssurances" element={<CompagniesAssurances/>}/>
        <Route path="/compagnies-assurances/AfiEurope" element={<AfiEurope/>}/>
        <Route path="/compagnies-assurances/Allianz" element={<Allianz/>}/>
        <Route path="/compagnies-assurances/Alptis" element={<Alptis/>}/>
        <Route path="/compagnies-assurances/April" element={<April/>}/>
        <Route path="/compagnies-assurances/Generali" element={<Generali/>}/>
        <Route path="/compagnies-assurances/SwissLife" element={<SwissLife/>}/>
        <Route path="/tarif/Tarif" element={<Tarif/>}/>
        <Route path="/devis/Devis" element={<Devis/>}/>
        <Route path="/pret/Pret" element={<Pret/>}/>

        <Route path="/pret/PretConso" element={<PretConso/>}/>
        <Route path="/pret/PretRachat" element={<PretRachat/>}/>
        <Route path="/comparatif/Comparatif" element={<Comparatif/>}/>
        <Route path="/courtier/Courtier" element={<Courtier/>}/>


        
        

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
