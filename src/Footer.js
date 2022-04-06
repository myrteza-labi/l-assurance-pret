import React from 'react'; 
import './Footer.css'; 
import logowhite from './images/logo-white.png'; 
import Logo from './home/Logo';

function Footer(){
    return(
        <footer className="Footer">
            <Logo src={logowhite}/>
            <div className="footerLinkSection">
                <div className="linkBlock" >
                    <ul>
                        <li>Accueil</li>
                        <li>Comparatif</li>
                        <li>Courtier</li>
                        <li>Prêt</li>
                        <li>Société</li>
                        <li>Tarif</li>
                    </ul>
                </div>
                <div className="linkBlock" >
                    <ul>
                        <li>Mentions légales</li>
                        <li>Conditions générales</li>
                        <li>Qui somme nous?</li>
                        <li>Notre services de comparaison</li>
                        <li>Nos services</li>
                    </ul>
                </div> 
                <div className="linkBlock" >
                    <ul>
                        <li>Contact</li>
                        <li>Actualités</li>
                        <li>Mutuelle santé</li>

                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright © 2022 Phenix Assurances. All Rights Reserved.</p>


        </footer>
    )
}

export default Footer; 