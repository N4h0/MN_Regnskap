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
        isLanguageMenuOpen: false,
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    toggleLanguageMenu = () => {
        this.setState((prevState) => ({
            isLanguageMenuOpen: !prevState.isLanguageMenuOpen,
        }));
    };

    closeMenu = () => {
        this.setState({
            isMenuOpen: false,
        });
    };

    closeLanguageMenu = () => {
        this.setState({
            isLanguageMenuOpen: false,
        });
    };

    handleMouseEnter = () => {
        this.setState({ isLanguageMenuOpen: true });
    };

    handleMouseLeave = () => {
        this.setState({ isLanguageMenuOpen: false });
    };

    render() {
        const { language } = this.context;
        const labels = language === 'norsk' ? no : en;

        return (
            <div className={`topnav ${this.state.isMenuOpen ? 'responsive' : ''}`}>
                <div className="left-aligned-items">
                    <Link to="/Hjem">
                        <img src="/FirmaLogo.WebP" alt="M&N Regnskap Logo" />
                    </Link>
                </div>

                <div className="right-aligned-items">
                    <NavLink to="/Hjem" activeClassName="active" className="navTekst" onClick={this.closeMenu}>{labels.home}</NavLink>
                    <NavLink to="/om-oss" activeClassName="active" className="navTekst" onClick={this.closeMenu}>{labels.about}</NavLink>
                    <NavLink to="/tjenester" activeClassName="active" className="navTekst" onClick={this.closeMenu}>{labels.tjenester}</NavLink>
                    <NavLink to="/frister" activeClassName="active" className="navTekst" onClick={this.closeMenu} href="/MN_Regnskap/frister">{labels.deadlines}</NavLink>
                    <NavLink to="/kontakt" activeClassName="active" className="navTekst" onClick={this.closeMenu} href="/MN_Regnskap/kontakt">{labels.contact_us}</NavLink>
                    <div className="dropDown" onClick={this.openLanguageMenu} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <button className="navTekst">
                            <img src={language === 'norsk' ? "/norge.png" : "/usa.png"} alt={language === 'norsk' ? "Norwegian Flag" : "US Flag"} />
                            {language === 'norsk' ? 'Norsk' : 'English'} <FontAwesomeIcon icon={this.state.isMenuOpen ? faChevronUp : faChevronDown} />
                        </button>
                        {this.state.isLanguageMenuOpen && (
                            <div className="dropDownContent">
                                <button onClick={() => { this.context.setLanguage('english'); this.closeLanguageMenu(); }}>
                                    <img src="/usa.png" alt="US Flag" /> {labels.english}
                                </button>
                                <button onClick={() => { this.context.setLanguage('norsk'); this.closeLanguageMenu(); }}>
                                    <img src="/norge.png" alt="Norwegian Flag" /> {labels.norwegian}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <button className="icon" onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        );
    }
}