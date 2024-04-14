import './Team.css';
import { LanguageContext } from '../languages/LanguageContext';
import { useContext} from 'react';
import en from '../languages/en.json'; // Engelsk språkdata
import no from '../languages/no.json'; // Norsk språkdata

function Team() {
    const {language } = useContext(LanguageContext);
    return (
        <>
            <Test language={language } />
        </>
   )
}

function Test({ language }) {
    const data = language ==='norsk'? no:en
    return (
        <>
            <div className='aboutUs_box'>
                <div className= "aboutUs_box_hero first">
                    <div className='aboutUs_box_hero_text' style={{ gridArea: 'tekst' }}>
                        <h1>{data.omOssOverskrift1}</h1>
                        <p>{data.omOssBrødtekst1}</p>
                        <p>{data.omOssBrødtekst2}</p>
                    </div>
                    <div className='aboutUs_box_hero_image' style={{ gridArea: 'bilde' }}>
                        <div className="bilde-seksjon-img">
                            <img src="./teambilde.avif" alt="" className="img-style" />
                        </div>
                    </div>
                </div>

                <div className="aboutUs_box_hero second">
                    <div className='aboutUs_box_hero_image' style={{ gridArea: 'bilde' }}>
                        <div className="bilde-seksjon-img">
                            <img src="./teambilde2.avif" alt="" className="img-style" />
                        </div>
                    </div>
                    <div className='aboutUs_box_hero_text' style={{ gridArea: 'tekst' }}>
                        <h1>Oss</h1>
                        <p>{data.omOssBrødtekst3}</p>
                        <div className='bold-text'>
                            <p>{data.omOssBrødtekst4}</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-white">
                <h2 className="section-title">
                    {data.omOssTeam}
                </h2>
                <p className="section-subtitle"> {data.omOssOverskrift} </p>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="team-item">
                                <div class="text-center">
                                    <img src="./Moosa.jpg" class="team-img" alt="pic" />
                                </div>                                <h3>Moosa Ali Rashid</h3>
                                <div className="team-info">
                                    <p className="team-item-title">{data.CharteredAccountant}</p>
                                    <p>{data.moosa_text}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="team-item">
                                <div class="text-center">
                                    <img src="./Naila.png" className="team-img" alt="pic" />
                                </div>
                                <h3>Naila Sohail Khokhar</h3>
                                <div className="team-info">
                                    <p className="team-item-title">{data.CharteredAccountant}</p>
                                    <p> {data.naila_text} </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="team-item">
                                <img src="./Haseeb.png" className="team-img" alt="pic" />
                                <h3>Haseeb Talib</h3>
                                <div className="team-info">
                                    <p className="team-item-title">{data.CharteredAccountant}</p>
                                    <p> {data.haseeb_text} </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="team-item">
                                <img src="./Ibrahim.png" className="team-img" alt="pic" />
                                <h3>Ibrahim Mughal</h3>
                                <div className="team-info">
                                    <p className="team-item-title">{data.CharteredAccountant}</p>
                                    <p> {data.ibrahim_text} </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="team-item">
                                <img src="./Asad.png" className="team-img" alt="pic" />
                                <h3>Asad Haider Khan</h3>
                                <div className="team-info">
                                    <p className="team-item-title">{data.CharteredAccountant}</p>
                                    <p> {data.asad_text} </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <div className="team-item">
                                <img src="./Nitasha.jpg" className="team-img" alt="pic" />
                                <h3>Nitasha Khan</h3>
                                <div className="team-info">
                                    <p className="team-item-title">{data.CharteredAccountant}</p>
                                    <p> {data.nitasha_text} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team;