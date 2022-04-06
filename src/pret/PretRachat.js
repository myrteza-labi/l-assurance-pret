import React from 'react'
import './PretRachat.css'; 
import HeaderImage from '../HeaderImage';
import header from '../images/pexels-andrea-piacquadio-3760067.jpg'; 





function PretRachat() {
  return (

    <div className="CompagniesAssurances">

        <HeaderImage src={header} />

        <div className="CompagniesAssurancesTextContainer">
            <h1>Rachat prêt : comment ça marche ?</h1>
            <p className="CompagniesAssurancesParagraphe">
                Le rachat de prêt vient en aide aux emprunteurs 
                qui ont plusieurs prêts en cours et qui souhaitent 
                alléger leurs mensualités. Cette solution peut 
                contribuer au lancement de nouveaux projets 
                sans que les charges financières mensuelles 
                ne s’alourdissent. Elle vient également 
                résoudre des difficultés financières déjà 
                présentes dues à un endettement excessif.
            </p>

            <h2 className="CompagniesAssurancesTitle">Qu’est-ce que le rachat de crédit ?</h2>
            <p className="CompagniesAssurancesParagraphe"> 
                Le rachat prêt, connu également sous l’appellation 
                de regroupement de crédit, de consolidation, 
                ou de restructuration, consiste à regrouper 
                plusieurs crédits en un seul. C’est l’alternative 
                la plus simple pour éviter le surendettement 
                d’un individu ayant contracté trop de crédits. 
                Concrètement, il s’agit pour un emprunteur de 
                s’adresser à une banque ou un organisme de 
                crédit pour que celui-ci rachète tous ses 
                emprunts et lui accorde un nouveau crédit. 
                Cette procédure permet au débiteur de ne 
                payer qu’une seule mensualité et auprès 
                d’un seul interlocuteur.
            </p>
            

            <h2 className="CompagniesAssurancesTitle">Avantages et inconvénients du rachat de crédit</h2>
            <p className="CompagniesAssurancesParagraphe">
                Le regroupement de crédit réduit sensiblement 
                les risques de mensualités impayées, puisque le 
                montant des remboursements mensuels baisse au 
                profit d’un prolongement de la durée du crédit. 
                Les charges à payer à chaque fin du mois diminuent 
                également pour le ménage, car les mensualités sont 
                moindres. En conséquence, le rachat de crédit 
                permet au foyer de garder un certain niveau de 
                vie et de retrouver l’équilibre de son budget.
            </p>
            <p className="CompagniesAssurancesParagraphe">
                Il faut cependant prendre conscience que 
                le rachat de crédit augmente sensiblement 
                le coût total du crédit. En outre, l’emprunteur 
                doit supporter de nouveaux frais comme les 
                frais de dossier, de mainlevée d’hypothèque 
                ou la souscription d’une nouvelle assurance. 
                Il importe de ce fait de bien évaluer le gain 
                escompté lors d’un rachat pret afin 
                d’éviter toute déconvenue.
            </p>
        </div>
    </div>
  )
}

export default PretRachat; 

