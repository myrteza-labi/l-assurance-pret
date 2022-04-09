import React from 'react';
import './Footer.css';
import logowhite from './images/logo-white.png';
import Logo from './home/Logo';
import { HashLink } from 'react-router-hash-link';
import MentionsLegales from './mentions-legales/MentionsLegales';
import Comparatif from './comparatif/Comparatif';
import Courtier from './courtier/Courtier';
import Devis from './devis/Devis';
import Pret from './pret/Pret';
import CompagniesAssurances from './compagnies-assurances/CompagniesAssurances';
import Tarif from './tarif/Tarif';
import Contact from './contact/Contact';
import App from './App';

function Footer() {
    return (
        <footer className="Footer">
            <Logo className={"Logo Logofooter"}src={logowhite} />
            <div className="footerLinkSection">
                <div className="linkBlock" >
                    <ul>
                        <HashLink className="footerLink" to="/#" element={<App />}>Accueil</HashLink>
                        <HashLink className="footerLink" to="/comparatif/Comparatif#Comparatif" element={<Comparatif />}>Comparatif</HashLink>
                        <HashLink className="footerLink" to="/courtier/Courtier#Courtier" element={<Courtier />}>Courtier</HashLink>
                    </ul>
                </div>
                <div className="linkBlock" >
                    <HashLink className="footerLink" to="/devis/Devis#Devis" element={<Devis />} onClick={() => window.reload()}>Devis</HashLink>
                    <HashLink className="footerLink" to="/pret/Pret#Pret" element={<Pret />}>Pret</HashLink>
                    <HashLink className="footerLink" to="/compagnies-assurances/CompagniesAssurances#CompagniesAssurances" element={<CompagniesAssurances />}>Société</HashLink>
                </div>
                <div className="linkBlock" >
                    <HashLink className="footerLink" to="/tarif/Tarif#Tarif" element={<Tarif />}>Tarif</HashLink>
                    <HashLink className="footerLink" to="/Contact/Contact#Contact" element={<Contact />}>Contact</HashLink>
                    <HashLink className="footerLink" to="/mentions-legales/MentionsLegales#MentionsLegales" element={<MentionsLegales />}>Mentions légales</HashLink>
                </div>
            </div>
            <p className="copyright">Copyright © 2022 L'Assurance Prêt. Tout droits réservés.</p>
        </footer>
    )
}

export default Footer;