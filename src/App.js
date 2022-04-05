import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import Navbar from './Navbar';
import IntroBox from './IntroBox';
import ThemeBox from './ThemeBox';
import MainImage from './MainImage';
import TextBox from './TextBox';
import SimpleTextBox from './SimpleTextBox';
import StarBox from './StarBox';
import ListBox from './ListBox';
import IconBox from './IconBox';
import logoInsurance from './images/insurance.png'; 
import logoHome from './images/home.png'; 
import ag2r from './images/logos-assurances/ag2r.jpg'; 
import agpm from './images/logos-assurances/agpm.jpg'; 
import allianz from './images/logos-assurances/allianz.jpg'; 
import alptis from './images/logos-assurances/alptis.jpg'; 
import aprep from './images/logos-assurances/aprep.jpg'; 
import april from './images/logos-assurances/april.jpg'; 
import covea from './images/logos-assurances/covea.jpg'; 
import generali from './images/logos-assurances/generali.jpg'; 
import premium from './images/logos-assurances/premium.jpg'; 
import spheriavie from './images/logos-assurances/spheriavie.jpg'; 
import swisslife from './images/logos-assurances/swisslife.jpg'; 
import televie from './images/logos-assurances/televie.jpg'; 
import afieurope from './images/logos-assurances/afieurope.jpg'; 
import ugip from './images/logos-assurances/ugip.jpg'; 
import unim from './images/logos-assurances/unim.jpg'; 
import Footer from './Footer';
import houseimage from './images/house.jpg'
import compareImg from './images/compare.jpg'
import ItemsSection from './ItemsSection'; 
import independanceLogo from './images/icon-step/independance.png'
import comparaisonLogo from './images/icon-step/comparaison.png'
import comparaison2Logo from './images/icon-step/comparaison2.png'
import conseilLogo from './images/icon-step/conseil.png'
import rapideLogo from './images/icon-step/rapide.png'
import handchekLogo from './images/icon-step/handchek.png'
import profilLogo from './images/icon-step/profil.png'
import projetLogo from './images/icon-step/projet.png'
import courtier from './images/pexels-moose-photos-1586996.jpg'; 
import creditImmo from './images/pexels-alexandr-podvalny-7599735.jpg'; 
import creditImmo2 from './images/pexels-will-mu-3802666.jpg'; 

import AfiEurope from './AfiEurope';


/*
  STARBOX

        <div className="starBoxList">
          <StarBox/>
          <ListBox/>
          <ListBox/>
        </div>


*/ 








