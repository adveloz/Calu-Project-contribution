import Navbar from "./Navbar";
import Footer from "./Footer";
import "../static/prop-view.css";
import Cavendish from "../static/media/marvin-meyer-HrfZ1yOQw_E-unsplash.png"
import Fox from "../static/media/matthew-hamilton-tNCH0sKSZbA-unsplash.png"
import Herrera from "../static/media/todd-trapani-qXJ6NldT2Xs-unsplash.png"
import Lopez from "../static/media/guillaume-bolduc-ByT3r80omGs-unsplash.png"
import RatedReviews from "./RatedReviews";
import background from "../static/media/pngeggty (11).png";
import { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ExtSearchBar from './ExtSearchBar'

function PropView(){
    const location = useLocation();
    const[property, setProperty] = useState([]);
    const[imgSet, setImgset] = useState([]);
    const[nextProp, setNextProp] = useState();
    const[previousProp, setPreviousProp] = useState();
     
    useEffect(()=>{
        const getProperty = async () => {

            try {
                const urlActual = location.pathname;
                const indiceUltimoSlash = urlActual.lastIndexOf('/');   
                let id = urlActual.substring(indiceUltimoSlash + 1)

                const response = await axios.get(`http://127.0.0.1:8000/api/v1/props/${id}/`);
                console.log(response.data);
                setProperty(response.data);

                setImgset([
                            require(`../static/media/${response.data.img1}`),
                            require(`../static/media/${response.data.img2}`),
                            require(`../static/media/${response.data.img3}`),
                            require(`../static/media/${response.data.img4}`),
                            require(`../static/media/${response.data.mapImg}`)
                        ])

                const getPropSet = await axios.get('http://127.0.0.1:8000/api/v1/props');
                const propSet = getPropSet.data;

                for (let i = 0; i < propSet.length; i++){
                   if (propSet[i].id === id){
                        const index = propSet.indexOf(propSet[i])
                        if(index === 0){
                            setNextProp(propSet[i + 1].id);
                            setPreviousProp(null)
                        }
                        else if(index === propSet.length - 1){
                            setPreviousProp(propSet[i - 1].id);
                            setNextProp(null)
                        }
                        else{
                            setNextProp(propSet[i + 1].id);
                            setPreviousProp(propSet[i - 1].id);
                        }
                   }
                }
                
            } catch (error) {
              console.error('Error al obtener los datos:', error);
            }
          };
      
          getProperty()
          
    }, [location]);

    const fullStar = <svg viewBox="0 0 512 512" fill="#FE6D36" height="1.4em" width="1.4em">
      <path
        fill="true"
        stroke="#FE6D36"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
      />
    </svg>;
    const globalRating = 4;
    const starCount = [];

    for (let j = 0; j < globalRating; j++){
        starCount.push(fullStar);
    }
    const modalPop = () =>{
        const modal = document.getElementById("modal");
        const body = document.querySelector("body");
        body.style.overflowY = "hidden";
        modal.style.display = "flex";
        window.scrollTo(0, 0);
    }
    const modalCollapse = () =>{
        const modal = document.getElementById("modal");
        const body = document.querySelector("body");
        body.style.overflowY = "scroll";
        modal.style.display = "none";
    }
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
            <div id="modal">
                <div id="modal-form-container">
                    <button id="back-button" onClick = {modalCollapse}>
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="2.5em"
                            width="2.5em"
                            >
                            <path
                                fillRule="evenodd"
                                d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                            />
                        </svg>
                    </button>
                    <h3>Por favor completa el formulario a continuación y uno de nuestros agentes te contactará lo antes posible.</h3>
                    <form id = "form" action="https://formsubmit.co/info@inmobiliariacalu.com" method="POST">
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
                                <input type="text" placeholder='you@example.com' name = 'mail' id = 'mail'/>
                            </div>  
                        </div>
                        <div id='textarea'>
                            <label htmlFor="message">Mensaje</label>
                            <textarea placeholder='Escribe un mensaje' name = 'message' id = 'message'/>
                        </div>
                        <button>Enviar Mensaje</button>
                    </form>
                </div>
            </div>
            <Navbar barsColor = "#FE6D36"/>
            <div id="prop-main-info-container">
                <div id="main-info-img-container">
                        <div id="main-info-img-set">
                            <img src={imgSet[0]} alt="" />
                            <div>
                                <img src={imgSet[1]}alt="" />
                                <img src={imgSet[2]} alt="" />
                                <img src={imgSet[3]} alt="" />
                            </div>
                        </div>
                        <div id="main-info-data">
                            <div>   
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#FE6D36"
                                    height="1.5em"
                                    width="1.5em"
                                    >
                                    <path d="M20 9a1 1 0 001-1V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H9V4a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h1v6H4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-1h6v1a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-1V9h1zm-3-4h2v2h-2V5zM5 5h2v2H5V5zm2 14H5v-2h2v2zm12 0h-2v-2h2v2zm-2-4h-1a1 1 0 00-1 1v1H9v-1a1 1 0 00-1-1H7V9h1a1 1 0 001-1V7h6v1a1 1 0 001 1h1v6z" />
                                </svg>
                                <p>{property.surface}</p>
                            </div>
                            <div>   
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#FE6D36"
                                    height="1.5em"
                                    width="1.5em"
                                    >
                                    <path d="M8 5c-.5 0-1 .21-1.39.6S6 6.45 6 7v3c-.53 0-1 .19-1.41.59S4 11.47 4 12v5h1.34L6 19h1l.69-2h8.67l.64 2h1l.66-2H20v-5c0-.53-.19-1-.59-1.41S18.53 10 18 10V7c0-.55-.2-1-.61-1.4S16.5 5 16 5M8 7h3v3H8m5-3h3v3h-3m-7 2h12v3H6z" />
                                </svg>
                                <p>{property.numberOfRooms} habitaciones</p>
                            </div>
                            <div>   
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#FE6D36"
                                    height="1.5em"
                                    width="1.5em"
                                    >
                                    <path d="M7 5a2 2 0 110 4c-1.11 0-2-.89-2-2s.9-2 2-2m13 8V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.41 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.5l1.25-1.26a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.23-.43-.38-.69-.5-.31-.15-.65-.23-1-.23C6 10 5 11 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2m0 6H4v-4h16v4z" />
                                </svg>
                                <p>{property.numberOfRooms} baños</p>
                            </div>
                        </div>
                </div>
                <div id="main-info-text-container">
                        <h2>{property.title}</h2>
                        <h3>Precio {property.price}</h3>
                        <p>{property.description}</p>
                        <button id="modal-pop-button" onClick = {modalPop}>Contactar</button>
                </div>
            </div>
            <div id="map-container">
                    <img src={imgSet[4]} alt="Map" />
            </div>
            <div id="prop-navigate-button-container">
                {previousProp && (<Link to = {`/property/${previousProp}`}>
                    <button id="prev-button">
                        <svg
                            fill="#fff"
                            viewBox="0 0 16 16"
                            height="1.5em"
                            width="1.5em"
                            >
                            <path
                                fillRule="evenodd"
                                d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                            />
                        </svg>
                        Anterior
                    </button>
                </Link>)}

                {nextProp && (<Link to = {`/property/${nextProp}`}>
                    <button id="next-button">
                        Siguiente
                        <svg
                            fill="#fff"
                            viewBox="0 0 16 16"
                            height="1.5em"
                            width="1.5em"
                            >
                            <path
                                fillRule="evenodd"
                                d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
                            />
                        </svg>
                    </button>
                </Link>)} 
            </div>
            <div id="reviews">
                <img src={background} alt="City Background" id="background"/>
                <div id="reviews-cards-scroll">
                    <div id = "reviews-cards-container">
                        <RatedReviews
                            img = {Cavendish}
                            name = "Example Name"
                            text = "Example Text Example Text Example Text Example Text Example Text Example Text Example Text"
                            rating = {4}
                        />
                        <RatedReviews
                            img = {Fox}
                            name = "Example Name"
                            text = "Example Text Example Text Example Text Example Text Example Text Example Text Example Text"
                            rating = {3}
                        />
                        <RatedReviews
                            img = {Herrera}
                            name = "Example Name"
                            text = "Example Text Example Text Example Text Example Text Example Text Example Text Example Text Example Text Example Text Example Text Example Text Example Text Example Text Example Text"
                            rating = {4}
                        />
                        <RatedReviews
                            img = {Lopez}
                            name = "Example Name"
                            text = "Example Text Example Text Example Text Example Text Example Text Example Text Example Text"
                            rating = {5}
                        />
                    </div>
                </div>
                <div id="global-reviews-container">
                        <div id="global-rating">
                            <div>
                                {starCount}
                            </div>
                            <h3>4 Opiniones</h3> 
                        </div>
                        <div id="reviews-form-container">
                            <form action="https://formsubmit.co/info@inmobiliariacalu.com" method="POST">
                                <textarea name="client-review" id="client-review" placeholder="Escriba su opinión"></textarea>
                                <input type="submit" value="Enviar" />
                            </form>
                        </div>
                </div>
            </div>
            
            <Footer/>
        </>
    );
}

export default PropView