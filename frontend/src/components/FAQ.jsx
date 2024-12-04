import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQItem from "./FAQItem";
import "../static/faq.css";
import headerImg1 from "../static/media/alberto-castillo-q-mx4mSkK9zeo-unsplash.png"
import headerImg2 from "../static/media/Leonardo_Phoenix_A_collection_of_stunning_Spanishstyle_houses_3.png"
import headerImg3 from "../static/media/jason-briscoe-AQl-J19ocWE-unsplash.png"
import ExtSearchBar from './ExtSearchBar'
import React, { useEffect,  useState } from 'react';
import axios from "axios";
function FAQ(){
    const [faqSet, setFaqSet] = useState([]);
    useEffect(()=>{
        const getPropertys = async () => {

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/faq/');
                setFaqSet(response.data)
                
            } catch (error) {
              console.error('Error al obtener los datos:', error);
            }
          };
      
          getPropertys()
    }, []);
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
                        {faqSet.map((faq, index) =>{
                            return(
                                <FAQItem
                                    index = {index}
                                    question = {faq.question}
                                    answer = {faq.answer}
                                />
                            )
                        })}
                    </div>
            </div>           
            <Footer/>
        </>
    );
}

export default FAQ;