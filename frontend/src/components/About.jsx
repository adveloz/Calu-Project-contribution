import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";
import ValCard from "./ValCard";
import Footer from "./Footer";
import "../static/about.css";
import proper from "../static/media/pngegg (1) 1.png";
import historyImg from "../static/media/jason-briscoe-UV81E0oXXWQ-unsplash.png";
import missionImg from "../static/media/ai-generated-8656542.png";
import caljLogo from "../static/media/Group 34991.png";
import bubblePic1 from "../static/media/vita-vilcina-KtOid0FLjqU-unsplash.png";
import bubblePic2 from "../static/media/Group 34992.png";
import bubblePic3 from "../static/media/Group 34998.png";
import bubblePic4 from "../static/media/Group 34996.png";
import bubblePic5 from "../static/media/Group 34994.png";
import visProp1 from "../static/media/Group 35022.png";
import visProp2 from "../static/media/Group 35023.png";
import visCrew from '../static/media/Leonardo_Phoenix_A_warm_and_inviting_photograph_showcasing_a_d_1.png';
import valCrew1 from '../static/media/Leonardo_Phoenix_A_warm_and_inviting_photograph_showcasing_a_d_2.png';
import valCrew2 from '../static/media/carla_foto2.png';
import valCrew3 from '../static/media/ai-generated-9030608.png';
import valCrew4 from '../static/media/cowomen-hz-6prUpVss-unsplash.png';
import valCrew5 from '../static/media/Leonardo_Phoenix_A_group_of_three_confident_and_charismatic_re_1.png';
import livingRoom from '../static/media/nathan-fertig-FBXuXp57eM0-unsplash.png';
import teamCard2 from '../static/media/Leonardo_Phoenix_A_professionally_dressed_real_estate_agent_wi_2.png';
import teamCard3 from '../static/media/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png';
import teamCard4 from '../static/media/Leonardo_Phoenix_A_highquality_professionally_lit_photograph_o_0.png';
import ExtSearchBar from './ExtSearchBar'
import WhatsAppButton from "./WhatsAppButton";
function About(){
    const { t } = useTranslation();

    const changePage = (e) =>{
        const buttons = document.querySelectorAll('#header-button-container button');
        const aboutPages = document.querySelectorAll('.about-pag-container');
        e.target.style.backgroundColor = "#FE6D36";
        aboutPages[e.target.getAttribute('index')].style.display = "flex";

        var i = 0;
        while(i < buttons.length){
            if(buttons[i].getAttribute('index') !== e.target.getAttribute('index')){
                buttons[i].style.backgroundColor = "transparent";
                aboutPages[i].style.display = "none";
            }
            i++;
         }
    };

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
            <div id="header-about-container">
                <div id = "header-about-img-container"><img src={proper} alt="Property" /></div>
                <div id = "header-about-text-container">
                    <h1>{t('about.title', 'Who we are?')}</h1>
                    <p>{t('about.description', 'We are a dedicated team of real estate professionals committed to helping you find the ideal property. With years of experience in the market, we specialize in residential and commercial real estate, providing expert advice at every stage of the process.')}</p>
                    <div id = "header-button-container">
                        <button id = "history-page-button" index = "0" style={{ backgroundColor: '#FE6D36' }} onClick = {changePage}>{t('about.history.button')}</button>
                        <button id = "mission-page-button" index = "1" onClick = {changePage}>{t('about.mission.button')}</button>
                        <button id = "vision-page-button"  index = "2" onClick = {changePage}>{t('about.vision.button')}</button>
                        <button id = "val-page-button"  index = "3" onClick = {changePage}>{t('about.values.button')}</button>
                        <button id = "filosofy-page-button"  index = "4" onClick = {changePage}>{t('about.philosophy.button')}</button>
                        <button id = "team-page-button"  index = "5" onClick = {changePage}>{t('about.team.button')}</button>
                    </div>
                </div>
            </div>  
            <div id = "history-container" className="about-pag-container">
                    <img src={historyImg} alt="Property" />
                    <p>{t('about.history.text')}</p>
            </div>
            <div id = "mission-container" className="about-pag-container">
                <img src={missionImg} alt="People chating" />
                <div>
                    <p>{t('about.mission')}</p>
                    <div>
                        <img src={bubblePic1} alt="Property" />
                        <img src={caljLogo} alt="CalJ Logo" />
                        <img src={bubblePic2} alt="Property" />
                        <img src={caljLogo} alt="CalJ Logo" />
                        <img src={bubblePic5} alt="Property" />
                        <img src={caljLogo} alt="CalJ Logo" />
                        <img src={bubblePic4} alt="Property" />
                        <img src={caljLogo} alt="CalJ Logo" />
                        <img src={bubblePic3} alt="Property" />
                        <img src={caljLogo} alt="CalJ Logo" />
                    </div>
                </div>
            </div>
            <div id = "vision-container" className="about-pag-container">
                <img src={visProp1} alt="Property" />
                <div>
                    <img src={visCrew}  alt="Crew" />
                    <p><b>{t('about.vision')}</b></p>
                </div>
                <img src={visProp2}  alt="Property" />
            </div>
            <div id = "val-container" className="about-pag-container">
                <ValCard
                    img = {valCrew1}
                    title = {t('about.values.integrity.title')}
                    text = {t('about.values.integrity.text')}
                />
                <ValCard
                    img = {valCrew2}
                    title = "Excelencia"
                    text = "Ofreciendo un servicio de alta calidad y soluciones personalizadas"
                />
                <ValCard
                    img = {valCrew3}
                    title = {t('about.values.innovation.title')}
                    text = {t('about.values.innovation.text')}
                />
                <ValCard
                    img = {valCrew4}
                    title = {t('about.values.commitment.title')}
                    text = {t('about.values.commitment.text')}
                />
            </div>
            <div id = "filosofy-container" className="about-pag-container">
                <div>
                    <img src={livingRoom} alt="Living Room" />
                    <p>{t('about.philosophy')}</p>
                </div>
            </div>
            <div id = "team-container" className="about-pag-container">
                    <div className = "team-card">
                        <img src={valCrew2} alt="Carla Lunardi" />
                        <div>
                            <h3>Carla Lunardi</h3>
                            <span>CEO de Calu</span>
                        </div>
                    </div>
                    {/* <div className = "team-card">
                        <img src={teamCard2} alt="Ana María Chiva Rodríguez" />
                        <div>
                            <h3>Ana María Chiva Rodríguez</h3>
                            <span>{t('about.team.ceo')}</span>
                        </div>
                    </div>
                    <div className = "team-card">
                        <img src={teamCard3} alt="Michael Thompson" />
                        <div>
                            <h3>Michael Thompson</h3>
                            <span>{t('about.team.ceo')}</span>
                        </div>
                    </div>
                    <div className = "team-card">
                        <img src={teamCard4} alt="Ana María Chiva Rodríguez" />
                        <div>
                            <h3>Ana María Chiva Rodríguez</h3>
                            <span>{t('about.team.ceo')}</span>
                        </div>
                    </div> */}
            </div>
            <Footer/>
            <WhatsAppButton />
        </>
    );
}
export default About