import React from 'react'
import './Pret.css'; 
import HeaderImage from '../HeaderImage';
import header from '../images/pexels-andrea-piacquadio-3760067.jpg'; 





function Pret() {
  return (

    <div id="Pret" className="CompagniesAssurances">

        <HeaderImage src={header} />

        <div className="CompagniesAssurancesTextContainer">
            <h1>Comprendre les subtilités d’un prêt immobilier</h1>
            <p className="CompagniesAssurancesParagraphe">
                Une personne qui souhaite acquérir un bien 
                immobilier est souvent contrainte à demander 
                le concours d’une banque ou d’un organisme de 
                crédit. En effet, le prix actuel de l’immobilier 
                dépasse souvent l’épargne de l’acheteur et 
                nécessite la recherche d’une autre source 
                de financement.
            </p>

            <h2 className="CompagniesAssurancesTitle">Qu’est-ce qu’un crédit immobilier ?</h2>
            <p className="CompagniesAssurancesParagraphe"> 
                Par opposition au crédit non affecté, 
                le prêt immobilier est un emprunt destiné 
                à financer l’acquisition d’un bien immobilier 
                ou d'un terrain pour sa construction. 
                L’entretien d’un immeuble, ainsi que son 
                amélioration ou les réparations peuvent 
                être considérées comme éligibles en tant 
                que crédit immobilier si leur montant 
                excède les 75 000 euros.
            </p>
            <p className="CompagniesAssurancesParagraphe">
                Il existe différents types de crédit 
                immobilier, cependant ils présentent 
                tous les mêmes caractéristiques. 
                Ainsi, avant de signer avec une banque, 
                il convient de comparer plusieurs offres 
                de prêt immobilier en tenant compte des 
                critères objectifs comme le taux effectif 
                global (TEG), la garantie, le taux nominal, 
                les frais de dossiers et l’assurance de crédit.
            </p>

            <h2 className="CompagniesAssurancesTitle">L’assurance de prêt pour un crédit immobilier</h2>
            <p className="CompagniesAssurancesParagraphe">
                L’assurance de prêt permet à l’emprunteur d’être 
                couvert face aux risques de non-paiement de ses 
                mensualités si un sinistre survient. Généralement, 
                l’établissement qui octroie le crédit immobilier 
                inclut dans son offre une assurance emprunteur. 
                Cependant, depuis la mise en application de la 
                loi Lagarde, la personne qui demande le crédit 
                peut la refuser et souscrire une assurance chez 
                un autre prestataire à condition que les garanties 
                couvertes soient identiques.
            </p>
            <p className="CompagniesAssurancesParagraphe">
                Il est important de bien comparer les différentes 
                offres d’assurance de prêt en sollicitant les 
                services d’un courtier en assurance qui se 
                charge de collecter et de présenter à l’emprunteur 
                les propositions les plus avantageuses.  
            </p>
        </div>
    </div>
  )
}

export default Pret; 

