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
            <h1>{textData.tjenesterHeading}</h1>
        </>
    );
}

export default Tjenester;
