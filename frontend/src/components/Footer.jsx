import "../static/footer.css"
import logo from "../static/media/color-logo.png"
import facebook from "../static/media/Facebook.svg"
import instagram from "../static/media/Instagram.svg"
import linkedin from "../static/media/LinkedIn.svg"
import tiktok from "../static/media/TikTok.svg"
import youtube from "../static/media/YouTube.svg"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div id="footer">
            <div id = "footer-logo-container">
                {/* <Link to= "/login"> */}
                <img src={logo} alt="CalJ Logo" id="footer-logo"/>
                {/* </Link> */}
                <h5>© 2024CalJ. All rights reserved.</h5>
            </div>
            <div id= "footer-links-container">
                <ul id = "pages-links">
                    <li><Link to= "/">Inicio</Link></li>
                    <li><Link to= "/#service-section-title">Servicios</Link></li>
                    <li><Link to= "/props">Todas las propiedades</Link></li>
                    <li><Link to= "/about">Sobre nosotros</Link></li>
                </ul>
                <ul id = "misc-links">
                    <li><Link to= "/contact">Contacto</Link></li>
                    <li><Link to= "/faq">Preguntas frecuentes</Link></li>
                    <li><Link to= "/privacy">Políticas de Privacidad</Link></li>
                    <li><Link to= "/conditions">Términos y condiciones</Link></li>
                </ul>
            </div>
            <ul id = "social-media">
                <li><img src={facebook} alt="Facebook" /></li>
                <li><img src={instagram} alt="Instagram" /></li>
                <li><img src={tiktok} alt="TikTok" /></li>
                <li><img src={linkedin} alt="LinkedIn" /></li>
                <li><img src={youtube} alt="YouTube" /></li>
            </ul>
            <h5 id = "copyright-tablet">© 2024CalJ. All rights reserved.</h5>
        </div>
    );
}

export default Footer