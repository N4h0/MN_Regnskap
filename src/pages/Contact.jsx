/* import React, { useState } from 'react'; */
import emailjs from '@emailjs/browser'; // Importer emailjs
import './Contact.css';
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata
import { useContext, useState } from 'react';
import { LanguageContext } from '../languages/LanguageContext';

function Contact() {
    const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket

    // Funksjon for å sende e-post via emailjs
    const textData = language === 'norsk' ? no : en;
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSucessMessage] = useState("");

    const sendEmail = (e) => {
         e.preventDefault();
   
        const name = document.querySelector('.input-name').value;
        const email = document.querySelector('.input-email').value;
        const message = document.querySelector('.textarea').value;

        if (!name || !isValidEmail(email) || !message) {
            setErrorMessage(textData.alert_message);
        } else {
            setErrorMessage("");
            setSucessMessage(textData.success_message)
        }

        emailjs
            .sendForm("desig4344.gmail.com", "template_6rs1lh8", e.target, { publicKey: "KyNlFb-WjIs15bWeo" })
            .then(
                () => {
                    /*
                    console.log('Eposten er sendt!');    //vis popup melding
                    setShowSuccessMessage(true);         //reset skjemaet etter vellykket sending
                    e.target.reset();
                    */
  
                    console.log('Suksess!');

                    if (name && isValidEmail(email) && message) {
                      
                        e.target.reset();
               
                    }
                   
                },
                (error) => {
                    console.log('Noe gikk galt:', error.text);
                    alert(textData.notSuccess_message)
                },
        );
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

    };


    return (
        <>
            <div className="contact-us-page">
                <section className="hero-content">
                    <div className="main-wrapper">
                        <div className="hero-body">
                            <div className="hero-text">
                                <h1 className="hero-heading">{textData.contactPageTitle}</h1>
                                <p className="hero-p">{textData.contactPageDescription}</p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="main-wrapper">
                        <div className="supports">
                            <div className="support-card first">
                                <img src="./KontaktOss1.WebP" className="support-card-image" />
                                <h2 className='support-card-h2'>{textData.talkToUs}</h2>
                                <span>{textData.yourFeedbackIsImportant}</span>
                                <a className="support-card-a" href={`tel:${textData.phoneNumber}`}>{textData.phoneNumber}</a>
                                <h2 className='support-card-h2'>{textData.whenInNeed}</h2>
                                <span>{textData.helpFromFriends}</span>
                            </div>
                            <div className="support-card second">
                                <img src="./KontaktOss2.WebP" className="support-card-image" alt="Melding" />
                                <h2 className='support-card-h2'>{textData.requestConsultation}</h2>
                                <span>{textData.concentrateOnWhatYouDoBest}</span>
                                <form onSubmit={sendEmail}>
                                    <div className="form-input">
                                        <input type="text" className="input-name" placeholder={textData.namePlaceholder} name="user_name" />
                                    </div>
                                    <div className="form-input">
                                        <input type="email" className="input-email" placeholder={textData.emailPlaceholder} name="user_email" />
                                    </div>
                                    <div className="form-input">
                                        <textarea placeholder={textData.messagePlaceholder} className="textarea" name="user_message" />
                                    </div>
                                    <button className="btn-common" type="submit">{textData.submit}</button>
                                </form>
                                {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
                                {successMessage && <div className="error-message" style={{ color: 'green' }}>{successMessage}</div>}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="connect">
                    <div className="main-wrapper">
                        <div className="connect-title">
                            <h2 className="title">{textData.letsTalkOverCoffee}</h2>
                        </div>
                        <div className="connect-main">
                            <div className="connect-body">
                                <div className="map-box">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.231473078393!2d10.841315276934159!3d59.92830116293287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd150a3273b%3A0xeb0005b15b49be33!2sM%20%26%20N%20Regnskap%20DA!5e0!3m2!1sno!2sno!4v1712682261082!5m2!1sno!2sno"
                                        width="600"
                                        height="450"
                                        style={{ border: "0" }}
                                        allowfullscreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                                <div className="connect-detail">
                                    <div className="detail-item">
                                        <h3 className='detail-item-h3'>{textData.headOffice}</h3>
                                        <span>{textData.officeAddress}</span>
                                    </div>
                                    <div className="detail-item">
                                        <h4 className='detail-item-h4'>{textData.callUs}</h4>
                                        <span>{textData.phoneNumber}</span>
                                    </div>
                                    <div className="detail-item fax">
                                        <span>{textData.email}</span>
                                    </div>
                                    <h4  className='detail-item-h4' >{textData.organizationNumber}</h4>
                                    <a  className="support-card-a" href={`mailto:${textData.email}`}>{textData.organizationNumberValue}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Contact;