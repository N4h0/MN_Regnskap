import "./Link.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import en from "../languages/en.json"; // English language data
import no from "../languages/no.json"; // Norwegian language data
import { useContext } from "react";
import { LanguageContext } from "../languages/LanguageContext";

const PDF_FILE_URL = "https://n4h0.github.io/MN_Regnskap/kasseoppgjor.pdf";
const EXCEL_FILE_URL1 = "https://n4h0.github.io/MN_Regnskap/kassetelling.xlsx";
const EXCEL_FILE_URL2 = "https://n4h0.github.io/MN_Regnskap/ny_kassebok.xlsx";
const EXCEL_FILE_URL3 = "https://n4h0.github.io/MN_Regnskap/Firmabil_beregning_av_fordel.xlsx";
const EXCEL_FILE_URL4 = "https://n4h0.github.io/MN_Regnskap/Omsetningsrapport.xlsx";

function Frist() {
  const { language } = useContext(LanguageContext); // Use useContext to access the current language
  const textData = language === "norsk" ? no : en;

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
        <h1 className="accounting-deadlines-title">{textData.deadlinesTitle}</h1>
        <div className="accounting-box">
          <h2 className="accounting-box-title">{textData.annualAccountingDeadlinesTitle}</h2>
          <p className="accounting-box-text">{textData.annualAccountingDeadlinesText}</p>
        </div>
        <div className="accounting-box">
          <h3 className="accounting-box-h3">{textData.shareholderDeclarationTitle}</h3>
          <p className="accounting-box-text">
            <strong>{textData.deadline}</strong> {textData.shareholderDeclarationDeadline}
          </p>
          <p className="accounting-box-text">
            <strong>{textData.who}</strong> {textData.shareholderDeclarationFor}
          </p>
        </div>
        <div className="accounting-box">
          <h3 className="accounting-box-h3">{textData.VATDeadlinesTitle}</h3>
          <p className="accounting-box-text">
            <strong>{textData.VATDeadlineBiMonthly}</strong>
          </p>
          <p className="accounting-box-text">
            <strong>{textData.deadline}</strong> {textData.VATDeadlineBiMonthlyDates}
          </p>
          <p className="accounting-box-text">
            <strong>{textData.who}</strong> {textData.VATDeadlineBiMonthlyFor}
          </p>
          <p className="mva-paragraph">
            <strong>{textData.VATDeadlineAnnual}</strong>
          </p>
          <p className="accounting-box-text">
            <strong>{textData.deadline}</strong> {textData.VATDeadlineAnnualDate}
          </p>
          <p className="accounting-box-text">
            <strong>{textData.who}</strong> {textData.VATDeadlineAnnualFor}
          </p>
          <p className="accounting-box-text">{textData.VATAnnualNote}</p>
        </div>
        <div className="accounting-box">
          <h3 className="accounting-box-h3">{textData.employmentDeclarationTitle}</h3>
          <p className="accounting-box-text">
            <strong>{textData.deadline}</strong> {textData.employmentDeclarationDeadline}
          </p>
          <p className="accounting-box-text">
            <strong>{textData.who}</strong> {textData.employmentDeclarationFor}
          </p>
        </div>
        <div className="accounting-box">
          <h3 className="accounting-box-h3">{textData.advanceTaxTitle}</h3>
          <p className="accounting-box-text">
            <strong>{textData.deadline} for ENK:</strong> {textData.advanceTaxDeadlineForSoleProprietorship}
          </p>
          <p className="accounting-box-text">
            <strong>{textData.deadline} for AS:</strong> {textData.advanceTaxDeadlineForCorporation}
          </p>
          <p className="accounting-box-text">
            <strong>{textData.who}</strong> {textData.advanceTaxFor}
          </p>
        </div>
      </article>
      <div className="download-boks">
        <h3 className="download-boks-h3">{textData.formsforaccounting}</h3>
        <div className="download-section">
          <ul className="download-links">
            {[
              { url: PDF_FILE_URL, label: textData.cashReconciliation },
              { url: EXCEL_FILE_URL1, label: textData.cashCounting },
              { url: EXCEL_FILE_URL2, label: textData.cashBook },
              { url: EXCEL_FILE_URL3, label: textData.companyCar },
              { url: EXCEL_FILE_URL4, label: textData.salesReport }
            ].map(item => (
              <li key={item.url}>
                <a href={item.url} onClick={(event) => {
                  event.preventDefault();
                }}>
                  <FontAwesomeIcon icon={faDownload} /> {/* FontAwesome ikonet her */}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Frist;
