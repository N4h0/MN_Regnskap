import './Tjenester.css';
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../languages/LanguageContext';

function Tjenester() {
    const { language } = useContext(LanguageContext);
    const textData = language === "norsk" ? no : en;

    return (
        <>
        <div className="hel-container">
            <div className="hel-venstre">
                <img src="MoosaTjenesterBilde.JPG" alt="Bilde av Moosa på tjenester siden" className="MoosaTjenesterBilde" />
            </div>
            <div className="hel-høyre">
                <h1 className="tjenesterTittel">{textData.tjenesterHeading}</h1>
                <p className="tjenesterParagraf">{textData.tjenesterParagraph}</p>
            </div>
        </div>

        <div className="alleKort">
            <div className="første-kort">
                <div className="kortInnhold">
                    <h2>{textData.firstHeading}</h2>
                    <p>{textData.firstHeadingP1}</p>
                    <p>{textData.firstHeadingP2}</p>
                </div>
            </div>

            <div className="andre-kort">
                <div className="kortInnhold">
                    <h2>{textData.secondHeading}</h2>
                    <p>{textData.secondHeadingP1}</p>
                    <p>{textData.secondHeadingP2}</p>                
                </div>
            </div>

            <div className="tredje-kort">
                <div className="kortInnhold">
                    <h2>{textData.thirdHeading}</h2>
                    <p>{textData.thirdHeadingP1}</p>
                    <p>{textData.thirdHeadingP2}</p>
                    <p>{textData.thirdHeadingP3}</p>
                </div>
            </div>

            <div className="fjerde-kort">
                <div className="kortInnhold">
                    <h2>{textData.fourthHeading}</h2>
                    <p>{textData.fourthHeadingP1}</p>
                    <p>{textData.fourthHeadingP2}</p>
                    <p>{textData.fourthHeadingP3}</p>           
                </div>
            </div> 
        </div>
        </>
    );
}

export default Tjenester;
