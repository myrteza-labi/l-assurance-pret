import React from 'react'
import { Link } from "react-router-dom"
import './Societe.css';
import AfiEurope from './AfiEurope';
import Allianz from './Allianz';
import Alptis from './Alptis';
import April from './April';
import Generali from './Generali';
import SwissLife from './SwissLife';
import IconBox from '../home/IconBox';
import allianz from '../images/logos-assurances/allianz.jpg';
import alptis from '../images/logos-assurances/alptis.jpg';
import april from '../images/logos-assurances/april.jpg';
import generali from '../images/logos-assurances/generali.jpg';
import swisslife from '../images/logos-assurances/swisslife.jpg';
import afieurope from '../images/logos-assurances/afieurope.jpg';
import header from '../images/pexels-thisisengineering-3862603.jpg';
import HeaderImage from '../HeaderImage';

function Societe() {
    return (
        <div id="Societe" className="Societe">
            <HeaderImage src={header} />
            <div className="CompagniesAssurancesTextContainer">
                <h1>Nos sociétés d'assurances partenaires</h1>
                <p className="CompagniesAssurancesParagraphe">
                    L’assurance emprunteur représente une part importante du coût d’un
                    crédit immobilier.
                    Trouvez l’offre la plus avantageuse tout en maintenant un niveau
                    de garantie équivalent à celui de la banque.
                </p>
            </div>
            <div className="listAndImageContainer" >
                <div className="assuranceListe" >
                    <div className="iconBoxCtn">
                        <Link className="liAssurance" to="/compagnies-assurances/AfiEurope" element={<AfiEurope />}><IconBox src={afieurope} /></Link>
                        <Link className="liAssurance" to="/compagnies-assurances/Allianz" element={<Allianz />}><IconBox src={allianz} /></Link>
                        <Link className="liAssurance" to="/compagnies-assurances/Alptis" element={<Alptis />}><IconBox src={alptis} /></Link>
                        <Link className="liAssurance" to="/compagnies-assurances/April" element={<April />}><IconBox src={april} /></Link>
                        <Link className="liAssurance" to="/compagnies-assurances/Generali" element={<Generali />}><IconBox src={generali} /></Link>
                        <Link className="liAssurance" to="/compagnies-assurances/SwissLife" element={<SwissLife />}><IconBox src={swisslife} /></Link>
                    </div>
                </div>
            </div>
            <div className="CompagniesAssurancesTextContainer">
                <h2 className="CompagniesAssurancesTitle">Pourquoi s’adresser à une société assurance prêt ?</h2>
                <p className="CompagniesAssurancesParagraphe">
                    Elle peut atteindre jusqu’à 20 % de celui-ci.
                    Il convient par conséquent de faire jouer la concurrence et de se
                    tourner vers une société assurance prêt performante.
                </p>
                <h2 className="CompagniesAssurancesTitle">Une alternative à l’assurance de groupe</h2>
                <p className="CompagniesAssurancesParagraphe">
                    La société assurance prêt constitue une alternative à l’assurance
                    de groupe proposée par l’organisme prêteur.
                    C’est ce que les spécialistes appellent la délégation d’assurance.
                    La loi Lagarde autorise depuis 2010 le demandeur de crédit à
                    choisir l’assurance emprunteur adaptée à son profil.
                    Dans sa quête, il peut s’adresser aux compagnies d’assurance
                    ou se tourner vers un courtier qui va servir d’intermédiaire
                    entre lui et les assureurs.
                </p>
                <p className="CompagniesAssurancesParagraphe">
                    La délégation d’assurance lui offre une couverture
                    sur mesure et spécifique à son profil.
                    Les fumeurs, les jeunes emprunteurs, les personnes
                    exerçant une profession à risque ou celles qui
                    pratiquent un sport extrême, les emprunteurs seniors,
                    ainsi que les individus présentant un risque aggravé
                    de maladie peuvent ainsi bénéficier d’une couverture
                    optimale grâce à la société d’assurance de prêt.
                </p>
                <h2 className="CompagniesAssurancesTitle">Gain de temps et économie</h2>
                <p className="CompagniesAssurancesParagraphe">
                    La délégation d’assurance permet au candidat au crédit
                    d’obtenir une assurance de prêt à moindre coût. En effet,
                    la société d’assurance de prêt dispose généralement d’un
                    large éventail de produits qui peuvent répondre à ses attentes.
                    Dans le cas contraire, ce prestataire est en mesure de négocier
                    avec les autres compagnies d’assurance afin de réduire le prix de
                    l’assurance emprunteur. Le gain de temps est également appréciable
                    puisque cette solution dispense de passer d’une compagnie
                    à une autre pour trouver les conditions les plus compétitives.
                </p>
            </div>
        </div>
    )
}

export default Societe;

