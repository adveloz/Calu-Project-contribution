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
function Contact(){
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
                    <h2>Contáctanos</h2>
                    <p>¿Buscas tu nuevo hogar o necesitas vender una propiedad? Estamos aquí para ayudarte a encontrar la mejor opción. ¡Contáctanos hoy y haremos que tu experiencia inmobiliaria sea fácil y exitosa!</p>
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
                        <h5>Teléfono</h5>
                    </div>
                    <div className = "info-sector">
                        <div className='info-icon'><UilMapPinAlt color = "#fff" size = "2vw"/></div>
                        <h4> Calle Treinta de Mayo 11 <br/>CP: 38670, Adeje, Santa Cruz de Tenerife, España</h4>
                        <h5>Dirección</h5>
                    </div>
                    <div className = "info-sector">
                        <div className='info-icon'><UilEnvelope color = "#fff" size = "2vw"/></div>
                        <h4>info@inmobiliariacalu.com</h4>
                        <h5>Correo Electrónico</h5>
                    </div>
                </div>
                <h3>Por favor completa el formulario a continuación y uno de nuestros agentes te contactará lo antes posible.</h3>
                <form id = "form" action="https://formsubmit.co/info@inmobiliariacalu.com" method="POST">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.href}></input>
                    <div id='input-container'>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" placeholder='Introduce tu nombre' name = 'name' id = 'name'/>
                        </div>
                        <div>
                            <label htmlFor="lastname">Apellidos</label>
                            <input type="text" placeholder='Introduce tu apellido' name = 'lastname' id = 'lastname'/>
                        </div>
                        <div>
                            <label htmlFor="phone">Teléfono</label>
                            <input type="text" placeholder='Número de teléfono' name = 'phone' id = 'phone'/>
                        </div>
                        <div>
                            <label htmlFor="mail">Email</label>
                            <input type="text" placeholder='correo@ejemplo.com' name = 'mail' id = 'mail'/>
                        </div>  
                    </div>
                    <div id='textarea'>
                        <label htmlFor="message">Mensaje</label>
                        <textarea placeholder='Escribe un mensaje' name = 'message' id = 'message'/>
                    </div>
                    <button>Enviar Mensaje</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;