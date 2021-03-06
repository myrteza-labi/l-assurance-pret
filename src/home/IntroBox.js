import React from 'react';
import './IntroBox.css';
import { Link } from "react-router-dom"
import Contact from '../Contact';
import Devis from '../Devis';

function IntroBox() {
    return (
        <div className="IntroBox">
            <h2 className="introBoxTitle">Nous somme L'Assurance Prêt</h2>
            <p className="introBoxParagraphe">
                Nous comparons les offres de nos partenaires
                pour vous propose une assurance adapté à 
                vos besoins au meilleur prix.
            </p>
            <div className="introBoxBtnCtn">
                <Link className="menuLink" to="/Contact" element={<Contact />}>
                    <button className="introBoxButton empty">Nous contacter</button>
                </Link>
                <Link className="menuLink" to="Devis" element={<Devis />}onClick={() => window.reload()}>
                    <button className="introBoxButton full" >Devis gratuit</button>
                </Link>
            </div>

        </div>
    )
}

export default IntroBox; 