function App() {
  return (
    
    
    <div className="App">


      <Navbar/>


      <div className="firstSection">
        <IntroBox />
        <SimpleTextBox className="SimpleTextBox2"
          title={"Comparatif assurance prêt : un outil indispensable"} 
          paraTitle1={"Comparez les produits Comparatif assurance prêt : un outil indispensable"}
          para1={"La loi Lagarde adoptée en 2010 offre à l’emprunteur le libre choix quant au prestataire qui va lui fournir la garantie pour couvrir son crédit immobilier. La sélection de l’assurance de prêt adapté à son profil devient par conséquent cruciale pour réaliser des économies et bénéficier de la meilleure protection"} 

          paraTitle2={"En quoi le comparatif assurance de prêt est-il important ?"}
          para2={"Un comparatif assurance prêt est un outil mis à la disposition de l’internaute pour comparer de manière objective les différentes offres d’assurance emprunteur. C’est une solution qui permet à l’emprunteur de gagner du temps, car il n’a pas à collecter les devis de plusieurs assureurs pour sélectionner les offres les plus pertinentes et choisir celle qui répond le plus à ses besoins. En quelques minutes, l’usager reçoit une liste exhaustive des propositions qui correspondent le mieux à son profil et à ses attentes. Il lui reste à choisir parmi les offres en sa possession, celle qui lui convient et le courtier en assurance se charge d’accélérer les formalités afin de finaliser le contrat dans les plus brefs délais."}

          paraTitle3={"Comment utiliser le comparatif d’assurance de prêt ?"}
          para3={"Assez simple à exploiter, le comparatif d’assurance de prêt fonctionne de manière intuitive et simplifiée. Il suffit à l’emprunteur de fournir les renseignements le concernant ainsi que les détails sur les spécificités du crédit sollicité, afin de disposer de plusieurs devis.La plupart du temps, les courtiers d’assurance en ligne proposent ce service gratuitement sur leur site afin d’aider les internautes à avoir un aperçu des différentes conditions proposées par les assureurs. C’est un outil incontournable pour pouvoir trier les meilleures offres et faire le plus d’économies possible."}
          />
        <div className="themeBoxCtn">
          <ThemeBox className={"ThemeBox left"} src={logoInsurance} title={"Assurance"}/>
          <ThemeBox className={"ThemeBox left"} src={logoInsurance} title={"Assurance"}/>
          <ThemeBox className={"ThemeBox"} src={logoHome} title={"Crédit immobilier"}/>
        </div>
        <div className="MainImageTextBoxCtn">
          <MainImage src={houseimage}/>
          <TextBox/>
        </div>
      </div>

      <div className="seconSection">

      <div className="courtierSection" >
      <SimpleTextBox className="SimpleTextBox3"
          title={"Comprendre les subtilités d’un prêt immobilier"} 
          para1={"Une personne qui souhaite acquérir un bien immobilier est souvent contrainte à demander le concours d’une banque ou d’un organisme de crédit. En effet, le prix actuel de l’immobilier dépasse souvent l’épargne de l’acheteur et nécessite la recherche d’une autre source de financement."} 

          paraTitle2={"Qu’est-ce qu’un crédit immobilier ?"}
          para2={"Par opposition au crédit non affecté, le prêt immobilier est un emprunt destiné à financer l’acquisition d’un bien immobilier ou d'un terrain pour sa construction. L’entretien d’un immeuble, ainsi que son amélioration ou les réparations peuvent être considérées comme éligibles en tant que crédit immobilier si leur montant excède les 75 000 euros. Il existe différents types de crédit immobilier, cependant ils présentent tous les mêmes caractéristiques. Ainsi, avant de signer avec une banque, il convient de comparer plusieurs offres de prêt immobilier en tenant compte des critères objectifs comme le taux effectif global (TEG), la garantie, le taux nominal, les frais de dossiers et l’assurance de crédit."}

          paraTitle3={"L’assurance de prêt pour un crédit immobilier"}
          para3={"L’assurance de prêt permet à l’emprunteur d’être couvert face aux risques de non-paiement de ses mensualités si un sinistre survient. Généralement, l’établissement qui octroie le crédit immobilier inclut dans son offre une assurance emprunteur. Cependant, depuis la mise en application de la loi Lagarde, la personne qui demande le crédit peut la refuser et souscrire une assurance chez un autre prestataire à condition que les garanties couvertes soient identiques. Il est important de bien comparer les différentes offres d’assurance de prêt en sollicitant les services d’un courtier en assurance qui se charge de collecter et de présenter à l’emprunteur les propositions les plus avantageuses.  "}
          />
          <MainImage src={creditImmo2}/>

      </div>
      <div className="separateur" ></div>


        <div className="titleAndIconboxTextCtn">
          <div className="titleAndIconbox">
            <h3>Société d'assurance de prêt</h3>
            <p>Découvrez les compagnies assurance emprunteur</p>
          </div>
          <div className="iconBoxCtn">
            <IconBox src={ag2r}/>
            <IconBox src={agpm}/>
            <IconBox src={allianz}/>
            <IconBox src={alptis}/>
            <IconBox src={aprep}/>
            <IconBox src={april}/>
            <IconBox src={covea}/>
            <IconBox src={generali}/>
            <IconBox src={premium}/>
            <IconBox src={spheriavie}/>
            <IconBox src={swisslife}/>
            <IconBox src={televie}/>
            <IconBox src={afieurope}/>
            <IconBox src={ugip}/>
            <IconBox src={unim}/>
          </div>
        </div>
      </div>


      <div className="MainImageTextBoxCtn two">
        <SimpleTextBox className={"SimpleTextBox"}
        title={"Comparatif assurance prêt : un outil indispensable"} 
        paraTitle1={"Comparez les produits Comparatif assurance prêt : un outil indispensable"}
        para1={"La loi Lagarde adoptée en 2010 offre à l’emprunteur le libre choix quant au prestataire qui va lui fournir la garantie pour couvrir son crédit immobilier. La sélection de l’assurance de prêt adapté à son profil devient par conséquent cruciale pour réaliser des économies et bénéficier de la meilleure protection"} 
        paraTitle2={"En quoi le comparatif assurance de prêt est-il important ?"}
        para2={"Un comparatif assurance prêt est un outil mis à la disposition de l’internaute pour comparer de manière objective les différentes offres d’assurance emprunteur. C’est une solution qui permet à l’emprunteur de gagner du temps, car il n’a pas à collecter les devis de plusieurs assureurs pour sélectionner les offres les plus pertinentes et choisir celle qui répond le plus à ses besoins. En quelques minutes, l’usager reçoit une liste exhaustive des propositions qui correspondent le mieux à son profil et à ses attentes. Il lui reste à choisir parmi les offres en sa possession, celle qui lui convient et le courtier en assurance se charge d’accélérer les formalités afin de finaliser le contrat dans les plus brefs délais."}
        paraTitle3={"Comment utiliser le comparatif d’assurance de prêt ?"}
        para3={"Assez simple à exploiter, le comparatif d’assurance de prêt fonctionne de manière intuitive et simplifiée. Il suffit à l’emprunteur de fournir les renseignements le concernant ainsi que les détails sur les spécificités du crédit sollicité, afin de disposer de plusieurs devis.La plupart du temps, les courtiers d’assurance en ligne proposent ce service gratuitement sur leur site afin d’aider les internautes à avoir un aperçu des différentes conditions proposées par les assureurs. C’est un outil incontournable pour pouvoir trier les meilleures offres et faire le plus d’économies possible."}
        />
        <MainImage src={compareImg}/>
      </div>

      <ItemsSection className="ItemsSection"
      title={"Pourquoi utiliser les services d'un courtier L'Assurance Prêt"}
      itemTitle1={"Indépendance"}
      src1={independanceLogo}
      itemTitle2={"Rapidité"}
      src2={rapideLogo}
      itemTitle3={"Conseil"}
      src3={conseilLogo}
      itemTitle4={"Comparaison"}
      src4={comparaisonLogo}
      />
      <ItemsSection className="ItemsSection two"
      title={"Déléguer votre assurance de prêt: Comment ça fonctionne ?"}
      itemTitle1={"Rensigner votre profile"}
      src1={profilLogo}
      itemTitle2={"Définissez votre projet"}
      src2={projetLogo}
      itemTitle3={"Comparez les offres"}
      src3={comparaison2Logo}
      itemTitle4={"Choisissez votre contrat"}
      src4={handchekLogo}
      />

      <div className="courtierSection" >
      <MainImage src={courtier}/>
      <SimpleTextBox className="SimpleTextBox3"
          title={"Courtier assurance prêt : un professionnel au service des emprunteurs"} 
          para1={"Le courtier assurance prêtsert d’intermédiaire entre les compagnies d’assurance et l’emprunteur. Son premier rôle est de conseiller ce dernier afin qu’il trouve plus facilement les offres qui correspondent à ses besoins. Il lui sert en quelque sorte de mandataire afin de prospecter les meilleures propositions d’assurance de prêt auprès des compagnies d’assurance. Le courtier en assurance permet à l’emprunteur d’économiser du temps et de l’argent, car il est en mesure de négocier avec les assureurs, notamment dans les montages juridiques et financiers complexes."} 

          paraTitle2={"Quelles sont les missions du courtier en assurance ?"}
          para2={"Un comparatif assurance prêt est un outil mis à la disposition de l’internaute pour comparer de manière objective les différentes offres d’assurance emprunteur. C’est une solution qui permet à l’emprunteur de gagner du temps, car il n’a pas à collecter les devis de plusieurs assureurs pour sélectionner les offres les plus pertinentes et choisir celle qui répond le plus à ses besoins. En quelques minutes, l’usager reçoit une liste exhaustive des propositions qui correspondent le mieux à son profil et à ses attentes. Il lui reste à choisir parmi les offres en sa possession, celle qui lui convient et le courtier en assurance se charge d’accélérer les formalités afin de finaliser le contrat dans les plus brefs délais."}

          paraTitle3={"Comment choisir un courtier en assurance ?"}
          para3={"Le courtier en assurance de prêt doit répondre à quelques critères. En tant que professionnel, il est tenu de s’inscrire à l’Organisme pour le Registre des Intermédiaires en Assurances (ORIAS) et ses activités sont rigoureusement réglementées par l’Autorité de Contrôle Prudentiel (ACP). En outre, le courtier en assurance doit travailler de concert avec un grand nombre de compagnies d’assurances. Un maximum de partenariats garantit pour l’emprunteur une offre plus étoffée et facilite l’obtention d’un contrat performant. Outre l’assistance pour le montage du dossier médical, il doit être en mesure d’effectuer toutes les démarches auprès de la compagnie d’assurance pour le compte du futur assuré."}
          />
      </div>
        

      <Footer/>

    </div>
  );
}

export default App;
