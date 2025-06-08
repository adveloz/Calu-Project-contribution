import "../static/navbar.css"
import colorLogo from "../static/media/color-logo.png"
import logo from "../static/media/logo.svg"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useStore from './store';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const location = useLocation();
    const { currentPage, setCurrentPage } = useStore();

    const showSideBar = () => {
        const sideBar = document.getElementById("mobile-nav-bar");
        sideBar.style.left = "0";
    };

    const hideSideBar = () => {
        const sideBar = document.getElementById("mobile-nav-bar");
        sideBar.style.left = "-200vw";
    };

    const pageMarker = (page) => {
        setCurrentPage(page);
    };

    const scrollEvent = () => {
        if(window.location.pathname === "/"){
            const navbar = document.getElementById("nav-bar");
            const logoWhite = document.getElementById("white-logo");
            const logoColor = document.getElementById("color-logo");
            const navBarLinks = document.querySelectorAll("#nav-bar-link-list a");
            const bars = document.querySelector("#bars");
            const languageSelect = document.querySelector(".language-select");
            
            if(window.scrollY > 100){
                navbar.style.backgroundColor = "#fff";
                navbar.style.color = "#000";
                logoWhite.style.display = "none";
                logoColor.style.display = "block";
                bars.style.fill = "#000";
                navBarLinks.forEach(link => {
                    link.style.color = "#000";
                });
                if (languageSelect) {
                    languageSelect.classList.add("scrolled");
                }
            }
            else{
                navbar.style.backgroundColor = "rgba(255, 255, 255, 0.099)";
                navbar.style.color = "#fff";
                logoWhite.style.display = "block";
                logoColor.style.display = "none";
                bars.style.fill = "#fff";
                navBarLinks.forEach(link => {
                    link.style.color = "#fff";
                });
                if (languageSelect) {
                    languageSelect.classList.remove("scrolled");
                }
            }
        }
    };

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        const linkSet = document.querySelectorAll("#nav-bar-link-list ul li");
        for(let i = 0; i < linkSet.length; i++){
            if(currentPage !== linkSet[i].textContent){
                linkSet[i].style.borderBottom = "0";
            }
            else{
                linkSet[i].style.borderBottom = "2px solid #FE6D36";
            }
        }    

        window.addEventListener('scroll', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
        };
    }, [location, currentPage]);

    return(
        <div id="nav-bar-container">
            <div id="mobile-nav-bar">
                <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="12vw"
                    width="12vw"
                    id="mobile-back-button"
                    onClick={hideSideBar}
                >
                    <path
                        fillRule="evenodd"
                        d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                    />
                </svg>
                <img src={colorLogo} alt="CalJ Logo" id="mobile-color-logo"/>
                <div id="mobile-nav-bar-link-list">
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
                        <Link to="/privacy">
                            <li>{t('nav.privacy')}</li>
                        </Link>
                        <Link to="/conditions">
                            <li>{t('nav.conditions')}</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div id="nav-bar" onScroll={scrollEvent}>
                <div id="nav-bar-logo">
                    <Link to="/">
                        <img src={logo} alt="CalJ Logo" id="white-logo"/>
                        <img src={colorLogo} alt="CalJ Logo" id="color-logo"/>
                    </Link>
                    <h4>{t('nav.slogan')}</h4>
                </div>
                <svg
                    viewBox="0 0 448 512"
                    fill="#fff"
                    height="6vw"
                    width="6vw"
                    id="bars"
                    onClick={showSideBar}
                >
                    <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                </svg>
                <div id="nav-bar-link-list">
                    <ul>
                        <Link to="/" onClick={() => {pageMarker(t('nav.home')); window.scrollTo(0, 0);}}>
                            <li>{t('nav.home')}</li>
                        </Link>
                        <Link to="/#service-section-title" onClick={() => {pageMarker(t('nav.services')); window.scrollTo(0, 0);}}>
                            <li>{t('nav.services')}</li>
                        </Link>
                        <Link to="/props" onClick={() => {pageMarker(t('nav.properties')); window.scrollTo(0, 0);}}>
                            <li>{t('nav.properties')}</li>
                        </Link>
                        <Link to="/about" onClick={() => {pageMarker(t('nav.about')); window.scrollTo(0, 0);}}>
                            <li>{t('nav.about')}</li>
                        </Link>
                        <Link to="/contact" onClick={() => {pageMarker(t('nav.contact')); window.scrollTo(0, 0);}}>
                            <li>{t('nav.contact')}</li>
                        </Link>
                        <Link to="/faq" onClick={() => {pageMarker(t('nav.faq')); window.scrollTo(0, 0);}}>
                            <li>{t('nav.faq')}</li>
                        </Link>
                    </ul>
                </div>
                <div className="nav-translate">
                    <LanguageSelector />
                </div>
            </div>
        </div>
    );
}

export default Navbar;