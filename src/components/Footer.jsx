import "./Footer.css";
import { useContext } from "react";
import { LanguageContext } from "../languages/LanguageContext";
import en from "../languages/en.json"; // Engelsk språkdata
import no from "../languages/no.json"; // Norsk språkdata

function Footer() {
  const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket

  return (
    <footer className="footer">
      <div className="top-kontainer">
        <div>
          <Godkjenn language={language} />
        </div>
        <div>
          <ContactInfo language={language} />
        </div>
      </div>
      <div>
        <Copyright language={language} />
      </div>
    </footer>
  );
}

function Godkjenn({ language }) {
  const textData = language === "norsk" ? no : en;

  return (
    <div className="kontaktinfo">
      <h1 className="footer_h1">{textData.approvals}</h1>
      <div>
        <img
          width="290"
          height="145"
          src="./FooterLogo2.WebP"
          alt="logo til medlem av norge "
        />
      </div>
    </div>
  );
}

function ContactInfo({ language }) {
  const textData = language === "norsk" ? no : en;
  return (
    <div className="kontaktinfo">
      <h1 className="footer_h1">{textData.get_in_touch}</h1>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ikon"
          width="15px"
          height="15px"
          viewBox="0 0 496 512"
        >
          <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
        </svg>
        <span className="link">Vollaveien 20 A, 0668 Oslo</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ikon"
          width="15px"
          height="15px"
          viewBox="0 0 512 512"
        >
          <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
        </svg>
        <a className="link" href="tel:4740056898">+47-400-56-898</a>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ikon"
          width="15px"
          height="15px"
          viewBox="0 0 512 512"
        >
          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
        </svg>
        <a className="link" href="mailto:mn@mnregnskap.no">mn@mnregnskap.no</a>
      </div>
    </div>
  );
}

function Copyright({ language }) {
  const textData = language === "norsk" ? no : en;

  return (
    <div className="copyright">
      <p className="copyright_text">
        {textData.copyright} {new Date().getFullYear()}.&nbsp;
      </p>
      <p className="copyright_text">M&N Regnskap. All rights reserved</p>
    </div>
  );
}

export default Footer;
