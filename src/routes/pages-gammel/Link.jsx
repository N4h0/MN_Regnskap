import './Link.css';
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata
import { useContext } from 'react';
import { LanguageContext } from '../languages/LanguageContext';

const PDF_FILE_URL = "https://localhost:5173/file_pdf.pdf";

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
                <h1>Frister</h1>
                <div className="regnskap-boks">
                    <h4>Årets regnskapsfrister</h4>
                    <p>Det er viktig å holde styr på frister og innleveringer når det gjelder ulike regnskapsoppgaver.
                        Å holde seg oppdatert med disse fristene er avgjørende. Du finner en fullstendig liste over alle
                        aktuelle frister her.Nedenfor følger en oversikt over de viktigste og mest vanlige
                        fristene som bedriftseiere må ta hensyn til!</p>

                </div>
                <div className="regnskap-boks">
                    <h4>Aksjonærregisteroppgaven</h4>
                    <p><strong>Frist:</strong> 31. januar</p>
                    <p><strong>Hvem:</strong> Alle AS.</p>

                </div>

                <div className="regnskap-boks">
                    <h4>Mva-frister</h4>
                    <p><strong>Mva (annenhver måned)</strong></p>
                    <p><strong>Frist:</strong> 10. apr. / 10. jun. / 31. aug. / 10. okt. / 10. des. / 10. feb</p>
                    <p><strong>Hvem:</strong> Alle mva-registrerte som ikke har årlig mva.</p>

                    <p className="mva-avsnitt"><strong>Mva (årlig)</strong></p>
                    <p><strong>Frist:</strong> 10. mars</p>
                    <p><strong>Hvem:</strong> Alle som har årlig mva.</p>

                    <p>Årlig mva er noe foretak med under 1 million i årlig omsetning kan søke om.</p>

                </div>
                <div className="regnskap-boks">
                    <h4>A-melding</h4>
                    <p><strong>Frist:</strong> Hver måned (innen den 5. påfølgende måned).</p>
                    <p><strong>Hvem:</strong> Alle som utbetaler lønn.</p>
                </div>

                <div className="regnskap-boks">
                    <h4>Forskuddsskatt</h4>
                    <p><strong>Frist for ENK:</strong> 15. mar. / 15. jun. / 15. sept. / 15. des.</p>
                    <p><strong>Frist for AS:</strong> 15. feb. / 15. apr.</p>
                    <p><strong>Hvem:</strong> Alle skattepliktige.</p>
                </div>



            </article>
            <div className="link">
                <h2>Important links</h2>
                <ul>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 1</a></li>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 2</a></li>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 3</a></li>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 4</a></li>
                    <li><a href={PDF_FILE_URL} onClick={(event) => { event.preventDefault(); downloadFileAtURL(PDF_FILE_URL); }}>Download PDF file 5</a></li>
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
