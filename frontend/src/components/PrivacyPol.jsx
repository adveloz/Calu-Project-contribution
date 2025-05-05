import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../static/privacypol.css"
import headerImg1 from "../static/media/Group 35022.png"
import headerImg2 from "../static/media/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.png"
import headerImg3 from "../static/media/Group 35023.png"
import ExtSearchBar from "./ExtSearchBar"
import WhatsAppButton from "./WhatsAppButton"

function PrivacyPol(){
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
            <div id = "header-privacy-container">
                <div id = "header-privacy-img-container">   
                </div>
                <div id = "header-privacy-text-container">
                    <h2>{t('privacy.title')}</h2>
                    <p>{t('privacy.introduction')}</p>
                </div>
            </div>
            <div id="politics-container">
                    <div id="politics-img-container">
                        <img src={headerImg3} alt="Kitchen" />
                        <img src={headerImg2} alt="Laptop" />
                        <img src={headerImg1} alt="Living Room" />
                    </div>
                    <div id="recop-info-container" className="politics-text">
                        <h3>{t('privacy.collection.title')}</h3>
                        <p>{t('privacy.collection.text')}</p>
                        <ul>
                            <li>{t('privacy.collection.items.fullName')}</li>
                            <li>{t('privacy.collection.items.email')}</li>
                            <li>{t('privacy.collection.items.phone')}</li>
                            <li>{t('privacy.collection.items.property')}</li>
                        </ul>
                    </div>
                    <div id="use-info-container" className="politics-text">
                        <h3>{t('privacy.usage.title')}</h3>
                        <p>{t('privacy.usage.text')}</p>
                        <ul>
                            <li>{t('privacy.usage.items.propertyInfo')}</li>
                            <li>{t('privacy.usage.items.queries')}</li>
                            <li>{t('privacy.usage.items.transactions')}</li>
                            <li>{t('privacy.usage.items.improvement')}</li>
                        </ul>
                    </div>
                    <div id="prot-info-container" className="politics-text">
                        <h3>{t('privacy.data.title')}</h3>
                        <p>{t('privacy.data.text')}</p>
                    </div>
                    <div id="comp-info-container" className="politics-text">
                        <h3>{t('privacy.sharing.title')}</h3>
                        <p>{t('privacy.sharing.text')}</p>
                    </div>
                    <div id="rights-info-container" className="politics-text">
                        <h3>{t('privacy.rights.title')}</h3>
                        <p>{t('privacy.rights.text')}</p>
                    </div>
                    <div id="changes-info-container" className="politics-text">
                        <h3>{t('privacy.changes.title')}</h3>
                        <p>{t('privacy.changes.text')}</p>
                    </div>
                    <div id="cont-info-container" className="politics-text">
                        <h3>{t('privacy.contact.title')}</h3>
                        <p>{t('privacy.contact.text')}</p>
                        <ul>
                            <li>{t('privacy.contact.items.email')}</li>
                            <li>{t('privacy.contact.items.phone')}</li>
                        </ul>
                    </div>
                </div>
            <Footer/>
            <WhatsAppButton />
        </>
    );
}

export default PrivacyPol;