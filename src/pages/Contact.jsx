/* import React, { useState } from 'react'; */
import emailjs from '@emailjs/browser'; // Importer emailjs
import './Contact.css';
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../languages/LanguageContext';

function Contact() {
    const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket

    // const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

    // Funksjon for å sende e-post via emailjs
    const sendEmail = (e) => {
        e.preventDefault();

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
                    e.target.user_name.value = '';
                    e.target.user_email.value = '';
                    e.target.user_message.value = '';
                },
                (error) => {
                    console.log('Noe gikk galt:', error.text);
                },
            );
    };
    const textData = language === 'norsk' ? no : en;


    return (
        <>
            <div className="contact-us-page">
                <section className="hero-content">
                    <div className="main-wrapper">
                        <div className="hero-body">
                            <div className="hero-text">
                                <h1 className="hero-heading">{textData.contactPageTitle}</h1>
                                <p>{textData.contactPageDescription}</p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="main-wrapper">
                        <div className="supports">
                            <div className="support-card first">
                                <img src="./phone.png" className="support-card-image" />
                                <h4>{textData.talkToUs}</h4>
                                <span>{textData.yourFeedbackIsImportant}</span>
                                <a href={`tel:${textData.phoneNumber}`}>{textData.phoneNumber}</a>
                                <h4>{textData.whenInNeed}</h4>
                                <span>{textData.helpFromFriends}</span>
                            </div>
                            <div className="support-card second">
                                <img src="./message.png" className="support-card-image" alt="Melding" />
                                <h4>{textData.requestConsultation}</h4>
                                <span>{textData.concentrateOnWhatYouDoBest}</span>
                                <form onSubmit={sendEmail}>
                                    <div className="form-input">
                                        <input type="text" className="input-name" placeholder={textData.namePlaceholder} name="user_name" />
                                    </div>
                                    <div className="form-input">
                                        <input type="email" className="input-email" placeholder={textData.emailPlaceholder} name="user_email" />
                                    </div>
                                    <div className="form-input">
                                        <textarea placeholder={textData.messagePlaceholder} name="user_message" />
                                    </div>
                                    <button className="btn-common" type="submit">{textData.submit}</button>
                                </form>
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
                                        <h3>{textData.headOffice}</h3>
                                        <span>{textData.officeAddress}</span>
                                    </div>
                                    <div className="detail-item">
                                        <h5>{textData.callUs}</h5>
                                        <span>{textData.phoneNumber}</span>
                                    </div>
                                    <div className="detail-item fax">
                                        <span>{textData.email}</span>
                                    </div>
                                    <h5>{textData.organizationNumber}</h5>
                                    <a href={`mailto:${textData.email}`}>{textData.organizationNumberValue}</a>
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