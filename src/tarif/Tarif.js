import React from 'react'
import {Link} from "react-router-dom"
import './Tarif.css'; 
import HeaderImage from '../HeaderImage';
import header from '../images/pexels-oleg-magni-2058137.jpg'; 


/*import AfiEurope from './AfiEurope';
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





<Link className="liAssurance" to="/compagnies-assurances/AfiEurope" element={<AfiEurope/>}><IconBox src={afieurope}/></Link>
                    <Link className="liAssurance" to="/compagnies-assurances/Allianz" element={<Allianz/>}><IconBox src={allianz}/></Link>
                    <Link className="liAssurance" to="/compagnies-assurances/Alptis" element={<Alptis/>}><IconBox src={alptis}/></Link>
                    <Link className="liAssurance" to="/compagnies-assurances/April" element={<April/>}><IconBox src={april}/></Link>
                    <Link className="liAssurance" to="/compagnies-assurances/Generali" element={<Generali/>}><IconBox src={generali}/></Link>
                    <Link className="liAssurance" to="/compagnies-assurances/SwissLife" element={<SwissLife/>}><IconBox src={swisslife}/></Link>
*/



function Tarif() {
  return (

    <div className="CompagniesAssurances">

        <HeaderImage src={header} />

        <div className="CompagniesAssurancesTextContainer">
            <h1>Comment trouver le meilleur tarif assurance prêt ?</h1>
            <p className="CompagniesAssurancesParagraphe">
                Aucune loi n’exige d’un candidat à un crédit immobilier 
                de souscrire une assurance de prêt. Cependant, 
                tous les organismes de crédit font de cette garantie 
                une condition sine qua non pour l’octroi d’un 
                emprunt immobilier.
            </p>

            <h2 className="CompagniesAssurancesTitle">Quel est le tarif d’une assurance emprunteur ?</h2>
            <p className="CompagniesAssurancesParagraphe"> 
                Le tarif d’une assurance de prêt dépend essentiellement
                 du profil de l’emprunteur et du niveau de couverture
                  qu’elle offre. Les banques et autres établissements 
                  de crédit présentent généralement une offre standard 
                  d’assurance de prêt. Depuis l'adoption de la loi Lagarde 
                  en 2010, chacun peut souscrire son assurance de prêt 
                  ailleurs que chez l’organisme prêteur, à condition de 
                  présenter les mêmes garanties que celles figurant dans 
                  l’assurance groupe.
            </p>
            <p className="CompagniesAssurancesParagraphe">
                Cette démarche est qualifiée de « délégation d’assurance ». 
                Elle permet à l’emprunteur de trouver une assurance de 
                crédit plus adaptée à son profil et souvent à un prix 
                plus avantageux. En effet, il existe une certaine 
                catégorie de personnes qui peut rencontrer des 
                ifficultés pour souscrire une assurance de prêt. 
                Cette liberté de choisir leur ouvre ainsi 
                de nouvelles opportunités.
            </p>

            <h2 className="CompagniesAssurancesTitle">Comment obtenir un bon tarif assurance prêt ?</h2>
            <p className="CompagniesAssurancesParagraphe">
                La délégation d’assurance permet de comparer les 
                offres des différentes compagnies par le biais 
                du simulateur d’un courtier. Après avoir fourni 
                les renseignements vous concernant, vous obtenez 
                en quelques clics les propositions les plus intéressantes. 
                Le recours à un courtier spécialisé en garantie assurance 
                constitue également un gain notable de temps et d’argent, 
                car c’est un professionnel dont l’expérience, la notoriété 
                et le savoir-faire vous permettent de bénéficier des 
                meilleures conditions, quel que soit votre profil.s.
            </p>
        </div>
    </div>
  )
}

export default Tarif; 

