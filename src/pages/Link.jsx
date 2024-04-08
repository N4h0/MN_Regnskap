import './Link.css';
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata
import { useContext } from 'react';
import { LanguageContext } from '../languages/LanguageContext';


const PDF_FILE_URL = "https://n4h0.github.io/MN_Regnskap/kasseoppgjor.pdf";
const EXCEL_FILE_URL1 = "https://n4h0.github.io/MN_Regnskap/kassetelling.xlsx";
const EXCEL_FILE_URL2 = "https://n4h0.github.io/MN_Regnskap/ny_kassebok.xlsx";
const EXCEL_FILE_URL3 = "https://n4h0.github.io/MN_Regnskap/Firmabil_beregning_av_fordel.xlsx";
const EXCEL_FILE_URL4 = "https://n4h0.github.io/MN_Regnskap/Omsetningsrapport.xlsx";




function Link({ language }) {
    // Bestemmer hvilket språkdata som skal brukes basert på den nåværende språkinnstillingen
    const textData = language === 'no' ? no : en;

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

    return (
        <>
            <article className="accounting-deadlines">
                <h1>{textData.deadlinesTitle}</h1>
                <div className="regnskap-boks">
                    <h4>{textData.annualAccountingDeadlinesTitle}</h4>
                    <p>{textData.annualAccountingDeadlinesText}</p>

                </div>
                <div className="regnskap-boks">
                    <h4>{textData.shareholderDeclarationTitle}</h4>
                    <p><strong>{textData.deadline}</strong> {textData.shareholderDeclarationDeadline}</p>
                    <p><strong>{textData.who}</strong> {textData.shareholderDeclarationFor}</p>
                </div>


                <div className="regnskap-boks">
                    <h4>{textData.VATDeadlinesTitle}</h4>
                    <p><strong>{textData.VATDeadlineBiMonthly}</strong></p>
                    <p><strong>{textData.deadline}</strong> {textData.VATDeadlineBiMonthlyDates}</p>
                    <p><strong>{textData.who}</strong> {textData.VATDeadlineBiMonthlyFor}</p>

                    <p className="mva-avsnitt"><strong>{textData.VATDeadlineAnnual}</strong></p>
                    <p><strong>{textData.deadline}</strong> {textData.VATDeadlineAnnualDate}</p>
                    <p><strong>{textData.who}</strong> {textData.VATDeadlineAnnualFor}</p>

                    <p>{textData.VATAnnualNote}</p>
                </div>
                <div className="regnskap-boks">
                    <h4>{textData.employmentDeclarationTitle}</h4>
                    <p><strong>{textData.deadline}</strong> {textData.employmentDeclarationDeadline}</p>
                    <p><strong>{textData.who}</strong> {textData.employmentDeclarationFor}</p>
                </div>
                <div className="regnskap-boks">
                    <h4>{textData.advanceTaxTitle}</h4>
                    <p><strong>{textData.deadline} for ENK:</strong> {textData.advanceTaxDeadlineForSoleProprietorship}</p>
                    <p><strong>{textData.deadline} for AS:</strong> {textData.advanceTaxDeadlineForCorporation}</p>
                    <p><strong>{textData.who}</strong> {textData.advanceTaxFor}</p>
                </div>


            </article>

            <div class="download-section">
                <h3>{textData.formsforaccounting} </h3>
                <ul class="download-links">
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Kasseoppgjør (pdf) </a></li>
                    <li><a href={EXCEL_FILE_URL1} onClick={(event) => { event.preventDefault(); downloadFileAtURL(EXCEL_FILE_URL1); }}>Kassetelling (excel) </a></li>
                    <li><a href={EXCEL_FILE_URL2} onClick={(event) => { event.preventDefault(); downloadFileAtURL(EXCEL_FILE_URL2); }}>Kassebok (excel) </a></li>
                    <li><a href={EXCEL_FILE_URL3} onClick={(event) => { event.preventDefault(); downloadFileAtURL(EXCEL_FILE_URL3); }}>Firmabil beregning av fordel (excel) </a></li>
                    <li><a href={EXCEL_FILE_URL4} onClick={(event) => { event.preventDefault(); downloadFileAtURL(EXCEL_FILE_URL4); }}>Omsetningsrapport (excel) </a></li>
                </ul>
            </div>




        </>
    );
}


function Frist() {
    const { language } = useContext(LanguageContext);
    return <Link language={language} />;
}



export default Frist;
