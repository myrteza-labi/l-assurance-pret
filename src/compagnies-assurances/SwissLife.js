import React from 'react'
import header from '../images/pexels-thisisengineering-3862603.jpg';
import HeaderImage from '../HeaderImage';
import swisslife from '../images/logos-assurances/swisslife-square.jpg';


function SwissLife() {
  return (
    <div className="Societe">
      <HeaderImage src={header} />
      <div className="CompagniesAssurancesTextContainer">
        <img className="logoPageAssureur" src={swisslife} />
        <h1>Swiss-life assurance prêt, une garantie ouverte aux professionnels et particuliers</h1>
        <h2 className="CompagniesAssurancesTitle">
          Comparez les produits Swiss-life assurance prêt,
          une garantie ouverte aux professionnels et particuliers
        </h2>
        <p className="CompagniesAssurancesParagraphe">
          La Swiss-life assurance prêt apporte une protection
          aux particuliers qui ont souscrit un crédit afin de
          concrétiser leurs projets immobiliers. Elle s'adresse
          également aux professionnels qui ont dû recourir à un
          emprunt pour acquérir des biens d'équipement..
        </p>
        <h2 className="CompagniesAssurancesTitle">Swiss-life assurance prêt : souple et innovante</h2>
        <p className="CompagniesAssurancesParagraphe">
          La Suiss-life est une compagnie suisse fondée en 1857.
          Elle s'est spécialisée sur le territoire européen
          en matière d'assurance vie, de retraite et de prévoyance.
          Fort de ses longues années d'expérience, elle s'attaque
          désormais à l'Asie et fait une percée à Singapour et à
          Dubaï. La Swiss-life assurance prêt propose différentes
          garanties innovantes. Par rapport à son activité et à
          son mode de vie, chacun est en mesure d'ajouter des
          options au contrat principal. C'est le cas, par exemple,
          des adeptes des sports extrêmes ou des personnes qui
          exercent un métier dangereux.
        </p>
        <h2 className="CompagniesAssurancesTitle">Swiss-life assurance prêt: quelles sont les garanties?</h2>
        <p className="CompagniesAssurancesParagraphe">
          Les offres du groupe Swiss-life s'adaptent à tous les
          types de prêt immobilier. La formule Essentielle
          permet d'apporter la garantie nécessaire à son
          organisme financier, tout en assurant la protection
          de sa famille. Outre les garanties classiques comme le
          décès et le PTIA, cette option peut être complétée
          avec une couverture d'incapacité temporaire totale
          de travail ou d'invalidité permanente, totale ou
          partielle. Le produit Investisseurs est destiné aux
          personnes qui souhaitent se lancer dans la location.
          Pour les retraités, la formule Sérénité leur propose
          une souscription à un pack dépendance qui englobe une
          protection si un cas de dépendance total se présente.
          Celle-ci prend effet jusqu'au 90e anniversaire de l'assuré.
        </p>
      </div>
    </div>
  )
}

export default SwissLife; 