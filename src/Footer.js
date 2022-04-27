import React from 'react';
import './Footer.css';
import logowhite from './images/logo-blanc-l-assurance-pret.png';
import Logo from './home/Logo';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import MentionsLegales from './MentionsLegales';
import Comparatif from './Comparatif';
import Courtier from './Courtier';
import Devis from './Devis';
import Pret from './Pret';
import Societe from './Societe';
import Tarif from './Tarif';
import Contact from './Contact';
import App from './App';

function Footer() {
    return (
        <footer className="Footer">
            <Logo className={"Logo Logofooter"}src={logowhite} />
            <div className="footerLinkSection">
                <div className="linkBlock" >
                    <ul>
                        <Link className="footerLink" to="/" element={<App />}>Accueil</Link>
                        <Link className="footerLink" to="/comparatif" element={<Comparatif />}>Comparatif</Link>
                        <Link className="footerLink" to="/courtier" element={<Courtier />}>Courtier</Link>
                    </ul>
                </div>
                <div className="linkBlock" >
                    <Link className="footerLink" to="/devis" element={<Devis />} onClick={() => window.reload()}>Devis</Link>
                    <Link className="footerLink" to="/pret" element={<Pret />}>Pret</Link>
                    <Link className="footerLink" to="/societe" element={<Societe />}>Société</Link>
                </div>
                <div className="linkBlock" >
                    <Link className="footerLink" to="/tarif" element={<Tarif />}>Tarif</Link>
                    <Link className="footerLink" to="/contact" element={<Contact />}>Contact</Link>
                    <Link className="footerLink" to="/mentionsLegales" element={<MentionsLegales />}>Mentions légales</Link>
                </div>
            </div>
            <p className="copyright">Copyright © 2022 L'Assurance Prêt. Tout droits réservés.</p>
        </footer>
    )
}

export default Footer;