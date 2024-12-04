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
import valCrew2 from '../static/media/Leonardo_Phoenix_A_group_of_three_confident_and_charismatic_re_1.png';
import valCrew3 from '../static/media/ai-generated-9030608.png';
import valCrew4 from '../static/media/cowomen-hz-6prUpVss-unsplash.png';
import livingRoom from '../static/media/nathan-fertig-FBXuXp57eM0-unsplash.png';
import teamCard2 from '../static/media/Leonardo_Phoenix_A_professionally_dressed_real_estate_agent_wi_2.png';
import teamCard3 from '../static/media/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png';
import teamCard4 from '../static/media/Leonardo_Phoenix_A_highquality_professionally_lit_photograph_o_0.png';
import ExtSearchBar from './ExtSearchBar'
function About(){

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
                    <h1>¿Quiénes somos?</h1>
                    <p>Somos un equipo dedicado de profesionales inmobiliarios comprometidos en ayudarte a encontrar la propiedad ideal. Con años de experiencia en el mercado, nos especializamos en bienes raíces residenciales y comerciales, brindando asesoramiento experto en cada etapa del proceso.</p>
                    <div id = "header-button-container">
                        <button id = "history-page-button" index = "0" style={{ backgroundColor: '#FE6D36' }} onClick = {changePage}>Nuestra Historia</button>
                        <button id = "mission-page-button" index = "1" onClick = {changePage}>Nuestra Misión</button>
                        <button id = "vision-page-button"  index = "2" onClick = {changePage}>Nuestra Visión</button>
                        <button id = "val-page-button"  index = "3" onClick = {changePage}>Nuestros Valores</button>
                        <button id = "filosofy-page-button"  index = "4" onClick = {changePage}>Filosofía Empresarial</button>
                        <button id = "team-page-button"  index = "5" onClick = {changePage}>Nuestro Equipo</button>
                    </div>
                </div>
            </div>  
            <div id = "history-container" className="about-pag-container">
                    <img src={historyImg} alt="Property" />
                    <p>
                        Calu nació con una visión clara: revolucionar el mercado inmobiliario al ofrecer un servicio basado en la confianza, la dedicación y el compromiso con nuestros clientes. Desde nuestros inicios, hemos crecido gracias a la pasión por conectar personas con sus sueños inmobiliarios, comenzando como una pequeña agencia y expandiéndonos hasta convertirnos en un referente en la industria.
                        A lo largo de los años, hemos ayudado a cientos de familias y empresas a encontrar el espacio ideal, acompañándolos en cada paso con un enfoque personalizado y una profunda comprensión del mercado. Nuestro éxito se basa en relaciones duraderas, construidas sobre una base de transparencia, experiencia y resultados.
                    </p>
            </div>
            <div id = "mission-container" className="about-pag-container">
                <img src={missionImg} alt="People chating" />
                <div>
                    <p>Nuestra misión es brindar soluciones inmobiliarias personalizadas que superen las expectativas de nuestros clientes. Nos comprometemos a ofrecer un servicio excepcional, guiado por la integridad, la confianza y el profesionalismo, ayudando a cada persona a encontrar la propiedad perfecta para sus necesidades. Nos esforzamos por ser un referente en el mercado, creando relaciones duraderas y proporcionando asesoría experta en cada etapa del proceso. Nuestro compromiso es brindar un enfoque integral, utilizando nuestra profunda comprensión del mercado y las últimas herramientas tecnológicas para garantizar que cada transacción sea eficiente, fluida y satisfactoria. </p>
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
                    <p><b>Nuestra visión</b> es ser líderes en el sector inmobiliario, reconocidos por ofrecer soluciones innovadoras y un servicio excepcional que genera valor duradero para nuestros clientes.</p>
                </div>
                <img src={visProp2}  alt="Property" />
            </div>
            <div id = "val-container" className="about-pag-container">
                <ValCard
                    img = {valCrew1}
                    title = "Integridad"
                    text = "Actuamos con transparencia y ética en cada transacción"
                />
                <ValCard
                    img = {valCrew2}
                    title = "Excelencia"
                    text = "Ofreciendo un servicio de alta calidad y soluciones personalizadas"
                />
                <ValCard
                    img = {valCrew3}
                    title = "Innovación"
                    text = "Ofrecemos soluciones creativas en el mercado inmobiliario"
                />
                <ValCard
                    img = {valCrew4}
                    title = "Compromiso"
                    text = "Construimos relaciones a largo plazo con nuestros clientes"
                />
            </div>
            <div id = "filosofy-container" className="about-pag-container">
                <div>
                    <img src={livingRoom} alt="Living Room" />
                    <p>En Calu creemos en construir relaciones basadas en confianza y respeto, ofreciendo soluciones innovadoras con integridad y compromiso para generar un impacto positivo en nuestros clientes y comunidades.</p>
                </div>
            </div>
            <div id = "team-container" className="about-pag-container">
                    <div className = "team-card">
                        <img src={valCrew2} alt="Michael Thompson" />
                        <div>
                            <h3>Michael Thompson</h3>
                            <span>CEO de Calu</span>
                        </div>
                    </div>
                    <div className = "team-card">
                        <img src={teamCard2} alt="Ana María Chiva Rodríguez" />
                        <div>
                            <h3>Ana María Chiva Rodríguez</h3>
                            <span>CEO de Calu</span>
                        </div>
                    </div>
                    <div className = "team-card">
                        <img src={teamCard3} alt="Michael Thompson" />
                        <div>
                            <h3>Michael Thompson</h3>
                            <span>CEO de Calu</span>
                        </div>
                    </div>
                    <div className = "team-card">
                        <img src={teamCard4} alt="Ana María Chiva Rodríguez" />
                        <div>
                            <h3>Ana María Chiva Rodríguez</h3>
                            <span>CEO de Calu</span>
                        </div>
                    </div>
            </div>
            <Footer/>
        </>
    );
}
export default About