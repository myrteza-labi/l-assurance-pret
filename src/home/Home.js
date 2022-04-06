import './Home.css';
import IntroBox from './IntroBox';
import ThemeBox from './ThemeBox';
import MainImage from '../MainImage';
import TextBox from './TextBox';
import SimpleTextBox from './SimpleTextBox';
import StarBox from './StarBox';
import ListBox from './ListBox';
import IconBox from './IconBox';
import logoInsurance from '../images/insurance.png'; 
import logoHome from '../images/home.png'; 
import ag2r from '../images/logos-assurances/ag2r.jpg'; 
import agpm from '../images/logos-assurances/agpm.jpg'; 
import allianz from '../images/logos-assurances/allianz.jpg'; 
import alptis from '../images/logos-assurances/alptis.jpg'; 
import aprep from '../images/logos-assurances/aprep.jpg'; 
import april from '../images/logos-assurances/april.jpg'; 
import covea from '../images/logos-assurances/covea.jpg'; 
import generali from '../images/logos-assurances/generali.jpg'; 
import premium from '../images/logos-assurances/premium.jpg'; 
import spheriavie from '../images/logos-assurances/spheriavie.jpg'; 
import swisslife from '../images/logos-assurances/swisslife.jpg'; 
import televie from '../images/logos-assurances/televie.jpg'; 
import afieurope from '../images/logos-assurances/afieurope.jpg'; 
import ugip from '../images/logos-assurances/ugip.jpg'; 
import unim from '../images/logos-assurances/unim.jpg'; 
import houseimage from '../images/house.jpg'
import compareImg from '../images/compare.jpg'
import ItemsSection from './ItemsSection'; 
import independanceLogo from '../images/icon-step/independance.png'
import comparaisonLogo from '../images/icon-step/comparaison.png'
import comparaison2Logo from '../images/icon-step/comparaison2.png'
import conseilLogo from '../images/icon-step/conseil.png'
import rapideLogo from '../images/icon-step/rapide.png'
import handchekLogo from '../images/icon-step/handchek.png'
import profilLogo from '../images/icon-step/profil.png'
import projetLogo from '../images/icon-step/projet.png'
import courtier from '../images/pexels-moose-photos-1586996.jpg'; 
import creditImmo from '../images/pexels-alexandr-podvalny-7599735.jpg'; 
import creditImmo2 from '../images/pexels-will-mu-3802666.jpg'; 



/*
  STARBOX

        <div className="starBoxList">
          <StarBox/>
          <ListBox/>
          <ListBox/>
        </div>


*/ 








function Home() {
  return (
    
    
    <div id="App" className="App">




      <div className="firstSection">
        <IntroBox />

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
          <div className="separateur" ></div>

        </div>
    </div>
  );
}

export default Home;


/*




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



*/