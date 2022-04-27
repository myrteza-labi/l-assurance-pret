import React from 'react'
import header from './images/l-assurance-pret-pas-cher-devis-simulation.jpg';
import HeaderImage from './HeaderImage';
import april from './images/logos-assurances/april-square.jpg';


function April() {
  return (
    <div className="Societe">
      <HeaderImage src={header} />
      <div className="CompagniesAssurancesTextContainer">
        <img className="logoPageAssureur" src={april} />
        <h1>April assurance de prêt : qu’est-ce qui fait la différence ?</h1>
        <h2 className="CompagniesAssurancesTitle">Comparez les produits April assurance de prêt : qu’est-ce qui fait la différence ?</h2>
        <p className="CompagniesAssurancesParagraphe">
          Pour couvrir le risque de non-paiement des mensualités
          liées à un crédit immobilier, les organismes exigent
          souvent la souscription d’une assurance de prêt. Grâce
          à l’assureur April, ils peuvent obtenir une garantie
          optimale pour un coût total moindre.
        </p>
        <h2 className="CompagniesAssurancesTitle">Focus sur le groupe April</h2>
        <p className="CompagniesAssurancesParagraphe">
          Actif dans le domaine de l’assurance depuis 1988,
          le groupe April propose une large variété de solutions
          d’assurances destinées aussi bien aux particuliers
          qu’aux entreprises, aux professionnels ou aux collectivités.
          Il a ouvert des bureaux dans 43 pays, où travaillent plus
          de 4 000 collaborateurs qui cherchent en permanence à offrir
          une couverture optimale à ses 6 millions d’assurés grâce à
          une politique qui conditionne ses processus d’innovation
          et son organisation.
        </p>
        <p className="CompagniesAssurancesParagraphe">
          Cela pourrait expliquer le chiffre d’affaires
          réalisé par le groupe April  en 2013 qui atteint
          778,6 millions d’euros, pour un résultat net annuel
          de 51 millions d’euros. Sa large gamme de contrats
          d’assurance permet à ses collaborateurs de conseiller
          chaque client sur l’assurance la plus adaptée à son profil.
        </p>
        <h2 className="CompagniesAssurancesTitle">April et l’assurance de prêt</h2>
        <p className="CompagniesAssurancesParagraphe">
          L’April assurance prêt s’adresse à tous puisqu’elle
          offre une couverture optimale pour les emprunteurs
          âgés de 18 à 80 ans. Cette assurance emprunteur
          innovante prévoit de nombreux avantages pour le
          débiteur comme une indemnisation forfaitaire et
          des garanties irrévocables. Dans le premier cas,
          le remboursement des mensualités est effectué même
          si les revenus de l’assuré ne baissent pas. Dans la
          seconde option, le changement de situation de l’assuré
          n’affecte pas les conditions de garantie, une fois
          le contrat signé. Il en est de même pour le tarif
          qui reste invariable toute la durée de vie du contrat.
        </p>
      </div>
    </div>
  )
}

export default April; 