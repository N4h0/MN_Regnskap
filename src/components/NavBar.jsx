import { Component } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Importerer ikoner fra Font Awesome
import { LanguageContext } from '../languages/LanguageContext';
import { NavLink, Link } from 'react-router-dom'; 
import en from '../languages/en.json';
import no from '../languages/no.json';

export default class NavBar extends Component {
    static contextType = LanguageContext;
    state = {
        isMenuOpen: false,
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    closeMenu = () => {
        this.setState({
            isMenuOpen: false,
        });
    };

    handleMouseEnter = () => {
        this.setState({
            isMenuOpen: true,
        });
    };

    handleMouseLeave = () => {
        this.setState({
            isMenuOpen: false,
        });
    };

    render() {
        const { language } = this.context;
        const labels = language === 'norsk' ? no : en;

        return (
            <div className={`topnav ${this.state.isMenuOpen ? 'responsive' : ''}`}>
                <div className="left-aligned-items">
                    <Link to="/MN_Regnskap/Hjem">
                        <img src="/MN_Regnskap/FirmaLogo.WebP" alt="M&N Regnskap Logo" />
                    </Link>
                </div>

                <div className="right-aligned-items">
                <NavLink to="/MN_Regnskap/Hjem" activeClassName="active" className="navTekst" onClick={this.closeMenu}>{labels.home}</NavLink>
                    <NavLink to="/MN_Regnskap/om-oss" activeClassName="active" className="navTekst" onClick={this.closeMenu}>{labels.about}</NavLink>
                    <NavLink to="/MN_Regnskap/tjenester" activeClassName="active" className="navTekst" onClick={this.closeMenu}>{labels.tjenester}</NavLink>
                    <NavLink to="/MN_Regnskap/frister" activeClassName="active" className="navTekst" onClick={this.closeMenu}>{labels.deadlines}</NavLink>
                    <NavLink to="/MN_Regnskap/kontakt" activeClassName="active" className="navTekst" onClick={this.closeMenu}>{labels.contact_us}</NavLink>
                    <div className="dropDown" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <a className="navTekst">
                            <img src={language === 'norsk' ? "/MN_Regnskap/norge.png" : "/MN_Regnskap/usa.png"} alt={language === 'norsk' ? "Norwegian Flag" : "US Flag"}  />
                            {language === 'norsk' ? 'Norsk' : 'English'} <FontAwesomeIcon icon={this.state.isMenuOpen ? faChevronUp : faChevronDown} />
                        </a>
                        {this.state.isMenuOpen && (
                            <div className="dropDownContent">
                                <button onClick={() => { this.context.setLanguage('english'); this.closeMenu();}}>
                                    <img  src="/MN_Regnskap/usa.png" alt="US Flag"/> {labels.english}
                                </button>
                                <button onClick={() => { this.context.setLanguage('norsk'); this.closeMenu();}}>
                                    <img src="/MN_Regnskap/norge.png" alt="Norwegian Flag" /> {labels.norwegian}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <a href="javascript:void(0);" className="icon" onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
        );
    }
}