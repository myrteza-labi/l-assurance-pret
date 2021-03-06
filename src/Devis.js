import React from 'react'
import './Devis.css';
import HeaderImage from './HeaderImage';
import header from './images/devis-assurance-pret.jpg';

function Devis() {
    // devis AS du Grand Lyon: ne pas modifier ou 
    // supprimer le code ci dessous 
    function devis(){
   
            (function (param1d, param2s, param3id) {
                let js = param1d.getElementsByTagName(param2s)[0];
                let dpjs = param1d.getElementsByTagName(param2s)[0];
                if (param1d.getElementById(param3id) === true) {
                    return
                };
                js = param1d.createElement(param2s);
                js.iparam3id = param3id;
                js.src = "//simulateur.ascourtage.fr/js/sdkif.js";
                dpjs.parentNode.insertBefore(js, dpjs);
            }
                (document, "script", "asInit"));
                var _AppCfg = { version: "0.1", appId: "votreass" };
        ;
    }
    

    return (
        <div onLoad={devis()} id="Devis" className="Devis">
            <HeaderImage src={header} />
            <div className="CompagniesAssurancesTextContainer">
                <h1>Devis assurance prêt : un outil pour mieux comparer et choisir</h1>
                <h2 className="CompagniesAssurancesTitle">Comparez les produits Devis assurance prêt : un outil pour mieux comparer et choisir</h2>
                <div id="mainDevisContainer">
                    <div id="devisPretCtn" >
                        <div id="myTarificateur" ></div>
                    </div>
                </div>
                <p className="CompagniesAssurancesParagraphe">
                    La loi Lagarde autorise l’emprunteur à souscrire son
                    assurance de prêt dans un établissement autre que
                    celui qui lui accorde son crédit. Il est ainsi
                    crucial de demander des devis et de comparer
                    les offres afin de prendre la meilleure décision.
                </p>
                <h2 className="CompagniesAssurancesTitle">Comparer les devis pour réaliser d’énormes économies</h2>
                <p className="CompagniesAssurancesParagraphe">
                    Obtenir plusieurs devis assurance prêt procure
                    un large choix à l’emprunteur, ce qui permet
                    de sélectionner l’offre la plus avantageuse
                    parmi celles qui lui sont présentées.
                    Le recours à un comparateur d’assurance
                    de prêt est la solution la plus simple,
                    la plus rapide et la plus économique pour
                    disposer en quelques minutes d’un
                    éventail de propositions.
                </p>
                <p className="CompagniesAssurancesParagraphe">
                    Il suffit pour cela de se rendre sur le site
                    d’un courtier en assurance ou d’une compagnie
                    d’assurance et de remplir les renseignements
                    concernant le profil de l’emprunteur
                    et la nature de son crédit.
                </p>
                <h2 className="CompagniesAssurancesTitle">Le courtier, garant d’une assurance adaptée</h2>
                <p className="CompagniesAssurancesParagraphe">
                    Grâce au courtier spécialisé en assurance,
                    l’emprunteur peut accéder à un grand nombre
                    de devis et disposer d’une assurance de
                    prêt adaptée à son profil. Ce professionnel
                    travaille en étroite collaboration avec les
                    plus grandes compagnies d’assurance et a
                    l’opportunité de faire jouer la concurrence
                    en vue d’obtenir les offres les plus avantageuses.
                </p>
                <p className="CompagniesAssurancesParagraphe">
                    Que le futur assuré soit fumeur,
                    jeune emprunteur, une personne présentant
                    un risque aggravé de maladie, exerçant
                    une profession à risque, senior ou
                    pratiquant un sport extrême, il est
                    possible de trouver une assurance
                    de prêt qui cadre avec sa situation personnelle.
                </p>
            </div>
        </div>
    )
}

export default Devis;

