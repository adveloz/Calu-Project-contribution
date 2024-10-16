import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQItem from "./FAQItem";
import "../static/faq.css";
import headerImg1 from "../static/media/alberto-castillo-q-mx4mSkK9zeo-unsplash.png"
import headerImg2 from "../static/media/Leonardo_Phoenix_A_collection_of_stunning_Spanishstyle_houses_3.png"
import headerImg3 from "../static/media/jason-briscoe-AQl-J19ocWE-unsplash.png"
function FAQ(){
    return(
        <>
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
            <div id = "header-faq-container">
                <div id = "header-faq-img-container">   
                </div>
                <div id = "header-faq-text-container">
                    <h2>Preguntas Frecuentes</h2>
                    <p>Sabemos que el proceso de compra, venta o alquiler de una propiedad puede generar muchas preguntas. Para facilitarte el camino, hemos recopilado algunas de las preguntas más comunes que recibimos de nuestros clientes. </p>
                </div>
            </div>
            <div id="faq-container">
                    <div id="faq-img-container">
                        <img src={headerImg3} alt="Kitchen" />
                        <img src={headerImg2} alt="Property" />
                        <img src={headerImg1} alt="Living Room" />
                    </div>
                    <div id = "faq">
                        <FAQItem
                            index = "0"
                            question = "¿Cómo puedo programar una visita a una propiedad?"
                            answer = "Texto de prueba Texto de prueba Texto de prueba Texto de pruebaTexto de pruebaTexto de prueba Texto de prueba Texto de prueba Texto de pruebaTexto de pruebaTexto de pruebaTexto de prueba Texto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba "
                        />
                        <FAQItem
                            index = "1"
                            question = "¿Cómo puedo programar una visita a una propiedad?"
                            answer = "Texto de prueba Texto de prueba Texto de prueba Texto de pruebaTexto de pruebaTexto de prueba Texto de prueba Texto de prueba Texto de pruebaTexto de pruebaTexto de pruebaTexto de prueba Texto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba "
                        />
                        <FAQItem
                            index = "2"
                            question = "¿Cómo puedo programar una visita a una propiedad?"
                            answer = "Texto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba "
                        />
                        <FAQItem
                            index = "3"
                            question = "¿Cómo puedo programar una visita a una propiedad?"
                            answer = "Texto de prueba Texto de prueba Texto de prueba Texto de pruebaTexto de pruebaTexto de prueba Texto de prueba Texto de prueba Texto de pruebaTexto de pruebaTexto de pruebaTexto de prueba Texto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba "
                        />
                        <FAQItem
                            index = "4"
                            question = "¿Cómo puedo programar una visita a una propiedad?"
                            answer = "Texto de prueba Texto de prueba Texto de prueba Texto de pruebaTexto de pruebaTexto de prueba Texto de prueba Texto de prueba Texto de pruebaTexto de pruebaTexto de pruebaTexto de prueba Texto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de pruebaTexto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba Texto de prueba "
                        />
                    </div>
            </div>           
            <Footer/>
        </>
    );
}

export default FAQ;