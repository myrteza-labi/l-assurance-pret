import React from 'react'; 
import {Link} from "react-router-dom"
import './Navbar.css'; 
import Logo from './Logo';
import logo from './images/logo.png'; 
import App from './App';
import AfiEurope from './AfiEurope.js'



function Navbar(){
    return(
    <div className="Navbar">
    <Logo src={logo}/>
    
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>

    <ul className="menu">
      <Link to="/" element={<App/>}>Accueil</Link>
      <Link to="/AfiEurope" element={<AfiEurope/>}>AfiEurope</Link>

      <li className="menuLi">Acceuil</li>
      <li className="menuLi">Comparatif</li>
      <li className="menuLi">Courtier</li>
      <li className="menuLi">Devis</li>
      <li className="menuLi">Société</li>
      <li className="menuLi">Tarif</li>
    </ul>
  </div>
    )
}

export default Navbar; 