import React from 'react'
import header from '../images/pexels-thisisengineering-3862603.jpg';
import HeaderImage from '../HeaderImage';
import generali from '../images/logos-assurances/generali-square.jpg';

function Generali() {
  return (
    <div className="CompagniesAssurances">
      <HeaderImage src={header} />
      <div className="CompagniesAssurancesTextContainer">
        <img className="logoPageAssureur" src={generali} />
        <h1>Generali assurance prêt : des formules souples pour chaque besoin</h1>
        <h2 className="CompagniesAssurancesTitle">Comparez les produits Generali assurance prêt : des formules souples pour chaque besoin</h2>
        <p className="CompagniesAssurancesParagraphe">
          Generali figure en bonne position parmi les compagnies
          d’assurance en France. Avec 80 000 salariés,
          dont 7 000 en France, le Groupe Generali est un géant
          de l’assurance dont il est le leader en Europe
          dans le domaine de l’assurance-vie.
        </p>
        <h2 className="CompagniesAssurancesTitle">Generali : historique et chiffres-clés</h2>
        <p className="CompagniesAssurancesParagraphe">
          Compagnie d’assurance créée à Trieste en 1831,
          Generali arrive en France en 1832. En 2006,
          toutes les marques du groupe Generali en France
          fusionnent et adoptent l’appellation unique Generali.
          En chiffres d’affaires, Generali France représente
          le troisième marché du groupe, après l’Italie et l’Allemagne.
          Il réaliser un CA de 13,8 milliards d’euros pour l’année 2012.
          Environ 3 millions d’assurés et près de 800 000 entreprises
          et professionnels bénéficient de la couverture offerte par
          Generali France dans tous les domaines de la vie.
        </p>
        <h2 className="CompagniesAssurancesTitle">Les différentes offres de Generali</h2>
        <p className="CompagniesAssurancesParagraphe">
          Deuxième assureur généraliste en France depuis 2005,
          Generali dispose d’un vaste catalogue de produits
          pour satisfaire tous les besoins de sa clientèle
          en assurance. Generali est particulièrement active
          dans le domaine de l’assurance de personnes,
          à savoir la santé, l’épargne, la retraite, l’incapacité,
          l’invalidité, le décès, les accidents de la vie et la dépendance.
        </p>
        <p className="CompagniesAssurancesParagraphe">
          À travers sa filiale Europ Assistance,
          Generali œuvre dans le secteur de l’assistance,
          qu’il s’agisse de voyage, santé, automobile ou vie
          quotidienne. Enfin, l’expérience de Generali est
          grande dans les assurances de responsabilité et de
          biens comme l’habitation, l’automobile, les risques
          d’entreprise, la responsabilité civile ou les
          locaux commerciaux.
        </p>
        <h2 className="CompagniesAssurancesTitle">Generali et assurance emprunteur</h2>
        <p className="CompagniesAssurancesParagraphe">
          Generali assurance prêt présente 2 formules pour ses clients.
          La formule « standard »s’adresse aux individus de 18 à 84 ans
          pour assurer un capital supérieur à 20 000 €. Quant à la formule
          « essentiel », elle est destinée aux personnes de 18 à 64 ans qui
          envisagent de garantir un capital compris entre 20 000 € et
          500 000 €. Pour ceux qui souhaitent bénéficier d’une couverture
          adaptée à leur profil, Generali propose son assurance Novità Emprunteur..
        </p>
      </div>
    </div>
  )
}

export default Generali; 