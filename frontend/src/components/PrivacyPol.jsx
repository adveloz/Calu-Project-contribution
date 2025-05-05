import Navbar from "./Navbar"
import Footer from "./Footer"
import "../static/privacypol.css"
import headerImg1 from "../static/media/Group 35022.png"
import headerImg2 from "../static/media/christina-wocintechchat-com-UTw3j_aoIKM-unsplash.png"
import headerImg3 from "../static/media/Group 35023.png"
import ExtSearchBar from "./ExtSearchBar"
import WhatsAppButton from "./WhatsAppButton"

function PrivacyPol(){
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
                    <h2>Política de Privacidad</h2>
                    <p>En Calu valoramos tu privacidad y nos comprometemos a proteger tus datos personales.<br/> 
                    Esta política explica cómo recopilamos, utilizamos y protegemos la información que compartes con nosotros.</p>
                </div>
            </div>
            <div id="politics-container">
                    <div id="politics-img-container">
                        <img src={headerImg3} alt="Kitchen" />
                        <img src={headerImg2} alt="Laptop" />
                        <img src={headerImg1} alt="Living Room" />
                    </div>
                    <div id="recop-info-container" className="politics-text">
                        <h3>Recopilación de información</h3>
                        <p>Recopilamos información personal cuando interactúas con nuestro sitio web, como cuando completas formularios de contacto o solicitas información sobre propiedades. Esto puede incluir:</p>
                        <ul>
                            <li>Nombre completo</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Número de teléfono</li>
                            <li>Información de la propiedad de interés</li>
                        </ul>
                    </div>
                    <div id="use-info-container" className="politics-text">
                        <h3>Uso de la Información</h3>
                        <p>La información que recopilamos se utiliza para los siguientes fines</p>
                        <ul>
                            <li>Proporcionarte información sobre propiedades que puedan interesarte.</li>
                            <li>Responder a tus consultas y coordinar visitas.</li>
                            <li>Procesar solicitudes de servicios o transacciones.</li>
                            <li>Mejorar nuestros servicios y personalizar tu experiencia en nuestro sitio web.</li>
                        </ul>
                    </div>
                    <div id="prot-info-container" className="politics-text">
                        <h3>Protección de Datos</h3>
                        <p>Nos comprometemos a proteger tus datos personales. Implementamos medidas de seguridad técnicas y organizativas para evitar el acceso no autorizado, la divulgación o alteración de tu información personal.</p>
                    </div>
                    <div id="comp-info-container" className="politics-text">
                        <h3>Compartición de Información</h3>
                        <p>No compartimos, vendemos ni alquilamos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para completar una transacción solicitada o requerido por la ley.</p>
                    </div>
                    <div id="rights-info-container" className="politics-text">
                        <h3>Tus Derechos</h3>
                        <p>Tienes el derecho de acceder, corregir o solicitar la eliminación de tus datos personales en cualquier momento. Si deseas actualizar tu información o retirar tu consentimiento, por favor, contáctanos a través de [correo electrónico de contacto].</p>
                    </div>
                    <div id="changes-info-container" className="politics-text">
                        <h3>Cambios a la Política de Privacidad</h3>
                        <p>Nos reservamos el derecho de actualizar esta política en cualquier momento. Cualquier cambio será publicado en esta página, y te notificaremos si los cambios son significativos.</p>
                    </div>
                    <div id="cont-info-container" className="politics-text">
                        <h3>Contacto</h3>
                        <p>Si tienes preguntas sobre nuestra Política de Privacidad o sobre cómo manejamos tu información personal, no dudes en contactarnos en:</p>
                        <ul>
                            <li>Correo Electrónico: info@inmobiliariacalu.com</li>
                            <li>Teléfono: +34 647 66 28 40</li>
                        </ul>
                    </div>
                </div>
            <Footer/>
            <WhatsAppButton />
        </>
    );
}

export default PrivacyPol;