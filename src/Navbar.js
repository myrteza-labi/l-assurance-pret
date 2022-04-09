import React, { useState } from 'react';
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from './home/Logo';
import logo from './images/logo.png';
import App from './App';
import Comparatif from './comparatif/Comparatif';
import Pret from './pret/Pret';
import PretConso from './pret/PretConso';
import PretRachat from './pret/PretRachat';
import Courtier from './courtier/Courtier';
import Devis from './devis/Devis';
import CompagniesAssurances from './compagnies-assurances/CompagniesAssurances';
import AfiEurope from './compagnies-assurances/AfiEurope';
import Allianz from './compagnies-assurances/Allianz';
import Alptis from './compagnies-assurances/Alptis';
import April from './compagnies-assurances/April';
import Generali from './compagnies-assurances/Generali';
import SwissLife from './compagnies-assurances/SwissLife';
import Tarif from './tarif/Tarif';


function Navbar() {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  const devis = () => {
    toggleClass();
    window.reload();
  }

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header__middle__logo">
            <Logo className={"Logo"} src={logo} />
          </div>
          <div className="header__middle__menus">
            <nav className="main-nav " >
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? <>
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
              </> : <>
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
              </>}
              <ul className={boxClass.join(' ')}>
                <li className="menu-item">
                  <Link exact activeClassName='is-active' onClick={toggleClass} to={`/`} element={<App />}> Accueil </Link>
                </li>
                <li className="menu-item">
                  <Link exact activeClassName='is-active' onClick={toggleClass} to="/comparatif/Comparatif" element={<Comparatif />}> Comparatif </Link>
                </li>
                <li className="menu-item">
                  <Link exact activeClassName='is-active' onClick={toggleClass} to="/courtier/Courtier" element={<Courtier />}> Courtier </Link>
                </li>
                <li className="menu-item">
                  <Link exact activeClassName='is-active' onClick={devis} to="/devis/Devis" element={<Devis />}> Devis </Link>
                </li>
                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                  <Link to="/pret/Pret" element={<Pret />}>Pret</Link>
                  <ul className={boxClassSubMenu.join(' ')} >
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to={`/pret/PretConso`} element={<PretConso />}> Prêt conso</Link> </li>
                    <li> <Link onClick={toggleClass} activeClassName='is-active' to={`/pret/PretRachat`} element={<PretRachat />}> Prêt Rachat</Link> </li>
                  </ul>
                </li>
                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                  <Link to="/compagnies-assurances/CompagniesAssurances" element={<CompagniesAssurances />}>Société</Link>
                  <ul className={boxClassSubMenu.join(' ')} >
                    <li>
                      <Link onClick={toggleClass} activeClassName='is-active' to="/compagnies-assurances/AfiEurope" element={<AfiEurope />}>AfiEurope</Link>
                    </li>
                    <li>
                      <Link onClick={toggleClass} activeClassName='is-active' to="/compagnies-assurances/Allianz" element={<Allianz />}>Allianz</Link>
                    </li>
                    <li>
                      <Link onClick={toggleClass} activeClassName='is-active' to="/compagnies-assurances/Alptis" element={<Alptis />}>Alptis</Link>
                    </li>
                    <li>
                      <Link onClick={toggleClass} activeClassName='is-active' to="/compagnies-assurances/April" element={<April />}>April</Link>
                    </li><li>
                      <Link onClick={toggleClass} activeClassName='is-active' to="/compagnies-assurances/Generali" element={<Generali />}>Generali</Link>
                    </li><li>
                      <Link onClick={toggleClass} activeClassName='is-active' to="/compagnies-assurances/SwissLife" element={<SwissLife />}>SwissLife</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link exact activeClassName='is-active' onClick={devis} to="/tarif/Tarif" element={<Tarif />}>Tarif</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;





