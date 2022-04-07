import React from 'react';
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css';
import Logo from './home/Logo';
import logo from './images/logo.png';
import App from './App';
import CompagniesAssurances from './compagnies-assurances/CompagniesAssurances.js'
import Tarif from './tarif/Tarif';
import Devis from './devis/Devis';
import Courtier from './courtier/Courtier';
import Pret from './pret/Pret';
import PretConso from './pret/PretConso';
import PretRachat from './pret/PretRachat';
import AfiEurope from './compagnies-assurances/AfiEurope';
import Allianz from './compagnies-assurances/Allianz';
import Alptis from './compagnies-assurances/Alptis';
import April from './compagnies-assurances/April';
import Generali from './compagnies-assurances/Generali';
import SwissLife from './compagnies-assurances/SwissLife';

function Navbar() {
  return (
    <div className="Navbar">
      <Logo className={"Logo"}src={logo} />
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <ul className="menu">
        <li className="menuLi">
          <Link className="menuLink" to="/" element={<App />}>Accueil</Link>
        </li>
        <li className="menuLi">
          <Link className="menuLink" to="/comparatif/Comparatif" >Comparatif</Link>
        </li>
        <li className="menuLi">
          <Link className="menuLink" to="/courtier/Courtier" element={<Courtier />}>Courtier</Link>
        </li>
        <li className="menuLi">
          <Link className="menuLink" to="/devis/Devis" element={<Devis />} onClick={() => window.reload()}>Devis</Link>
        </li>
        <Dropdown className="DropDownButton">
          <Dropdown.Toggle variant="none">
            <li className="menuLi">
              <Link className="menuLink" to="/pret/Pret" element={<Pret />}>Pret</Link>
            </li>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <li className="menuLi">
              <Link className="menuLinkDropdown" to="/pret/PretConso" element={<PretConso />}>Conso</Link>
            </li>
            <li className="menuLi">
              <Link className="menuLinkDropdown" to="/pret/PretRachat" element={<PretRachat />}>Rachat</Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="DropDownButton">
          <Dropdown.Toggle variant="none">
            <li className="menuLi">
              <Link className="menuLink" to="/compagnies-assurances/CompagniesAssurances" element={<CompagniesAssurances />}>Société</Link>
            </li>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <li className="menuLi">
              <Link className="menuLinkDropdown" to="/compagnies-assurances/AfiEurope" element={<AfiEurope />}>AfiEurope</Link>
            </li>
            <li className="menuLi">
              <Link className="menuLinkDropdown" to="/compagnies-assurances/Allianz" element={<Allianz />}>Allianz</Link>
            </li>
            <li className="menuLi">
              <Link className="menuLinkDropdown" to="/compagnies-assurances/Alptis" element={<Alptis />}>Alptis</Link>
            </li>
            <li className="menuLi">
              <Link className="menuLinkDropdown" to="/compagnies-assurances/April" element={<April />}>April</Link>
            </li>
            <li className="menuLi">
              <Link className="menuLinkDropdown" to="/compagnies-assurances/Generali" element={<Generali />}>Generali</Link>
            </li>
            <li className="menuLi">
              <Link className="menuLinkDropdown" to="/compagnies-assurances/SwissLife" element={<SwissLife />}>SwissLife</Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <li className="menuLi">
          <Link className="menuLink" to="/tarif/Tarif" element={<Tarif />}>Tarif</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar; 