import React from 'react'
import './Conso.css';
import HeaderImage from '../HeaderImage';
import header from '../images/pexels-andrea-piacquadio-3760067.jpg';

function Conso() {
    return (
        <div className="Societe">
            <HeaderImage src={header} />
            <div className="CompagniesAssurancesTextContainer">
                <h1>Prêt Conso : une forme de crédit très sollicitée</h1>
                <p className="CompagniesAssurancesParagraphe">
                    D’après les chiffres publiés par l'Association
                    française des Sociétés Financières (ASF),
                    le crédit à la consommation a reculé de
                    1,3 % pendant l’année 2013. Ce type de
                    prêt figure pourtant parmi les offres
                    de crédit les plus demandées.
                </p>
                <h2 className="CompagniesAssurancesTitle">Les différents types de prêt à la consommation</h2>
                <p className="CompagniesAssurancesParagraphe">
                    Le Prêt Conso est un prêt octroyé par un
                    organisme bancaire pour l’achat d’un bien
                    ou d’un service autre que l’immobilier.
                    Son montant est limité entre 200 € et
                    75 000 €. C’est le Code de la consommation,
                    dans son article L.311-1 4°, qui définit
                    son cadre juridique. Que ce soit pour
                    acquérir une nouvelle voiture, s’offrir
                    des vacances, renouveler sa cuisine ou
                    ses appareils électroménagers, le crédit
                    à la consommation est la solution appropriée.
                </p>
                <p className="CompagniesAssurancesParagraphe">
                    Il existe différents types de prêt à la
                    consommation. Pour le prêt personnel,
                    il n’est pas nécessaire de définir à
                    l’avance la destination de la dépense.
                    Ce qui explique que la banque exige
                    souvent des garanties telles que des
                    revenus stables. Dans le cas d’un prêt
                    affecté, le fonds débloqué sert à acheter
                    un objet déterminé à l’avance.
                    Pour ce qui est du crédit renouvelable,
                    c’est une réserve d’argent qui se
                    reconstruit au fur et à mesure
                    de son remboursement.
                </p>
                <h2 className="CompagniesAssurancesTitle">Prêt Conso et assurance de prêt</h2>
                <p className="CompagniesAssurancesParagraphe">
                    Dans le cas d’un crédit à la consommation,
                    l’assurance de prêt n’est pas obligatoire.
                    Cependant, elle est souvent recommandée par
                    l’organisme prêteur, notamment en ce qui
                    concerne les garanties décès et invalidité.
                    Si l’emprunteur présente de graves ennuis
                    de santé, il est préférable d’adhérer à
                    la convention AERAS. Connaitre ses besoins
                    avant de souscrire un prêt à la consommation
                    permet de choisir une assurance emprunteur
                    plus performante tant en termes
                    de couverture que de coût.
                </p>
            </div>
        </div>
    )
}

export default Conso;

