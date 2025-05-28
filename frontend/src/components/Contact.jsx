import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer'
import "../static/contact.css"
import formProp1 from "../static/media/Group 35022.png";
import formProp2 from "../static/media/Group 35023.png";
import formProp3 from "../static/media/Leonardo_Phoenix_A_collection_of_stunning_Spanishstyle_houses_1.png";
import { UilMapPinAlt } from '@iconscout/react-unicons'
import { UilPhone } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import '@fontsource/montserrat';
import ExtSearchBar from './ExtSearchBar'
import WhatsAppButton from './WhatsAppButton';

function Contact(){
    const { t } = useTranslation();

    return(
        <>
        <ExtSearchBar/>
        <style>
                {`
                body {
                    font-family: 'Montserrat', sans-serif;
                }

                #nav-bar{
                    color: #000;
                    background-color: #fff;
                    box-shadow: 0 0 10px #ddd;
                }
                #white-logo{
                    display: none;
                }
                #color-logo{
                    display: inline-block;
                }
                #nav-bar-link-list a{
                    color: #000;
                }
                `}
            </style>
            <Navbar barsColor = "#FE6D36"/>
            <div id = "header-container">
                <div id = "header-img-container">   
                </div>
                <div id = "header-text-container">
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.description')}</p>
                </div>
            </div>
            <div id='form-container'>
                <div id = "form-img-container">
                    <img src={formProp1} alt="Property" />
                    <img src={formProp3} alt="Property" />
                    <img src={formProp2} alt="Property" />
                </div>
                <div id = "form-info">
                    <div className = "info-sector">
                        <div className='info-icon'><UilPhone color = "#fff" size = "2vw"/></div>
                        <h4>+34 647 662 840</h4>
                        <h5>{t('contact.phone')}</h5>
                    </div>
                    <div className = "info-sector">
                        <div className='info-icon'><UilMapPinAlt color = "#fff" size = "2vw"/></div>
                        <h4>{t('contact.address')}</h4>
                        <h5>{t('contact.address.label')}</h5>
                    </div>
                    <div className = "info-sector">
                        <div className='info-icon'><UilEnvelope color = "#fff" size = "2vw"/></div>
                        <h4>info@inmobiliariacalu.com</h4>
                        <h5>{t('contact.email')}</h5>
                    </div>
                </div>
                <h3>{t('contact.form.description')}</h3>
                <form id = "form" action="https://formsubmit.co/info@inmobiliariacalu.com" method="POST">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.href}></input>
                    <div id='input-container'>
                        <div>
                            <label htmlFor="name">{t('form.name')}</label>
                            <input type="text" placeholder={t('form.name.placeholder')} name = 'name' id = 'name'/>
                        </div>
                        <div>
                            <label htmlFor="lastname">{t('form.lastname')}</label>
                            <input type="text" placeholder={t('form.lastname.placeholder')} name = 'lastname' id = 'lastname'/>
                        </div>
                        <div>
                            <label htmlFor="phone">{t('form.phone')}</label>
                            <input type="text" placeholder={t('form.phone.placeholder')} name = 'phone' id = 'phone'/>
                        </div>
                        <div>
                            <label htmlFor="mail">{t('form.email')}</label>
                            <input type="text" placeholder={t('form.email.placeholder')} name = 'mail' id = 'mail'/>
                        </div>  
                    </div>
                    <div id='textarea'>
                        <label htmlFor="message">{t('form.message')}</label>
                        <textarea placeholder={t('form.message.placeholder')} name = 'message' id = 'message'/>
                    </div>
                    <button>{t('form.submit')}</button>
                </form>
            </div>
            <Footer/>
            <WhatsAppButton />
        </>
    );
}

export default Contact;