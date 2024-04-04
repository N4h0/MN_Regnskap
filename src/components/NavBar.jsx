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
                    <img src="/mn-regnskaplogo.png" alt="M&N Regnskap Logo" />
                </div>

                <div className="right-aligned-items">
                    <Link to="/hjem" className="navTekst">{labels.home}</Link>
                    <Link to="/team" className="navTekst">{labels.about}</Link>
                    <Link to="/link" className="navTekst">{labels.deadlines}</Link>
                    <Link to="/contact" className="navTekst">{labels.contact_us}</Link>
                    <div className="dropDown" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <a className="navTekst">{language === 'norsk' ? 'Norsk' : 'Engelsk'} <FontAwesomeIcon icon={this.state.isMenuOpen ? faChevronUp : faChevronDown} /></a>
                        {this.state.isMenuOpen && (
                            <div className="dropDownContent">
                                <button onClick={() => this.context.setLanguage('english')} className="text-dark nav-link">{labels.english}</button>
                                <button onClick={() => this.context.setLanguage('norsk')} className="text-dark nav-link">{labels.norwegian}</button>
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
