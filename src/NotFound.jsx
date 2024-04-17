import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="full-page-wrapper">
            {/* Container for innhold som skal vises over bakgrunnsbildet */}
            <div className="content-container">
                {/* Tekst og logoer */}
                <div className="text-container">
                    <h1><span className="with-line">4</span>04</h1>
                    <p><span className="uh-oh">Uh oh!</span> ... Ser ut som at noen har bokført denne siden på feil konto! Men fortvil ikke, vi hjelper deg med å balansere bøkene igjen. Bruk menyen for å finne veien tilbake:</p>
                    <div className="logo-container">
                        <Link to="/MN_Regnskap/hjem">
                            <img src="./logo1.png" alt="Hjem" className="logo1" />
                        </Link>
                        <Link to="/MN_Regnskap/chatbot">
                            <img src="./logo2.png" alt="logo 2" className="logo2" />
                        </Link>
                        <Link to="/MN_Regnskap/kontakt">
                            <img src="./logo3.png" alt="logo 3" className="logo3" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bakgrunnsbilde */}
            <img src="./404.jpg" alt="bakgrunnsbilde" className="background-image" />

            {/* Container for sentrert bilde */}
        </div>
    );
};

export default NotFound;