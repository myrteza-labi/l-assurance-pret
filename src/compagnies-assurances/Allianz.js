import React from 'react'
import header from '../images/pexels-thisisengineering-3862603.jpg';
import HeaderImage from '../HeaderImage';
import allianz from '../images/logos-assurances/allianz-square.jpg';
import allianzBanner from '../images/allianz-banner.jpg';


function Allianz() {
  return (
    <div className="CompagniesAssurances">
      <HeaderImage src={allianzBanner} />
      <div className="CompagniesAssurancesTextContainer">
        <img className="logoPageAssureur" src={allianz} />
        <h1>Allianz assurance prêt : une référence mondiale</h1>
        <h2 className="CompagniesAssurancesTitle"> Comparez les produits Allianz assurance prêt : une référence mondiale</h2>
        <p className="CompagniesAssurancesParagraphe">
          Le groupe Allianz est l’un des leaders mondiaux de
          l’assurance, avec un chiffre d’affaires de 110,8 milliards
          d’euros en 2013, en augmentation de 2,7 % par rapport à 2012.
          En France, Allianz possède le deuxième plus vaste réseau avec
          2 530 points de vente répartis sur tout le territoire.
        </p>
        <h2 className="CompagniesAssurancesTitle">Allianz, un acteur majeur dans le domaine de l’assurance</h2>
        <p className="CompagniesAssurancesParagraphe">
          Allianz SE est une compagnie d’assurance fondée en 1891
          en Allemagne. En 1998, le groupe Allianz investit dans
          58 % du capital de l’assureur français AGF qui opère dans
          le secteur de l’assurance en France depuis sa création en
          1818. Il acquiert 100 % des actions AGF en 2007 et change
          de dénomination en 2009 pour devenir Allianz.
          Avec 11,5 milliards d’euros de chiffres d’affaires réalisés
          en 2012, Allianz France se positionne comme un acteur majeur
          du secteur de l’assurance. Ses 11 300 collaborateurs offrent
          à plus de 5 millions de clients composés de particuliers,
          d'entreprises et de professionnels des services d’assurance
          dans tous les domaines. Prévoyance, santé, retraite, dommage
          aux biens, responsabilité civile, assurance-vie,
          assurance automobile, assurance habitation, ou assistance
          font partie des garanties proposées par Allianz à sa clientèle.
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
        <h2 className="CompagniesAssurancesTitle">L’assurance emprunteur vue par Allianz
        </h2>
        <p className="CompagniesAssurancesParagraphe">
          Allianz assurance prêt est une offre adaptée aux
          besoins de l’emprunteur. Pour un crédit inférieur
          à 250 000 €, il suffit d’une déclaration de santé
          pour les personnes de moins de 45 ans pour bénéficier
          d’une assurance dont le tarif dépend étroitement de sa
          profession et de son âge. Si une analyse médicale
          complémentaire est indispensable ou si le montant à
          assurer excède les 250 000 €, Allianz propose à sa
          clientèle un service d’assistance téléphonique.
          En outre, l’assuré devient adhérent de l’association
          nationale de complément de retraite et d’épargne
          (ANCRE) qui le représente et souscrit le contrat
          pour son compte.
        </p>
      </div>
    </div>
  )
}

export default Allianz