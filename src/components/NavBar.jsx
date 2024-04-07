import { Component } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Importerer ikoner fra Font Awesome
import { LanguageContext } from '../languages/LanguageContext';
import { Link } from 'react-router-dom';
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
                    <img src="/MN_Regnskap/mn-regnskaplogo.png" alt="M&N Regnskap Logo" />
                </div>

                <div className="right-aligned-items">
                    <Link to="/MN_Regnskap/Hjem" className="navTekst" onClick={this.closeMenu}>{labels.home}</Link>
                    <Link to="/MN_Regnskap/om-oss" className="navTekst" onClick={this.closeMenu}>{labels.about}</Link>
                    <Link to="/MN_Regnskap/frister" className="navTekst" onClick={this.closeMenu}>{labels.deadlines}</Link>
                    <Link to="/MN_Regnskap/kontakt" className="navTekst" onClick={this.closeMenu}>{labels.contact_us}</Link>
                    <div className="dropDown" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <a className="navTekst">
                            <img src={language === 'norsk' ? "/MN_Regnskap/norge.png" : "/MN_Regnskap/usa.png"} alt={language === 'norsk' ? "Norwegian Flag" : "US Flag"} style={{ marginRight: '5px' }} />
                            {language === 'norsk' ? 'Norsk' : 'Engelsk'} <FontAwesomeIcon icon={this.state.isMenuOpen ? faChevronUp : faChevronDown} />
                        </a>
                        {this.state.isMenuOpen && (
                            <div className="dropDownContent">
                                <button onClick={() => { this.context.setLanguage('english'); this.closeMenu(); }} className="text-dark nav-link">
                                    <img src="/MN_Regnskap/usa.png" alt="US Flag" style={{ marginRight: '8px' }} /> {labels.english}
                                </button>
                                <button onClick={() => { this.context.setLanguage('norsk'); this.closeMenu(); }} className="text-dark nav-link">
                                    <img src="/MN_Regnskap/norge.png" alt="Norwegian Flag" style={{ marginRight: '8px' }} /> {labels.norwegian}
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
