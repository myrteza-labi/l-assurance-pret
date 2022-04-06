import React from 'react'; 
import './IntroBox.css'; 

function IntroBox(){
    return(
        <div className="IntroBox">
            <h2 className="introBoxTitle">Nous somme L'Assurance Prêt</h2>
            <p className="introBoxParagraphe">Nous comparons les offres de nos partenaires 
            pour vous propose une assurance adapté à vos besoins au meilleur prix.</p>
            <div className="introBoxBtnCtn">
                <button className="introBoxButton empty">Nous rencontrer</button>
                <button className="introBoxButton full">Devis gratuit</button>
            </div>

        </div>
    )
}

export default IntroBox; 