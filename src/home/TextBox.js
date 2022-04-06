import React from 'react'; 
import './TextBox.css'; 
import SimpleButton from './SimpleButton';

/*
    La garantie emprunteur fait partie de la catégorie de l’assurance de personnes. 
    L’assurance prêt n’est pas obligatoire, même si dans la réalité, elle conditionne l’octroi d’un crédit immobilier. 
    Elle garantit à l’organisme prêteur de se faire rembourser en cas de sinistre. 
    Pour l’emprunteur, il s’agit d’une protection qui prend effet si à cause des motifs indiqués dans son contrat, il n’est plus en mesure d’honorer ses dettes.
*/
function TextBox(props){
    return(
        <div className="TextBox">
            <h3 className="textBoxTitle">L'assurance prêt :   
                <span className="textBoxTitleSpan"> Simulation des tarifs et Comparatif des garanties
                </span>
            </h3>
            <div className="underline"></div>
            <p className="textBoxParagraphe">
                Assurance prêt : une couverture indispensable
                La souscription d’une assurance permet de recevoir un dédommagement pour les préjudices subis à cause d’un aléa comme un accident, un chômage, une maladie ou même un décès. 
                Dans le cadre d’un crédit immobilier, l’assurance prêt offre une plus grande sérénité tout au long de la période de remboursement du prêt.
                </p>
                <p className="textBoxParagraphe">
                Quel est l’intérêt de souscrire une assurance prêt ?
                Une assurance est un contrat par lequel une entité obtient une protection face à un risque, en contrepartie du versement d’une prime auprès de l’assureur. 
                Si le risque se réalise, l’individu ou l’entreprise qui a souscrit le contrat d’assurance se fait indemniser, selon les termes de l'accord signé entre les deux parties.
                Il existe plusieurs types d’assurances, à savoir l’assurance des dommages et l’assurance de personnes. 
                La première regroupe la protection des biens et celle de responsabilité. Quant à la seconde, elle concerne les risques qui touchent les individus.
                Qu'est-ce que l’assurance prêt ?
                </p>

                <div className="simpleBtnTxtBoxCtn">
                    <SimpleButton title={"en savoir plus"} className={"simpleButton empty"}/>
                    <SimpleButton title={"être contacté"} className={"simpleButton fullWhite"}/>
                </div>
                
        </div>
    )
}

export default TextBox; 