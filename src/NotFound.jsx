import { useRouteError } from "react-router-dom";
import './NotFound.css';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

  return (
    <div className="container">
      <div className="text-container">
        <h1><span className="with-line" >4</span>04</h1>
        <p><span className="uh-oh"> Uh oh!</span> ... Ser ut som at noen har bokført denne siden på feil konto! Men fortvil ikke, vi hjelper deg med å balansere 
          bøkene igjen. Bruk menyen for å finne veien tilbake:</p>
          <div className="logo-container">
            <a href="/hjem">
              <img src="/MN_Regnskap/logo1.png" alt="Hjem" className="logo1" />
            </a>
            <a href="/chatbot">
              <img src="/MN_Regnskap/logo2.png" alt="logo 2" className="logo2" />
            </a>
            <a href="/contact">
              <img src="/MN_Regnskap/logo3.png" alt="logo 3" className="logo3" />  
            </a>
        </div>
      </div>
      <div className="image-container">
        <img src="/MN_Regnskap/tyv.png" alt="tyv" className="tyv-picture" />
      </div>
    </div>
  );
};