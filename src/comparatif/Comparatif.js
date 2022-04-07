import React from 'react'
import './Comparatif.css';
import HeaderImage from '../HeaderImage';
import header from '../images/pexels-anna-shvets-5257276.jpg';




function Comparatif() {
    return (
        <div id="Comparatif" className="Comparatif">
            <HeaderImage src={header} />
            <div className="CompagniesAssurancesTextContainer">
                <h1>Comparatif assurance prêt : un outil indispensable</h1>
                <h2 className="CompagniesAssurancesTitle">Comparez les produits Comparatif assurance prêt : un outil indispensable</h2>
                <p className="CompagniesAssurancesParagraphe">
                    La loi Lagarde adoptée en 2010 offre à
                    l’emprunteur le libre choix quant au
                    prestataire qui va lui fournir la
                    garantie pour couvrir son crédit
                    immobilier. La sélection de l’assurance
                    de prêt adapté à son profil devient
                    par conséquent cruciale pour réaliser
                    des économies et bénéficier de
                    la meilleure protection
                </p>
                <h2 className="CompagniesAssurancesTitle">En quoi le comparatif assurance de prêt est-il important ?</h2>
                <p className="CompagniesAssurancesParagraphe">
                    Un comparatif assurance prêt est un outil mis
                    à la disposition de l’internaute pour comparer
                    de manière objective les différentes offres
                    d’assurance emprunteur. C’est une solution
                    qui permet à l’emprunteur de gagner du temps,
                    car il n’a pas à collecter les devis de
                    plusieurs assureurs pour sélectionner
                    les offres les plus pertinentes et choisir
                    celle qui répond le plus à ses besoins.
                </p>
                <p className="CompagniesAssurancesParagraphe">
                    En quelques minutes, l’usager reçoit
                    une liste exhaustive des propositions
                    qui correspondent le mieux à son profil
                    et à ses attentes. Il lui reste à
                    choisir parmi les offres en sa possession,
                    celle qui lui convient et le courtier
                    en assurance se charge d’accélérer les
                    formalités afin de finaliser le contrat
                    dans les plus brefs délais.
                </p>
                <h2 className="CompagniesAssurancesTitle">Comment utiliser le comparatif d’assurance de prêt ?</h2>
                <p className="CompagniesAssurancesParagraphe">
                    Assez simple à exploiter, le comparatif
                    d’assurance de prêt fonctionne de manière
                    intuitive et simplifiée. Il suffit à
                    l’emprunteur de fournir les renseignements
                    le concernant ainsi que les détails sur
                    les spécificités du crédit sollicité,
                    afin de disposer de plusieurs devis.
                </p>
                <p className="CompagniesAssurancesParagraphe">
                    La plupart du temps, les courtiers
                    d’assurance en ligne proposent ce
                    service gratuitement sur leur site
                    afin d’aider les internautes à avoir
                    un aperçu des différentes conditions
                    proposées par les assureurs. C’est un
                    outil incontournable pour pouvoir trier
                    les meilleures offres et faire le plus
                    d’économies possible.
                </p>
            </div>
        </div>
    )
}

export default Comparatif;

