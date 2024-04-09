import './Link.css';
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata
import { useContext} from 'react';
import { LanguageContext } from '../languages/LanguageContext';

const PDF_FILE_URL = "https://localhost:5173/kasseoppgjor.pdf";
const EXCEL_FILE_URL1 = "https://localhost:5173/kassetelling.xlsx";
const EXCEL_FILE_URL2 = "https://localhost:5173/ny_kassebok.xlsx";
const EXCEL_FILE_URL3 = "https://localhost:5173/Firmabil_beregning_av_fordel.xlsx";
const EXCEL_FILE_URL4 = "https://localhost:5173/Omsetningsrapport.xlsx";



function Frist() {
    // Bestemmer hvilket språkdata som skal brukes basert på den nåværende språkinnstillingen
    const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket

    const downloadFileAtURL = (url) => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]));
                const fileName = url.split("/").pop();
                const aTag = document.createElement("a");
                aTag.href = blobURL;
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            });
    };
    const textData = language === 'norsk' ? no : en;

    return (
        <>
            <article className="accounting-deadlines">
                <h1>{textData.deadlinesTitle}</h1>
                <div className="regnskap-boks">
                    <h2>{textData.annualAccountingDeadlinesTitle}</h2>
                    <p>{textData.annualAccountingDeadlinesText}</p>

                </div>
                <div className="regnskap-boks">
                    <h2>{textData.shareholderDeclarationTitle}</h2>
                    <p><strong>{textData.deadline}</strong> {textData.shareholderDeclarationDeadline}</p>
                    <p><strong>{textData.who}</strong> {textData.shareholderDeclarationFor}</p>
                </div>


                <div className="regnskap-boks">
                    <h3>{textData.VATDeadlinesTitle}</h3>
                    <p><strong>{textData.VATDeadlineBiMonthly}</strong></p>
                    <p><strong>{textData.deadline}</strong> {textData.VATDeadlineBiMonthlyDates}</p>
                    <p><strong>{textData.who}</strong> {textData.VATDeadlineBiMonthlyFor}</p>

                    <p className="mva-avsnitt"><strong>{textData.VATDeadlineAnnual}</strong></p>
                    <p><strong>{textData.deadline}</strong> {textData.VATDeadlineAnnualDate}</p>
                    <p><strong>{textData.who}</strong> {textData.VATDeadlineAnnualFor}</p>

                    <p>{textData.VATAnnualNote}</p>
                </div>
                <div className="regnskap-boks">
                    <h3>{textData.employmentDeclarationTitle}</h3>
                    <p><strong>{textData.deadline}</strong> {textData.employmentDeclarationDeadline}</p>
                    <p><strong>{textData.who}</strong> {textData.employmentDeclarationFor}</p>
                </div>
                <div className="regnskap-boks">
                    <h3>{textData.advanceTaxTitle}</h3>
                    <p><strong>{textData.deadline} for ENK:</strong> {textData.advanceTaxDeadlineForSoleProprietorship}</p>
                    <p><strong>{textData.deadline} for AS:</strong> {textData.advanceTaxDeadlineForCorporation}</p>
                    <p><strong>{textData.who}</strong> {textData.advanceTaxFor}</p>
                </div>


            </article>
            <div className="download-boks">

                <h3>{textData.formsforaccounting} </h3>

                <div class="download-section">

                    <ul class="download-links">
                        <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Kasseoppgjør (pdf) </a></li>
                        <li><a href={EXCEL_FILE_URL1} onClick={(event) => { event.preventDefault(); downloadFileAtURL(EXCEL_FILE_URL1); }}>Kassetelling (excel) </a></li>
                        <li><a href={EXCEL_FILE_URL2} onClick={(event) => { event.preventDefault(); downloadFileAtURL(EXCEL_FILE_URL2); }}>Kassebok (excel) </a></li>
                        <li><a href={EXCEL_FILE_URL3} onClick={(event) => { event.preventDefault(); downloadFileAtURL(EXCEL_FILE_URL3); }}>Firmabil beregning av fordel (excel) </a></li>
                        <li><a href={EXCEL_FILE_URL4} onClick={(event) => { event.preventDefault(); downloadFileAtURL(EXCEL_FILE_URL4); }}>Omsetningsrapport (excel) </a></li>
                    </ul>
                </div>
            </div>


        </>
    );
}





export default Frist;
