import React from 'react'
import './Contact.css';
import HeaderImage from '../HeaderImage';
import header from '../images/pexels-andrea-piacquadio-3760067.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from "react-google-recaptcha";

/* 
Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
Ces code sont les clés de l'API reCaptcha. Il sont mis à disposition de tous 
sur le site de l'API google, à des fin de test. Lors de la mise en production
du site, vous devrez remplacer ces clés par des clé API personnel 
crée sur "https://www.google.com/recaptcha/about/". 
*Attention* Utilisez la version V2 uniquement. */

function Contact() {
    return (
        <div id="Contact" className="Contact">
            <HeaderImage src={header} />
            <h1>Contactez-nous</h1>
            <p className="CompagniesAssurancesParagraphe asterix">
                Les champs suivis d'un astérisque * sont obligatoires.
            </p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="nom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="prenom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adresse postale</Form.Label>
                    <Form.Control type="text" placeholder="adresse" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control type="text" placeholder="ville" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type="tel" placeholder="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type="tel" placeholder="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control type="email" placeholder="email@exemple.com" />
                    <Form.Text className="text-muted">
                        Nous ne partageons jamais vos données personnelles avec des tiers
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quel est le sujet de votre demande</Form.Label>
                    <select id="sujetQuestion">
                        <option label="- Selectionnez -" />
                        <option label="Devenir client / Faire un devis" />
                        <option label="Une informations sur les produits" />
                        <option label="Une informations sur le groupe" />
                        <option label="Le site internet" />
                        <option label="Une reclamation" />
                        <option label="Autre" />
                        <option label="Audi">Le site internet</option>
                        <option label="Audi">Une reclamation</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Votre message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="submitBtn" variant="primary" type="submit">
                    Submit
                </Button>
                <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />
            </Form>
        </div>
    )
}

/* Function de ReCaptcha, ne pas toucher */
function onChange(value) {
    console.log("Captcha value:", value);
}

export default Contact; 
