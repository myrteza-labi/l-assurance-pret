import React from 'react'; 
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'; 
import Logo from './home/Logo';
import logo from './images/logo.png'; 
import App from './App';
import CompagniesAssurances from './compagnies-assurances/CompagniesAssurances.js'
import Tarif from './tarif/Tarif';
import Devis from './devis/Devis';
import Courtier from './courtier/Courtier';


function Navbar(){
    return(
    <div className="Navbar">
    <Logo src={logo}/>
    
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>

    <ul className="menu">
      <Link className="menuLi" to="/" element={<App/>}>Accueil</Link>

      <Link className="menuLi" to="/comparatif/Comparatif" >Comparatif</Link>

      
      <Link className="menuLi" to="/courtier/Courtier" element={<Courtier/>}>Courtier</Link>

      <Link className="menuLi" to="/devis/Devis" element={<Devis/>} onClick={() => window.reload()}>Devis</Link>
      <Link className="menuLi" to="/compagnies-assurances/CompagniesAssurances" element={<CompagniesAssurances/>}>Société</Link>
      <Link className="menuLi" to="/tarif/Tarif" element={<Tarif/>}>Tarif</Link>
    </ul>
  </div>
    )
}

export default Navbar; 