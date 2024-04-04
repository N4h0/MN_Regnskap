import './Team.css';
import { LanguageContext } from '../languages/LanguageContext';
import { useState, useContext} from 'react';
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
            <div className='aboutIs_box'>
                <div className='aboutUs_box_hero'>
                    <div className='aboutUs_box_hero_left'>
                        <h1>{data.omOssOverskrift1} </h1>
                        <p>{data.omOssBrødtekst1}</p>
                        <p>{data.omOssBrødtekst2}</p>
                    </div>
                    <div className='aboutUs_box_hero_right'>
                        <div className="bilde-seksjon">
                            <div className="bilde-seksjon-img">
                                <img src="/teambilde.avif" alt="" className="img-style" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aboutUs_box_hero'>
                    <div className='aboutUs_box_hero_left'>
                        <div className="bilde-seksjon">
                            <div className="bilde-seksjon-img">
                                <img src="/teambilde.avif" alt="" className="img-style" />
                            </div>
                        </div>
                    </div>
                    <div className='aboutUs_box_hero_right'>
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
                                <img src="/Moosa.png" className="team-img" alt="pic" />
                                <h3>Moosa Ali Rashid</h3>
                                <div className="team-info">
                                    <p>Chartered accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Naila Sohail Khokhar</h3>
                                <div className="team-info">
                                    <p>Chartered accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Haseeb Talib</h3>
                                <div className="team-info">
                                    <p>Accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Ibrahim Mughdal</h3>
                                <div className="team-info">
                                    <p>Accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="team-item">
                                <img src="/Naila.png" className="team-img" alt="pic" />
                                <h3>Asad Haider Khan</h3>
                                <div className="team-info">
                                    <p>Accountant</p>
                                    <p>Jeg trenger inspirasjon til hva jeg skal skrive her. Kom med ideer matess. :P </p>
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