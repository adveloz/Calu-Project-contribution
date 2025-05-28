import { useTranslation } from 'react-i18next';
import "../static/footer.css"
import logo from "../static/media/color-logo.png"
import facebook from "../static/media/Facebook.svg"
import instagram from "../static/media/Instagram.svg"
import linkedin from "../static/media/LinkedIn.svg"
import tiktok from "../static/media/TikTok.svg"
import youtube from "../static/media/YouTube.svg"
import { Link } from "react-router-dom"

function Footer(){
    const { t } = useTranslation();

    return(
        <div id="footer">
            <div id = "footer-logo-container">
                {/* <Link to= "/login"> */}
                <img src={logo} alt="CalJ Logo" id="footer-logo"/>
                {/* </Link> */}
                <h5>{t('footer.copyright')}</h5>
            </div>
            <div id= "footer-links-container">
                <ul id = "pages-links">
                    <li><Link to= "/">{t('nav.home')}</Link></li>
                    <li><Link to= "/#service-section-title">{t('nav.services')}</Link></li>
                    <li><Link to= "/props">{t('nav.allProperties')}</Link></li>
                    <li><Link to= "/about">{t('nav.about')}</Link></li>
                </ul>
                <ul id = "misc-links">
                    <li><Link to= "/contact">{t('nav.contact')}</Link></li>
                    <li><Link to= "/faq">{t('nav.faq')}</Link></li>
                    <li><Link to= "/privacy">{t('nav.privacy')}</Link></li>
                    <li><Link to= "/conditions">{t('nav.conditions')}</Link></li>
                </ul>
            </div>
            <ul id = "social-media">
                <li><img src={facebook} alt="Facebook" /></li>
                <li><img src={instagram} alt="Instagram" /></li>
                <li><img src={tiktok} alt="TikTok" /></li>
                <li><img src={linkedin} alt="LinkedIn" /></li>
                <li><img src={youtube} alt="YouTube" /></li>
            </ul>
            <h5 id = "copyright-tablet">{t('footer.copyright')}</h5>
        </div>
    );
}

export default Footer