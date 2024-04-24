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
        {/* BILDET OG OVERSKRIFTEN TIL TJENESTER SIDEN */}
        <div className="hel-container">
            <div className="hel-venstre">
                <img src="MoosaTjenesterBildeComp.jpg" alt="Bilde av Moosa på tjenester siden" className="MoosaTjenesterBilde" />
            </div>
            <div className="hel-høyre">
                <h1 className="tjenesterTittel">{textData.tjenesterHeading}</h1>
                <p className="tjenesterParagraf">{textData.tjenesterParagraph}</p>
            </div>
        </div>

        {/* HER ER ALLE KORTENE SIN INFORMASJON */}
        <div className="alleKort">
            {/* FØRSTE KORT */}
            <div className="førsteBoks">
                <div className="første-kort">
                    <div className="kortInnhold">
                        <h2>{textData.firstHeading}</h2>
                        <p>{textData.firstHeadingP1}</p>
                        <p>{textData.firstHeadingP2}</p>
                    </div>
                </div>
            </div>

            {/* ANDRE KORT */}
            <div className="andreBoks">
                <div className="andre-kort">
                    <div className="kortInnhold">
                        <h2>{textData.secondHeading}</h2>
                        <p>{textData.secondHeadingP1}</p>
                        <p>{textData.secondHeadingP2}</p>                
                    </div>
                </div>
            </div>

            {/* TREDJE KORT */}
            <div className="tredjeBoks">
                <div className="tredje-kort">
                    <div className="kortInnhold">
                        <h2>{textData.thirdHeading}</h2>
                        <p>{textData.thirdHeadingP1}</p>
                        <p>{textData.thirdHeadingP2}</p>
                        <p>{textData.thirdHeadingP3}</p>
                    </div> 
                        <div className="første-andre">
                            <img src="HaseebTjenesterComp.jpg" alt="Haseeb bilde tjenester side" className="HaseebTjenesterBilde" />
                        </div>
                </div>
               
            </div>

            {/* FJERDE KORT */}
            <div className="fjerdeBoks">
                <div className="fjerde-kort">
                    <div className="kortInnhold">
                        <h2>{textData.fourthHeading}</h2>
                        <p>{textData.fourthHeadingP1}</p>
                        <p>{textData.fourthHeadingP2}</p>
                        <p>{textData.fourthHeadingP3}</p>           
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Tjenester;
