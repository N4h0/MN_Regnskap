import "./Team.css";
import { LanguageContext } from "../languages/LanguageContext";
import { useContext } from "react";
import en from "../languages/en.json"; // Engelsk språkdata
import no from "../languages/no.json"; // Norsk språkdata

function Team() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Test language={language} />
    </>
  );
}

function Test({ language }) {
  const data = language === "norsk" ? no : en;
  return (
    <>
      <div className="aboutUs_box">
        <div className="aboutUs_box_hero first">
          <div className="aboutUs_box_hero_text" style={{ gridArea: "tekst" }}>
            <h1 className="aboutUs-title">{data.omOssOverskrift1}</h1>
            <p className="aboutUs-text">{data.omOssBrødtekst1}</p>
            <p className="aboutUs-text">{data.omOssBrødtekst2}</p>
          </div>
          <div className="aboutUs_box_hero_image" style={{ gridArea: "bilde" }}>
            <div className="bilde-seksjon-img">
              <img src="./OmOss1Comp.webp" alt="" className="img-style" />
            </div>
          </div>
        </div>

        <div className="aboutUs_box_hero second">
          <div className="aboutUs_box_hero_image" style={{ gridArea: "bilde" }}>
            <div className="bilde-seksjon-img">
              <img src="./OmOss2Comp.webp" alt="" className="img-style" />
            </div>
          </div>
          <div className="aboutUs_box_hero_text" style={{ gridArea: "tekst" }}>
            <h1 className="aboutUs-title">{data.about}</h1>
            <p className="aboutUs-text">{data.omOssBrødtekst3}</p>
            <div className="bold-text">
              <p className="aboutUs-text">{data.omOssBrødtekst4}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="section-white">
        <h2 className="section-title">{data.omOssTeam}</h2>
        <p className="section-subtitle"> {data.omOssOverskrift} </p>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="team-item">
                <div className="text-center">
                  <img src="./MoosaComp.jpg" className="team-img" alt="pic" />
                </div>
                <h3 className="team-item-heading">Moosa Ali Rashid</h3>
                <div className="team-info">
                  <p className="team-item-title">{data.charted_accountant}</p>
                  <p className="team-info-text">{data.moosa_text}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="team-item">
                <div className="text-center">
                  <img src="./NailaComp.jpg" className="team-img" alt="pic" />
                </div>
                <h3 className="team-item-heading">Naila Sohail Khokhar</h3>
                <div className="team-info">
                  <p className="team-item-title">{data.charted_accountant}</p>
                  <p className="team-info-text"> {data.naila_text} </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="team-item">
                <div className="text-center">
                  <img src="./HaseebComp.jpg" className="team-img" alt="pic" />
                </div>
                <h3 className="team-item-heading">Haseeb Talib</h3>
                <div className="team-info">
                  <p className="team-item-title">{data.Accountant}</p>
                  <p className="team-info-text"> {data.haseeb_text} </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="team-item">
                <div className="text-center">
                  <img src="./IbrahimComp.jpg" className="team-img" alt="pic" />
                </div>
                <h3 className="team-item-heading">Ibrahim Mughal</h3>
                <div className="team-info">
                  <p className="team-item-title">{data.CharteredAccountant}</p>
                  <p className="team-info-text"> {data.ibrahim_text} </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="team-item">
                <div className="text-center">
                  <img src="./AsadComp.webp" className="team-img" alt="pic" />
                </div>
                <h3 className="team-item-heading">Asad Haider Khan</h3>
                <div className="team-info">
                  <p className="team-item-title">{data.Accountant}</p>
                  <p className="team-info-text"> {data.asad_text} </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="team-item">
                <div className="text-center">
                  <img src="./NitashaComp.jpg" className="team-img" alt="pic" />
                </div>
                <h3 className="team-item-heading">Nitasha Khan</h3>
                <div className="team-info">
                  <p className="team-item-title">{data.assistant}</p>
                  <p className="team-info-text"> {data.nitasha_text} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
