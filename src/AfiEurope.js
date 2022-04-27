import React from 'react'
import header from './images/l-assurance-pret-pas-cher-devis-simulation.jpg';
import HeaderImage from './HeaderImage';
import afieurope from './images/logos-assurances/afieurope-square.jpg';
import afieuropeBanner from './images/afieurope-l-assurance-pret.jpg';


function AfiEurope() {
  return (
    <div className="Societe">
      <HeaderImage src={afieuropeBanner} />
      <div className="CompagniesAssurancesTextContainer">
        <img className="logoPageAssureur" src={afieurope} />
        <h1>Afi-Europe assurance prêt : une offre à la hauteur de toutes les attentes</h1>
        <h2 className="CompagniesAssurancesTitle">
          Comparez les produits Afi-Europe assurance prêt : une offre à la hauteur de toutes les attentes
        </h2>
        <p className="CompagniesAssurancesParagraphe">
          L’adoption de la loi sur la consommation Hamon par l’Assemblée
          nationale le 13 février 2014 permet à l’emprunteur de résilier
          son contrat d’assurance de prêt un an après la signature de celui-ci.
          Cette nouvelle réglementation vise à inciter les 79 % des candidats
          au crédit qui optent pour l’assurance de groupe à se tourner vers
          d’autres prestataires pour leur couverture.
        </p>
        <h2 className="CompagniesAssurancesTitle">Des garanties qui évoluent selon les besoins</h2>
        <p className="CompagniesAssurancesParagraphe">
          La délégation d’assurance est une assurance sur mesure,
          adaptée au profil de chaque emprunteur. Pérénim,
          la solution d’Afi-Europe assurance de prêt vous propose
          une combinaison de nombreuses garanties pour bénéficier
          d'une couverture personnalisée. Entre la formule la plus
          simple, à savoir décès et PTIA, et la formule la plus
          complète qui associe décès, PTIA, IPT, ITT et IPP, vous
          trouverez certainement celle qui correspond à vos besoins réels.
          En outre, cette assurance de prêt est plus large pour les
          limites d’âge. Ainsi, vous pouvez souscrire la garantie
          décès jusqu’à l’âge de 84 ans et la couverture s’éteint
          seulement lorsque vous atteignez 90 ans. Afi-Europe vous
          propose de surcroit des options supplémentaires comme
          l’« Extension Poursuite d’activité » ou les « Garanties minorées ».
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
        <h2 className="CompagniesAssurancesTitle">Une assurance fiable et reconnue</h2>
        <p className="CompagniesAssurancesParagraphe">
          Pérénim, le produit phare d’Afi-Europe assurance de prêt
          vient d’être récompensé par le Label d’excellence 2014
          décerné par la revue « Les Dossiers de l’Epargne ».
          Cela atteste de la qualité de couverture offerte par
          Pérénim et qui accompagne la politique de la compagnie
          qui garantit ses prestations tout le long de la durée
          du contrat. Créée à Lille en 1925, Afi Europe a été
          rachetée par Est Capitalisation (ESCA) à la Dresdner
          Bank en 2004. La fusion des deux sociétés en 2010 a donné
          naissance à Afi Esca, qui gère un actif de plus de 1,349
          milliard d’euros en 2010 et compte 270 collaborateurs.
        </p>
      </div>
    </div>
  )
}

export default AfiEurope