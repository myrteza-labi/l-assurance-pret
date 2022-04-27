import React from 'react'
import header from './images/l-assurance-pret-pas-cher-devis-simulation.jpg';
import HeaderImage from './HeaderImage';
import alptis from './images/logos-assurances/alptis-square.jpg';

function Alptis() {
  return (
    <div className="Societe">
      <HeaderImage src={header} />
      <div className="CompagniesAssurancesTextContainer">
        <img className="logoPageAssureur" src={alptis} />
        <h1>Alptis assurance prêt : pour une assurance équitable</h1>
        <h2 className="CompagniesAssurancesTitle">Comparez les produits Alptis assurance prêt : pour une assurance équitable</h2>
        <p className="CompagniesAssurancesParagraphe">
          Depuis septembre 2010, la loi Lagarde vous permet
          d’opter pour une assurance de prêt autre que celle
          de la banque, à condition que les couvertures proposées
          soient au moins équivalentes à celles proposées dans votre
          contrat de crédit immobilier. Toutefois, le candidat à
          l’emprunt doit être assez diligent pour trouver la garantie
          emprunteur optimale correspondant à ses besoins.
        </p>
        <h2 className="CompagniesAssurancesTitle">L’assurance de prêt Alptis
        </h2>
        <p className="CompagniesAssurancesParagraphe">
          L’offre Alptis assurance prêt se base sur le concept
          d’assurance équitable. Avec la solution Paréo, les candidats
          à l’emprunt pourront réaliser jusqu’à 60 % d’économie.
          Les prix appliqués demeurent inchangés toute la durée du prêt,
          sachant que les non-fumeurs et les co-emprunteurs bénéficient
          de tarifs préférentiels. Pour les professions à risque,
          des formules d’assurance sur mesure leur sont destinées
          afin de mieux répondre à leurs besoins.
        </p>
        <p className="CompagniesAssurancesParagraphe">
          Paréo V5 propose
          des tarifs avantageux pour les cadres. En cas d’IPT,
          la totalité du capital restant dû est remboursée.
          Pour une ITT, l’assuré peut opter pour la période
          de franchise de son choix. Outre les garanties de base,
          l’assurance perte d’emploi confère en option une protection
          chômage très intéressante. Dans les garanties optionnelles,
          l’option revente couvre contre une éventuelle moins-value
          lors de la mise du bien sur le marché. Pour bénéficier de
          la protection Alptis, les personnes âgées d’au plus 49 ans
          doivent juste procéder à une déclaration de santé si elles
          empruntent un montant n’excédant pas 230 000 €..
        </p>
        <h2 className="CompagniesAssurancesTitle">Alptis, une compagnie bien établie</h2>
        <p className="CompagniesAssurancesParagraphe">
          Un véritable concurrent sur le marché de l’assurance,
          Alptis (Association Lyonnaise de Prévoyance des Travailleurs
          indépendants) a été fondée à Lyon en 1976 par des travailleurs
          indépendants. D’abord spécialisée dans la prévoyance santé
          à l’endroit des commerçants et travailleurs non salariés,
          l’association s’est ensuite diversifiée vers les produits
          d’assurance comme l’assurance de prêt et les complémentaires
          retraites. Forte d’une implantation dans toute l’Hexagone depuis
          les années 80, Alptis assure aujourd’hui la gestion de près
          de 600 000 contrats de ses 300 000 assurés- adhérents.
        </p>
      </div>
    </div>
  )
}

export default Alptis; 