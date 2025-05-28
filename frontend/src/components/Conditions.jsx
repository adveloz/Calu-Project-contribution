import "../static/conditions.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import headerImg1 from "../static/media/Group 35022.png"
import headerImg2 from "../static/media/Group 35024.png"
import headerImg3 from "../static/media/Group 35036.png"
import headerImg4 from "../static/media/Group 35023.png"
import headerImg5 from "../static/media/brooke-cagle-uWVWQ8gF8PE-unsplash (1).png"
import ExtSearchBar from './ExtSearchBar'
import {Link} from 'react-router-dom'
import WhatsAppButton from "./WhatsAppButton";
function Conditions(){

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
            <div id = "header-conditions-container">
                <div id = "header-conditions-img-container">   
                </div>
                <div id = "header-conditions-text-container">
                    <h2>Términos y Condiciones de Uso</h2>
                    <p>Al acceder y utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones. Te recomendamos leerlos cuidadosamente. Si no estás de acuerdo con estos términos, te pedimos que no utilices nuestro sitio web.</p>
                </div>
            </div>
            <div id = "conditions-container">
                    <div id="conditions-img-container">
                        <img src={headerImg1} alt="Property" />
                        <img src={headerImg5} alt="Worker" />
                        <img src={headerImg3} alt="Kitchen" />
                        <img src={headerImg2} alt="Laptop" />
                        <img src={headerImg4} alt="Living Room" />
                    </div>
                    <div className="conditions-text">
                        <h3>1. Aceptación de los Términos</h3>
                        <p>Al utilizar este sitio web, confirmas que has leído y aceptado estos Términos y Condiciones de Uso. Estos términos se aplican a todos los usuarios del sitio, incluidos visitantes, clientes y colaboradores.</p>
                    </div>
                    <div className="conditions-text">
                        <h3>2. Uso del Sitio Web</h3>
                        <p>El contenido de este sitio web, incluidas las imágenes, textos, gráficos y recursos, está destinado exclusivamente para fines informativos relacionados con los servicios inmobiliarios de [Nombre de la Inmobiliaria]. No puedes utilizar el contenido de este sitio para fines comerciales no autorizados sin nuestro consentimiento previo por escrito.</p>
                    </div>
                    <div className="conditions-text">
                        <h3>3. Propiedad Intelectual</h3>
                        <p>Todo el contenido de este sitio web, incluidas marcas, logotipos, imágenes y textos, es propiedad de [Nombre de la Inmobiliaria] o ha sido utilizado bajo licencia. Está prohibida la reproducción, distribución o modificación de cualquier material sin autorización expresa.</p>
                    </div>
                    <div className="conditions-text">
                        <h3>4. Exactitud de la Información</h3>
                        <p>No compartimos, vendemos ni alquilamos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para completar una transacción solicitada o requerido por la ley.</p>
                    </div>
                    <div id = "conditions-buttons">
                        <Link to="/">
                            <button id = "accept-button">Aceptar</button>
                        </Link>
                        <Link to="">
                            <button id = "decline-button">Rechazar</button>
                        </Link>
                    </div>
            </div>
            <Footer/>
            <WhatsAppButton />
        </>
    );

}

export default Conditions;