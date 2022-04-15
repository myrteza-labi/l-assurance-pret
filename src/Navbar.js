import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from './home/Logo';
import logo from './images/logo.png';
import App from './App';
import Comparatif from './comparatif/Comparatif';
import Pret from './pret/Pret';
import Conso from './pret/Conso';
import Rachat from './pret/Rachat';
import Courtier from './courtier/Courtier';
import Devis from './devis/Devis';
import Societe from './compagnies-assurances/Societe';
import AfiEurope from './compagnies-assurances/AfiEurope';
import Allianz from './compagnies-assurances/Allianz';
import Alptis from './compagnies-assurances/Alptis';
import April from './compagnies-assurances/April';
import Generali from './compagnies-assurances/Generali';
import SwissLife from './compagnies-assurances/SwissLife';
import Tarif from './tarif/Tarif';






const Navbar = (props) => {

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {

    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
};

  let boxClass = ["main-menu menu-right menuq1"];
  if(isMenu) {
      boxClass.push('menuq2');
  }else{
      boxClass.push('');
  }

  const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);
  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);

  const toggleSubmenu1 = (e) => {
      setMenuSubMenu1(isMenuSubMenu1 === false ? true : false);

      };

      const toggleSubmenu2 = (e) => {
        setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
  
        };

      let boxClassSubMenu1 = ["sub__menus"];
      let boxClassSubMenu2 = ["sub__menus"];

  if(isMenuSubMenu1 == true) {
      boxClassSubMenu1.push('sub__menus__Active');
  } else if(isMenuSubMenu2 === true) {
      boxClassSubMenu2.push('sub__menus__Active');
  } else if(isMenuSubMenu1 == false){
      boxClassSubMenu1.push('');
  } else if(isMenuSubMenu2 == false){
      boxClassSubMenu2.push('');
  }


 


  return (
      <div className="Navbar">
            <Logo className={"Logo"} src={logo} />
            <nav className="main-nav " >
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? <>
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
              </> : <>
                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
              </>}
              <ul className={boxClass.join(' ')}>
                <li className="menu-item">
                  <Link  activeclassname='is-active' onClick={toggleClass} to={`/`} element={<App />}> Accueil </Link>
                </li>
                <li className="menu-item">
                  <Link  activeclassname='is-active' onClick={toggleClass} to="/comparatif/Comparatif" element={<Comparatif />}> Comparatif </Link>
                </li>
                <li className="menu-item">
                  <Link  activeclassname='is-active' onClick={toggleClass} to="/courtier/Courtier" element={<Courtier />}> Courtier </Link>
                </li>
                <li className="menu-item">
                  <Link activeclassname='is-active' onClick={toggleClass} to="/devis/Devis" element={<Devis />}> Devis </Link>
                </li>
                <li onClick={toggleSubmenu1} className="menu-item sub__menus__arrows" >
                  <Link to="/pret/Pret" element={<Pret />}>Pret</Link>
                  <ul className={boxClassSubMenu1.join(' ')} >
                    <li> <Link onClick={toggleClass} activeclassname='is-active' to={`/pret/Conso`} element={<Conso />}> Prêt Conso</Link> </li>
                    <li> <Link onClick={toggleClass} activeclassname='is-active' to={`/pret/Rachat`} element={<Rachat />}> Prêt Rachat</Link> </li>
                  </ul>
                </li>
                <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" >
                  <Link to="/compagnies-assurances/Societe" element={<Societe />}>Société</Link>
                  <ul className={boxClassSubMenu2.join(' ')} >
                    <li>
                      <Link onClick={toggleClass} activeclassname='is-active' to="/compagnies-assurances/AfiEurope" element={<AfiEurope />}>AfiEurope</Link>
                    </li>
                    <li>
                      <Link onClick={toggleClass} activeclassname='is-active' to="/compagnies-assurances/Allianz" element={<Allianz />}>Allianz</Link>
                    </li>
                    <li>
                      <Link onClick={toggleClass} activeclassname='is-active' to="/compagnies-assurances/Alptis" element={<Alptis />}>Alptis</Link>
                    </li>
                    <li>
                      <Link onClick={toggleClass} activeclassname='is-active' to="/compagnies-assurances/April" element={<April />}>April</Link>
                    </li><li>
                      <Link onClick={toggleClass} activeclassname='is-active' to="/compagnies-assurances/Generali" element={<Generali />}>Generali</Link>
                    </li><li>
                      <Link onClick={toggleClass} activeclassname='is-active' to="/compagnies-assurances/SwissLife" element={<SwissLife />}>SwissLife</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link activeclassname='is-active' onClick={toggleClass} to="/tarif/Tarif" element={<Tarif />}>Tarif</Link>
                </li>

                    </ul>
            </nav>
      </div>
  )
}

export default Navbar;





/*

<li id="li1"  onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Shop  </Link>
                        <ul className={boxClassSubMenu1.join(' ')} > 
                            <li id="li3"> <Link onClick={toggleClass} activeclassname='is-active'  to={`/Online`}> Online Shop </Link> </li>
                            <li id="li4"><Link onClick={toggleClass} activeclassname='is-active' to={`/Offline`}> Offline Shop </Link> </li>
                        </ul>
                    </li>
                    <li  className="menu-item" >
                        <Link exact activeclassname='is-active' onClick={toggleClass} to={`/`}> Home </Link> 
                    </li>
                    <li className="menu-item " ><Link onClick={toggleClass} activeclassname='is-active' to={`/About`}> About </Link> </li>
                    <li id="li2" onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Shop  </Link>
                        <ul className={boxClassSubMenu2.join(' ')} > 
                            <li id="li5"> <Link onClick={toggleClass} activeclassname='is-active'  to={`/Online`}> Online Shop </Link> </li>
                            <li id="li6"><Link onClick={toggleClass} activeclassname='is-active' to={`/Offline`}> Offline Shop </Link> </li>
                        </ul>
                    </li>

                    <li className="menu-item " ><Link onClick={toggleClass} activeclassname='is-active' to={`/Contact`}> Contact </Link> </li>











              

*/