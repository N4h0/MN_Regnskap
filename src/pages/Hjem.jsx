import { useContext, useEffect } from "react";
import { LanguageContext } from "../languages/LanguageContext";
import { Link } from "react-router-dom";

import "./Hjem.css";
import en from "../languages/en.json"; // Engelsk språkdata
import no from "../languages/no.json"; // Norsk språkdata

function scrollToTop() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
}

function Homepage() {
  const { language } = useContext(LanguageContext); // Bruk useContext for å få tilgang til det nåværende språket

  return (
    <>
      <div className="bildeSeksjon">
        <Bildet language={language} />
      </div>
      <div className="regnskapsSeksjon">
        <Regnskap language={language} />
      </div>
      <div className="partnereSeksjon">
        <Partnere language={language} />
      </div>
      <div className="teamSeksjon">
        <Møtoss language={language} />
      </div>
      <div className="kontaktSeksjon">
        <Kontakt language={language} />
      </div>
    </>
  );
}

function Bildet({ language }) {
  const textData = language === "norsk" ? no : en;

  return (
    <>
      <img src="./HjemMainCompK.jpg" alt="" className="img-style" />
      <div className="picture-text">
        <h1 className="picture-h1">{textData.regnskap}</h1>
        <h2 className="picture-h2">{textData.home_page_text}</h2>
        <Link to="/om-oss">
          <button className="picture-button" onClick={scrollToTop}>
            {textData.about_us}
          </button>
        </Link>
      </div>
    </>
  );
}

function Regnskap({ language }) {
  const textData = language === "norsk" ? no : en;

  return (
    <>
      <h2>{textData.ambitions_expertise}</h2>
      <div className="regnskapsBoks">
        <Link to="/tjenester" className="regnskapsKort">
          <img src="./HjemKort1.WebP" alt="" loading="lazy" />
          <h3 className="regnskapsKort-h3">{textData.accounting}</h3>
          <p className="regnskapsKort-p">{textData.accounting_description}</p>
        </Link>
        <Link to="/tjenester" className="regnskapsKort">
          <img src="./HjemKort2.WebP" alt="" loading="lazy" />
          <h3 className="regnskapsKort-h3">{textData.advice}</h3>
          <p className="regnskapsKort-p">{textData.advice_description}</p>
        </Link>
        <Link to="/tjenester" className="regnskapsKort">
          <img src="./HjemKort3.Webp" alt="" loading="lazy" />
          <h3 className="regnskapsKort-h3">{textData.salary}</h3>
          <p className="regnskapsKort-p">{textData.salary_description}</p>
        </Link>
        <Link to="/tjenester" className="regnskapsKort">
          <img src="./HjemKort4.WebP" alt="" loading="lazy" />
          <h3 className="regnskapsKort-h3">{textData.tax_return}</h3>
          <p className="regnskapsKort-p">{textData.tax_return_description}</p>
        </Link>
      </div>
      <div className="siste-container">
        <Link className="regnskapsKnapp" to="/tjenester">
          <span className="regnskapsKnappTekst" onClick={scrollToTop}>
            {textData.more_info}
          </span>
        </Link>
      </div>
    </>
  );
}

function Partnere({ language }) {
  const textData = language === "norsk" ? no : en;
  // Bruk useEffect til å kjøre JavaScript-koden ved lasting av komponenten
  useEffect(() => {
    $(document).ready(function () {
      $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 529,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 281,
            settings: {
              slidesToShow: 1, // Viser kun 1 logo for skjermer ≤ 281px
            },
          },
        ],
      });
    });
  }, []);

  return (
    <div className="partnerBakgrunn">
      <h2 className="partner-tittel">{textData.our_partner}</h2>
      <section className="customer-logos bilder">
        <div className="bildet">
          <a
            href="https://newdelhi.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./NewDelhi.WebP" alt="New Delhi logo" />
          </a>
        </div>
        <div className="bildet">
          <a
            href="https://www.masalapolitics.no/?gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH53-Z1aKvYmQJG_BJj_xwWEKJM8jl2dqkMNMPt34kACI5SlTFKfzaZsaAqGEEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./MasalaPolitics.WebP" alt="Masala Politics logo" />
          </a>
        </div>
        <div className="bildet">
          <a
            href="https://snappys.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Snappys.WebP" alt="Snappys logo" />
          </a>
        </div>
        <div className="bildet">
          <a
            href="https://bighorn.no/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./BigHornSteak.WebP" alt="Big Horn Steak logo" />
          </a>
        </div>
        <div className="bildet">
          <a
            href="https://takeitfrombaljit.no/?fbclid=IwAR0wmFMfXblrbUNLlzOqQuBBK7aAN1tls1UKwqCFQPeQRJ_au18rIvHFzA8_aem_Aa0LcFb5CLXNnyDEpiFm-pGGlM13nD5ImmACsHtxuoxRQj4wS7wPefXvN_QOw8xUlB3RD3l3JUsvc5v26yiKGp5O"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Baljit2.WebP" alt="Baljit2 logo" />
          </a>
        </div>
        <div className="bildet">
          <a
            href="https://listentobaljit.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Baljit.WebP" alt="Baljit logo" />
          </a>
        </div>
        <div className="bildet">
          <a
            href="https://www.carwash.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./CarWash.WebP" alt="Car Wash logo" />
          </a>
        </div>
      </section>
    </div>
  );
}
function Møtoss({ language }) {
  const textData = language === "norsk" ? no : en;

  return (
    <>
      <div className="contact-box">
        <div className="contact-header">
          <h2 className="contact-header-h2">{textData.meet_us}</h2>
        </div>
        <div className="contact-card">
          <img
            className="contact-img"
            src="./MoosaRundComp.webp"
            alt="Bilde av Moosa, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)"
          />
          <h2 className="contact-card-h2">MOOSA ALI RASHID</h2>
          <p className="contact-card-p">{textData.charted_accountant}</p>
        </div>
        <div className="contact-card">
          <img
            className="contact-img"
            src="./NailaRundComp.webp"
            alt="Bilde av Naila, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)"
          />
          <h2 className="contact-card-h2">NAILA SOHAIL KHOKHAR</h2>
          <p className="contact-card-p">{textData.charted_accountant}</p>
        </div>
      </div>
    </>
  );
}

function Kontakt({ language }) {
  const textData = language === "norsk" ? no : en;

  return (
    <>
      <div className="contact-picture">
        <img
          src="./HjemsideKontaktOssComp.webp"
          alt="Bakgrunnsbilde av noen regnskapsbøker som ligger oppå hverandre."
        />
        <div className="contact-pic-text">
          <h1>{textData.join_us}</h1>
          <p>{textData.focus_on}</p>
          <Link to="/kontakt">
            <button className="kontaktKnapp" onClick={scrollToTop}>
              {textData.contact_us}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
