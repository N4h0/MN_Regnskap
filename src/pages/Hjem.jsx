import { useContext, useEffect } from 'react';
import { LanguageContext } from '../languages/LanguageContext'; 
import './Hjem.css';
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata

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
            <div className="møtOssSeksjon">
                <Møtoss language={language} />
            </div>
            <div className="kontaktSeksjon">
                <Kontakt language={language} />
            </div>
        </>
    );
}

function Bildet({ language }) {
    const textData = language === 'norsk' ? no : en;

    return (
        <>
            <img src="/kontor.jpeg" alt="" className="img-style" />
            <div className="bildeTekst">
                <h1>M&N</h1>
                <h1>{textData.regnskap}</h1>
                <h2>{textData.home_page_text}</h2>
                <a href="/om">
                    <button className="bildeKnapp">{textData.more_info}</button>
                </a>
            </div>
        </>
    );
}


function Regnskap({ language }) {
    const textData = language === 'norsk' ? no : en;

    return (
        <>
            <h2>{textData.ambitions_expertise}</h2>
            <div className="regnskapsBoks">
                <div className="regnskapsKort">
                    <img src="/kalk.png" alt="" loading="lazy" />
                    <h3>{textData.accounting}</h3>
                    <p>{textData.accounting_description}</p>
                </div>
                <div className="regnskapsKort">
                    <img src="/regn1.jpg" alt="" loading="lazy" />
                    <h3>{textData.advice}</h3>
                    <p>{textData.advice_description}</p>
                </div>
                <div className="regnskapsKort">
                    <img src="/regn2.jpg" alt="" loading="lazy" />
                    <h3>{textData.tax_return}</h3>
                    <p>{textData.tax_return_description}</p>
                </div>
                <div className="regnskapsKort">
                    <img src="/regn3.png" alt="" loading="lazy" />
                    <h3>{textData.budgeting}</h3>
                    <p>{textData.budgeting_description}</p>
                </div>
            </div>
            <div className='siste-container'>
                    <a className="regnskapsKnapp" href="/team">
                        <span className="regnskapsKnappTekst">{textData.more_info}</span>
                    </a>
            </div> 
        </>
    );
}

function Partnere({ language }) {
    const textData = language === 'norsk' ? no : en;
    // Bruk useEffect til å kjøre JavaScript-koden ved lasting av komponenten
    useEffect(() => {
        $(document).ready(function () {
            $('.customer-logos').slick({
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
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 529,
                        settings: {
                            slidesToShow: 3   
                        }
                    },
                    {
                        breakpoint: 281, 
                        settings: {
                            slidesToShow: 1 // Viser kun 1 logo for skjermer ≤ 281px
                        }
                    }
                ]
            });
        });
    }, []);


    return (
        <div className="partnereBakgrunn">
            <h2 className="partner-tittel">{textData.our_partner}</h2>
            <section className="customer-logos bilder">
                <div className="bildet"><img src="./adidas.png" alt="logo" /></div>
                <div className="bildet"><img src="./facebook.png" alt="logo" /></div>
                <div className="bildet"><img src="./google.png" alt="logo" /></div>
                <div className="bildet"><img src="./instagram.png" alt="logo" /></div>
                <div className="bildet"><img src="./nike.png" alt="logo" /></div>
                <div className="bildet"><img src="./twitter.png" alt="logo" /></div>
                <div className="bildet"><img src="./uber.png" alt="logo" /></div>
                <div className="bildet"><img src="./youtube.png" alt="logo" /></div>
            </section>
        </div>
    );
}
function Møtoss({ language }) {
    const textData = language === 'norsk' ? no : en;

    return (
    <>
            <h1>{textData.meet_us }</h1>
        <div className="kontaktOssBoks">
            <div className="kontaktOssKort">
                <img src="./Moosa.png" alt="Bilde av Moosa, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)" />
                <h1>MOOSA ALI RASHID</h1>
                    <p>{textData.charted_accountant}</p>
            </div>
            <div className="kontaktOssKort">
                <img src="./Naila.png" alt="Bilde av Naila, en av grunnleggerne av M&N Regnskap (Statsautorisert regnskapsfører)" />
                <h1>NAILA SOHAIL KHOKHAR</h1>
                    <p>{textData.charted_accountant}</p>
            </div>
        </div>
        </>
    );
}

function Kontakt({ language }) {
    const textData = language === 'norsk' ? no : en;

    return (
    <>
        <div className="kontaktBilde">
            <img src="./bok-2.jpg" alt="Bakgrunnsbilde av noen regnskapsbøker som ligger oppå hverandre." />
            <div className="kontaktTekstboks">
                    <h1>{textData.join_us}</h1>
                    <p>{textData.focus_on}</p>
                    <a href="/contact">
                        <button className="kontaktKnapp">{textData.contact_us}</button>
                    </a>
            </div>
        </div>
    </>
    );
}

export default Homepage;