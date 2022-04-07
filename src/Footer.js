import React from 'react'; 
import './Footer.css'; 
import logowhite from './images/logo-white.png'; 
import Logo from './home/Logo';
import {Link} from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

import MentionsLegales from './mentions-legales/MentionsLegales';
import Home from './home/Home';
import Comparatif from './comparatif/Comparatif';
import Courtier from './courtier/Courtier';
import Devis from './devis/Devis';
import Pret from './pret/Pret';
import CompagniesAssurances from './compagnies-assurances/CompagniesAssurances'; 
import Tarif from './tarif/Tarif'; 
import Contact from './contact/Contact';


function Footer(){
    return(
        <footer className="Footer">
            <Logo src={logowhite}/>
            <div className="footerLinkSection">
                <div className="linkBlock" >
                    <ul>
                            <li className="menuLi">
                                <HashLink className="menuLi" to="/#App" element={<Home/>}>Accueil</HashLink>
                            </li>

                            <li className="menuLi">
                                <HashLink className="menuLi" to="/comparatif/Comparatif#Comparatif" element={<Comparatif/>}>Comparatif</HashLink>
                            </li>

                            <li className="menuLi">
                                <HashLink className="menuLi" to="/courtier/Courtier#Courtier" element={<Courtier/>}>Courtier</HashLink>
                            </li>


                        </ul>

                </div>
                <div className="linkBlock" >
                    <ul>

                            <li className="menuLi">
                                <HashLink className="menuLi" to="/devis/Devis#Devis" element={<Devis/>}>Devis</HashLink>
                            </li>
                            <li className="menuLi">
                                <HashLink className="menuLi" to="/pret/Pret#Pret" element={<Pret/>}>Pret</HashLink>
                            </li>

                            <li className="menuLi">
                                <HashLink className="menuLi" to="/compagnies-assurances/CompagniesAssurances#CompagniesAssurances" element={<CompagniesAssurances/>}>Société</HashLink>
                            </li>
                        </ul>

                </div>
                <div className="linkBlock" >
                <ul>


                            <li className="menuLi">
                                <HashLink className="menuLi" to="/tarif/Tarif#Tarif" element={<Tarif/>}>Tarif</HashLink>
                            </li>
                            <li className="menuLi">
                                <HashLink to="/Contact/Contact#Contact" element={<Contact/>}>Contact</HashLink>
                            </li>
                            <li className="menuLi">
                                <HashLink to="/mentions-legales/MentionsLegales#MentionsLegales" element={<MentionsLegales/>}>Mentions légales</HashLink>
                            </li>
                        </ul>
                </div> 
               
            </div>
            <p className="copyright">Copyright © 2022 L'Assurance Prêt. Tout droits réservés.</p>

 
        </footer>
    )
}

export default Footer; 

/**
 * 
 * 
 * 
 * 
 *  <div className="linkBlock" >
                    <ul>
                    <li className="menuLi">Test</li>
                        <li>Actualités</li>
                        <li>Mutuelle santé</li>

                    </ul>
                </div>
 */