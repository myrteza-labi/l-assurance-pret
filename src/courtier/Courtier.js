
import React from 'react'
import './Courtier.css';
import courtier from '../images/pexels-moose-photos-1586996.jpg';
import SimpleTextBox from '../home/SimpleTextBox';
import MainImage from '../MainImage';

function Courtier() {
  return (

    <div id="Courtier" className="Courtier">
      <div className="courtierSection" >
        <MainImage id={"imgCourtier"} src={courtier} />
        <SimpleTextBox className="SimpleTextBox3"
          title={"Courtier assurance prêt : un professionnel au service des emprunteurs"}
          para1={
            "Le courtier assurance prêtsert d’intermédiaire entre \
            les compagnies d’assurance et l’emprunteur. Son premier \
            rôle est de conseiller ce dernier afin qu’il trouve plus \
            facilement les offres qui correspondent à ses besoins. Il \
            lui sert en quelque sorte de mandataire afin de prospecter \
            les meilleures propositions d’assurance de prêt auprès \
            des compagnies d’assurance. Le courtier en assurance permet \
            à l’emprunteur d’économiser du temps et de l’argent, \
            car il est en mesure de négocier avec les assureurs, \
            notamment dans les montages juridiques \
            et financiers complexes."
          }
          paraTitle2={"Quelles sont les missions du courtier en assurance ?"}
          para2={
            "Un comparatif assurance prêt est un outil mis \
            à la disposition de l’internaute pour comparer de manière\
            objective les différentes offres d’assurance emprunteur.\
            C’est une solution qui permet à l’emprunteur de gagner du\
            temps, car il n’a pas à collecter les devis de plusieurs\
            assureurs pour sélectionner les offres les plus pertinentes\
            et choisir celle qui répond le plus à ses besoins. \
            En quelques minutes, l’usager reçoit une liste \
            exhaustive des propositions qui correspondent le \
            mieux à son profil et à ses attentes. Il lui reste \
            à choisir parmi les offres en sa possession, celle \
            qui lui convient et le courtier en assurance se charge\
            d’accélérer les formalités afin de finaliser le contrat\
            dans les plus brefs délais."
          }
          paraTitle3={"Comment choisir un courtier en assurance ?"}
          para3={
            "Le courtier en assurance de prêt doit répondre\
             à quelques critères. En tant que professionnel, \
             il est tenu de s’inscrire à l’Organisme pour le \
             Registre des Intermédiaires en Assurances (ORIAS) \
             et ses activités sont rigoureusement réglementées \
             par l’Autorité de Contrôle Prudentiel (ACP). En outre, \
             le courtier en assurance doit travailler de concert \
             avec un grand nombre de compagnies d’assurances. \
             Un maximum de partenariats garantit pour l’emprunteur \
             une offre plus étoffée et facilite l’obtention d’un \
             contrat performant. Outre l’assistance pour le \
             montage du dossier médical, il doit être en mesure \
             d’effectuer toutes les démarches auprès de la \
             compagnie d’assurance pour le compte du futur assuré."
            }
        />
      </div>
    </div>
  )
}

export default Courtier;

