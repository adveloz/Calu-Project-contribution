import "../static/navbar.css"
import colorLogo from "../static/media/color-logo.png"
import logo from "../static/media/logo.svg"
import { Link } from 'react-router-dom';
import useStore from './store';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar(props){
    const { currentPage, setCurrentPage } = useStore();
    const location = useLocation();
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
    }, [location]);

    const pageMarker = (page)=>{
        setCurrentPage(page)
    }
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
    return(
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
                                <li>Inicio</li>
                            </Link>
                            <a href="#services-section">
                                <li>Servicios</li>
                            </a>
                            <Link to="/props">
                                <li>Todas las propiedades</li>
                            </Link>
                            <Link to="/about">
                                <li>Sobre nosotros</li>
                            </Link>
                            <Link to="/contact">
                                <li>Contactos</li>
                            </Link>
                            <Link to="/faq">
                                <li>Preguntas frecuentes</li>
                            </Link>
                            <Link to= "/privacy">
                                <li>Políticas de Privacidad</li>
                            </Link>
                            <Link to= "/conditions">
                                <li>Términos y condiciones</li>
                            </Link>
                        </ul>
                    </div>
            </div>
            <div id = "nav-bar">
                <div id = "nav-bar-logo"><img src= {logo} alt="CalJ Logo" id = "white-logo"/><img src= {colorLogo} alt="CalJ Logo" id = "color-logo"/><h4>Soluciones inmobiliarias a tu medida!</h4></div>
                <svg
                        viewBox="0 0 448 512"
                        fill={props.barsColor}
                        height="6vw"
                        width="6vw"
                        id="bars"
                        onClick = {showSideBar}
                        >
                        <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                </svg>
                <div id = "nav-bar-link-list">
                    <ul>
                        <Link to="/" onClick = {()=>pageMarker("Inicio")}>
                            <li>Inicio</li>
                        </Link>
                        <Link to="/#service-section-title" onClick = {()=>pageMarker("Servicios")}>
                            <li>Servicios</li>
                        </Link>
                        <Link to="/props" onClick = {()=>pageMarker("Todas las propiedades")}>
                            <li>Todas las propiedades</li>
                        </Link>
                        <Link to="/about" onClick = {()=>pageMarker("Sobre nosotros")}>
                            <li>Sobre nosotros</li>
                        </Link>
                        <Link to="/contact" onClick = {()=>pageMarker("Contactos")}>
                            <li>Contactos</li>
                        </Link>
                        <Link to="/faq" onClick = {()=>pageMarker("Preguntas frecuentes")}>
                            <li>Preguntas frecuentes</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar