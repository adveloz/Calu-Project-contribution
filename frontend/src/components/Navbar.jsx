import "../static/navbar.css"
import colorLogo from "../static/media/color-logo.png"
import logo from "../static/media/logo.svg"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStore from './store';
// import GoogleTranslate from "./GoogleTranslate";       

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { currentPage, setCurrentPage } = useStore();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        const linkSet = document.querySelectorAll("#nav-bar-link-list ul li")
        for( let i = 0 ; i < linkSet.length; i++){
            if(currentPage !== linkSet[i].textContent){
                linkSet[i].style.borderBottom = "0"
            }
            else{
                linkSet[i].style.borderBottom = "2px solid #FE6D36"
            }
        }    
    }, [location, currentPage]);

    const pageMarker = (page)=>{
        setCurrentPage(page)
    }
    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    const scrollEvent = (e)=>{
        if(window.location.pathname === "/"){
            const navbar = document.getElementById("nav-bar");
            const logoWhite = document.getElementById("white-logo");
            const logoColor = document.getElementById("color-logo");
            const navBarLinks = document.querySelectorAll("#nav-bar-link-list a");
            const bars = document.querySelector("#bars");
            

            if(window.scrollY > 50){
                bars.style.fill = "#FE6D36";
                navbar.style.backgroundColor = "#FFF";
                navbar.style.color = "#000";
                navbar.style.boxShadow = "0 0 10px #ddd";
                logoWhite.style.display = "none";
                logoColor.style.display = "inline-block";
                for (let i = 0; i < navBarLinks.length; i++){
                    navBarLinks[i].style.color = "#000";
                }
            }
            else{
                bars.style.fill = "#fff";
                navbar.style.backgroundColor = "rgba(255, 255, 255, 0.099";
                navbar.style.color = "#fff";
                navbar.style.boxShadow = "0 0 0 transparent";
                logoWhite.style.display = "inline-block";
                logoColor.style.display = "none";
                for (let i = 0; i < navBarLinks.length; i++){
                    navBarLinks[i].style.color = "#fff";
                }
            }
        }
    }
    const showSideBar = ()=>{
        const sideBar = document.querySelector("#mobile-nav-bar");
        sideBar.style.left = "0";
    }
    const hideSideBar = ()=>{
        const sideBar = document.querySelector("#mobile-nav-bar");
        sideBar.style.left = "-200vw";
    }
    window.addEventListener('scroll', scrollEvent);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="nav-bar-container">
            <div id="mobile-nav-bar">
                    <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="12vw"
                        width="12vw"
                        id="mobile-back-button"
                        onClick = {hideSideBar}
                        >
                        <path
                        fillRule="evenodd"
                        d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                        />
                    </svg>
                    <img src= {colorLogo} alt="CalJ Logo" id = "mobile-color-logo"/>
                    <div id = "mobile-nav-bar-link-list">
                        <ul>
                            <Link to="/">
                                <li>{t('nav.home')}</li>
                            </Link>
                            <a href="#services-section">
                                <li>{t('nav.services')}</li>
                            </a>
                            <Link to="/props">
                                <li>{t('nav.properties')}</li>
                            </Link>
                            <Link to="/about">
                                <li>{t('nav.about')}</li>
                            </Link>
                            <Link to="/contact">
                                <li>{t('nav.contact')}</li>
                            </Link>
                            <Link to="/faq">
                                <li>{t('nav.faq')}</li>
                            </Link>
                            <Link to= "/privacy">
                                <li>{t('nav.privacy')}</li>
                            </Link>
                            <Link to= "/conditions">
                                <li>{t('nav.conditions')}</li>
                            </Link>
                        </ul>
                    </div>
                       {/* Idioma switcher en mobile */}
                {/* <div className="language-switcher">
                    <button onClick={() => handleLanguageChange({ target: { value: 'es' } })}>🇪🇸</button>
                    <button onClick={() => handleLanguageChange({ target: { value: 'en' } })}>🇬🇧</button>
                    <button onClick={() => handleLanguageChange({ target: { value: 'it' } })}>🇮🇹</button>
                </div> */}
                {/* <GoogleTranslate/> */}
            </div>
            <div id = "nav-bar">
                <div id = "nav-bar-logo"><img src= {logo} alt="CalJ Logo" id = "white-logo"/><img src= {colorLogo} alt="CalJ Logo" id = "color-logo"/><h4>{t('nav.slogan')}</h4></div>
                <svg
                        viewBox="0 0 448 512"
                        fill="#fff"
                        height="6vw"
                        width="6vw"
                        id="bars"
                        onClick = {showSideBar}
                        >
                        <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                </svg>
                <div id = "nav-bar-link-list">
                    <ul>
                        <Link to="/" onClick = {()=>{pageMarker("Inicio"); window.scrollTo(0, 0);}}>
                            <li>{t('nav.home')}</li>
                        </Link>
                        <Link to="/#service-section-title" onClick = {()=>{pageMarker("Servicios"); window.scrollTo(0, 0);}}>
                            <li>{t('nav.services')}</li>
                        </Link>
                        <Link to="/props" onClick = {()=>{pageMarker("Todas las propiedades"); window.scrollTo(0, 0);}}>
                            <li>{t('nav.properties')}</li>
                        </Link>
                        <Link to="/about" onClick = {()=>{pageMarker("Sobre nosotros"); window.scrollTo(0, 0);}}>
                            <li>{t('nav.about')}</li>
                        </Link>
                        <Link to="/contact" onClick = {()=>{pageMarker("Contactos"); window.scrollTo(0, 0);}}>
                            <li>{t('nav.contact')}</li>
                        </Link>
                        <Link to="/faq" onClick = {()=>{pageMarker("Preguntas frecuentes"); window.scrollTo(0, 0);}}>
                            <li>{t('nav.faq')}</li>
                        </Link>
                    </ul>
                </div>
                {/* <GoogleTranslate/> */}
                 {/* Idioma switcher en desktop */}
                 {/* <div className="language-switcher">
                    <button onClick={() => handleLanguageChange({ target: { value: 'es' } })}>🇪🇸</button>
                    <button onClick={() => handleLanguageChange({ target: { value: 'en' } })}>🇬🇧</button>
                    <button onClick={() => handleLanguageChange({ target: { value: 'it' } })}>🇮🇹</button>
                </div> */}
                 {/* <GoogleTranslate/> */}
            </div>
        </div>
    );
}

export default Navbar