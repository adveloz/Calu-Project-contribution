import Navbar from "./Navbar";
import Footer from "./Footer";
import "../static/prop-view.css";
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
    const[mainImgIndex, setMainImgIndex] = useState(0);
    const[previousProp, setPreviousProp] = useState();
    const[globalReview, setGlobalReview] = useState([]);
    const[reviewsResume, setReviewsResume] = useState([]);
    const[globalCount, setGlobalCount] = useState();
    
     
    useEffect(()=>{
        const getProperty = async () => {

            try {
                const urlActual = location.pathname;
                const indiceUltimoSlash = urlActual.lastIndexOf('/');   
                let id = urlActual.substring(indiceUltimoSlash + 1)

                // const response = await axios.get('http://127.0.0.1:8000/api/v1/props/${id}/');
                const response = await axios.get(`/api/v1/props/${id}/`);
                setProperty(response.data);

                setImgset([
                            response.data.img1,
                            response.data.img2,
                            response.data.img3,
                            response.data.img4,
                            response.data.img5,
                            response.data.img6,
                            response.data.img7,
                            response.data.img8,
                            response.data.img9,
                            response.data.img10,
                            response.data.img11,
                            response.data.img12,
                            response.data.img13,
                            response.data.img14,
                            response.data.img15,
                            response.data.img16,
                            response.data.img17,
                            response.data.img18,
                            response.data.img19,
                            response.data.img20,
                            response.data.img21,
                            response.data.img22,
                            response.data.img23,
                            response.data.img24,
                            response.data.img25,
                            response.data.img26,
                            response.data.img27,
                            response.data.img28,
                            response.data.img29,
                            response.data.img30,
                            response.data.mapImg
                        ])

                // const getPropSet = await axios.get('http://127.0.0.1:8000/api/v1/props');
                const getPropSet = await axios.get('/api/v1/props');
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
                // const reviewsResponse = await axios.get('http://127.0.0.1:8000/api/v1/reviews/');
                const reviewsResponse = await axios.get('/api/v1/reviews/');
                let reviewArr = []
                for(let i = 0; i < 4 ; i++){
                    reviewArr.push(reviewsResponse.data[i])
                }
                setGlobalReview(reviewArr)
                setGlobalCount(reviewsResponse.data.length)
                var reviewsSum = 0
                for(let i = 0 ; i < reviewsResponse.data.length ; i++){
                    reviewsSum += parseInt(reviewsResponse.data[i].rating) 
                }
                reviewsSum /= reviewsResponse.data.length
                
                var starSet = []
                for(let i = 0 ; i < reviewsSum ; i++){
                    starSet.push(
                        <svg viewBox="0 0 512 512" fill="#FE6D36" height="1.4em" width="1.4em">
                            <path
                                fill="#FE6D36"
                                stroke="#FE6D36"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                            />
                        </svg>
                    );
                }
                setReviewsResume(starSet)


            } catch (error) {
              console.error('Error al obtener los datos:', error);
            }
          };
      
          getProperty()
          
    }, [location]);

    const switchImg = (index)=>{
        setMainImgIndex(index)
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
                        <input type="hidden" name="_redirect" value="" />

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
                                <input type="text" placeholder='Introduce tu teléfono' name = 'phone' id = 'phone'/>
                            </div>
                            <div>
                                <label htmlFor="mail">Email</label>
                                <input type="text" placeholder='Introduce tu Correo' name = 'mail' id = 'mail'/>
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
                            <img src={`../static/media/assets/${imgSet[mainImgIndex]}`} alt="Property"/>
                            <div id = "carousel-content">
                                {imgSet[0] && <img index = "0" src={`../static/media/assets/${imgSet[0]}`} alt="Property" onClick = {() => switchImg(0)}/>}
                                {imgSet[1] && <img index = "1" src={`../static/media/assets/${imgSet[1]}`} alt="Property" onClick = {() => switchImg(1)}/>}
                                {imgSet[2] && <img index = "2" src={`../static/media/assets/${imgSet[2]}`} alt="Property" onClick = {() => switchImg(2)}/>}
                                {imgSet[3] && <img index = "3" src={`../static/media/assets/${imgSet[3]}`} alt="Property" onClick = {() => switchImg(3)}/>}
                                {imgSet[4] && <img index = "4" src={`../static/media/assets/${imgSet[4]}`} alt="Property" onClick = {() => switchImg(4)}/>}
                                {imgSet[5] && <img index = "5" src={`../static/media/assets/${imgSet[5]}`} alt="Property" onClick = {() => switchImg(5)}/>}
                                {imgSet[6] && <img index = "6" src={`../static/media/assets/${imgSet[6]}`} alt="Property" onClick = {() => switchImg(6)}/>}
                                {imgSet[7] && <img index = "7" src={`../static/media/assets/${imgSet[7]}`} alt="Property" onClick = {() => switchImg(7)}/>}
                                {imgSet[8] && <img index = "8" src={`../static/media/assets/${imgSet[8]}`} alt="Property" onClick = {() => switchImg(8)}/>}
                                {imgSet[9] && <img index = "9" src={`../static/media/assets/${imgSet[9]}`} alt="Property" onClick = {() => switchImg(9)}/>}
                                {imgSet[10] && <img index = "10" src={`../static/media/assets/${imgSet[10]}`} alt="Property" onClick = {() => switchImg(10)}/>}
                                {imgSet[11] && <img index = "11" src={`../static/media/assets/${imgSet[11]}`} alt="Property" onClick = {() => switchImg(11)}/>}
                                {imgSet[12] && <img index = "12" src={`../static/media/assets/${imgSet[12]}`} alt="Property" onClick = {() => switchImg(12)}/>}
                                {imgSet[13] && <img index = "13" src={`../static/media/assets/${imgSet[13]}`} alt="Property" onClick = {() => switchImg(13)}/>}
                                {imgSet[14] && <img index = "14" src={`../static/media/assets/${imgSet[14]}`} alt="Property" onClick = {() => switchImg(14)}/>}
                                {imgSet[15] && <img index = "15" src={`../static/media/assets/${imgSet[15]}`} alt="Property" onClick = {() => switchImg(15)}/>}
                                {imgSet[16] && <img index = "16" src={`../static/media/assets/${imgSet[16]}`} alt="Property" onClick = {() => switchImg(16)}/>}
                                {imgSet[17] && <img index = "17" src={`../static/media/assets/${imgSet[17]}`} alt="Property" onClick = {() => switchImg(17)}/>}
                                {imgSet[18] && <img index = "18" src={`../static/media/assets/${imgSet[18]}`} alt="Property" onClick = {() => switchImg(18)}/>}
                                {imgSet[19] && <img index = "19" src={`../static/media/assets/${imgSet[19]}`} alt="Property" onClick = {() => switchImg(19)}/>}
                                {imgSet[20] && <img index = "20" src={`../static/media/assets/${imgSet[20]}`} alt="Property" onClick = {() => switchImg(20)}/>}
                                {imgSet[21] && <img index = "21" src={`../static/media/assets/${imgSet[21]}`} alt="Property" onClick = {() => switchImg(21)}/>}
                                {imgSet[22] && <img index = "22" src={`../static/media/assets/${imgSet[22]}`} alt="Property" onClick = {() => switchImg(22)}/>}
                                {imgSet[23] && <img index = "23" src={`../static/media/assets/${imgSet[23]}`} alt="Property" onClick = {() => switchImg(23)}/>}
                                {imgSet[24] && <img index = "24" src={`../static/media/assets/${imgSet[24]}`} alt="Property" onClick = {() => switchImg(24)}/>}
                                {imgSet[25] && <img index = "25" src={`../static/media/assets/${imgSet[25]}`} alt="Property" onClick = {() => switchImg(25)}/>}
                                {imgSet[26] && <img index = "26" src={`../static/media/assets/${imgSet[26]}`} alt="Property" onClick = {() => switchImg(26)}/>}
                                {imgSet[27] && <img index = "27" src={`../static/media/assets/${imgSet[27]}`} alt="Property" onClick = {() => switchImg(27)}/>}
                                {imgSet[28] && <img index = "28" src={`../static/media/assets/${imgSet[28]}`} alt="Property" onClick = {() => switchImg(28)}/>}
                                {imgSet[29] && <img index = "29" src={`../static/media/assets/${imgSet[29]}`} alt="Property" onClick = {() => switchImg(29)}/>}
                            </div>
                        </div>
                        <div id="main-info-data">
                            <div>   
                                    <svg
                                        fill="#FE6D36"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                <p>{property.type}</p>
                            </div>
                            <div>   
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="#FE6D36"
                                    height="1.5em"
                                    width="1.5em"
                                    >
                                    <path d="M20 9a1 1 0 001-1V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H9V4a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h1v6H4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-1h6v1a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-1V9h1zm-3-4h2v2h-2V5zM5 5h2v2H5V5zm2 14H5v-2h2v2zm12 0h-2v-2h2v2zm-2-4h-1a1 1 0 00-1 1v1H9v-1a1 1 0 00-1-1H7V9h1a1 1 0 001-1V7h6v1a1 1 0 001 1h1v6z" />
                                </svg>
                                <p>{property.surface} m&sup2;</p>
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
                            {property.garage &&
                                <div>   
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="#FE6D36"
                                            height="1.3em"
                                            width="1.3em"
                                            >
                                            <path d="M3 19.723V21a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-1.277A1.99 1.99 0 0022 18v-3c0-.831-.507-1.542-1.228-1.845l-1.368-4.104A2.995 2.995 0 0016.559 7H7.441a2.995 2.995 0 00-2.845 2.051l-1.368 4.104A2.001 2.001 0 002 15v3c0 .738.404 1.376 1 1.723zM5.5 18a1.5 1.5 0 11.001-3.001A1.5 1.5 0 015.5 18zm13 0a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0118.5 18zM7.441 9h9.117a1 1 0 01.949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684z" />
                                            <path d="M22 7.388V5.279l-9.684-3.228a.996.996 0 00-.658.009L2 5.572V7.7l10.015-3.642L22 7.388z" />
                                        </svg>
                                    <p>Garage</p>
                                </div>
                            }
                            {property.elevator &&
                                <div>   
                                        <svg
                                        viewBox="0 0 24 24"
                                        fill="#FE6D36"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3M8.5 8.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5M18 11l-2.5-4-2.5 4h5m-5 2l2.5 4 2.5-4h-5z" />
                                        </svg>
                                    <p>Ascensor</p>
                                </div>
                            }
                            {property.pool && 
                                <div>   
                                        <svg
                                        viewBox="0 0 24 24"
                                        fill="#FE6D36"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M2 15c1.67-.75 3.33-1.5 5-1.83V5a3 3 0 013-3c1.31 0 2.42.83 2.83 2H10a1 1 0 00-1 1v1h5V5a3 3 0 013-3c1.31 0 2.42.83 2.83 2H17a1 1 0 00-1 1v9.94c2-.32 4-1.94 6-1.94v2c-2.22 0-4.44 2-6.67 2-2.22 0-4.44-2-6.66-2-2.23 0-4.45 1-6.67 2v-2m12-7H9v2h5V8m0 4H9v1c1.67.16 3.33 1.31 5 1.79V12M2 19c2.22-1 4.44-2 6.67-2 2.22 0 4.44 2 6.66 2 2.23 0 4.45-2 6.67-2v2c-2.22 0-4.44 2-6.67 2-2.22 0-4.44-2-6.66-2-2.23 0-4.45 1-6.67 2v-2z" />
                                        </svg>
                                    <p>Piscina</p>
                                </div>
                            }
                            {property.garden &&
                                <div>   
                                    <svg
                                    fill="none"
                                    stroke="#FE6D36"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M12 5a3 3 0 113 3m-3-3a3 3 0 10-3 3m3-3v1M9 8a3 3 0 103 3M9 8h1m5 0a3 3 0 11-3 3m3-3h-1m-2 3v-1" />
                                    <path d="M14 8 A2 2 0 0 1 12 10 A2 2 0 0 1 10 8 A2 2 0 0 1 14 8 z" />
                                    <path d="M12 10v12M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5zM12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5z" />
                                    </svg>
                                    <p>Jardín</p>
                                </div>
                            }
                            {property.trastero &&
                                <div>   
                                    <svg
                                    fill="none"
                                    stroke="#FE6D36"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M22 8.35V20a2 2 0 01-2 2H4a2 2 0 01-2-2V8.35A2 2 0 013.26 6.5l8-3.2a2 2 0 011.48 0l8 3.2A2 2 0 0122 8.35zM6 18h12M6 14h12" />
                                    <path d="M6 10h12v12H6z" />
                                    </svg>
                                    <p>Trastero</p>
                            </div>
                            }
                            {property.terraza && 
                                <div>   
                                        <svg
                                        viewBox="0 0 576 512"
                                        fill="#FE6D36"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v121l52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-80z" />
                                        </svg>
                                        <p>Terraza</p>
                                </div>
                            }
                        </div>
                </div>
                <div id="main-info-text-container">
                        <h2>{property.title}</h2>
                        <h3>Precio: € {property.price}</h3>
                        <p>{property.description}</p>
                        <button id="modal-pop-button" onClick = {modalPop}>Contactar</button>
                </div>
            </div>
            <div id="map-container">
                    {/* <img src={imgSet[imgSet.length - 1]} alt="Map" /> */}
                    <img src={`../static/media/assets/${imgSet[imgSet.length - 1]}`} alt="Map" />
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
                        {globalReview.map((review) => {
                            return(
                            <RatedReviews
                                img = {`../static/media/assets${review.img}`}
                                name = {review.name}
                                text = {review.review}
                                rating = {review.rating}
                                />
                            )  
                        })}
                    </div>
                </div>
                <div id="global-reviews-container">
                        <div id="global-rating">
                            <div>
                                {reviewsResume}
                            </div>
                            <h3>{globalCount} Opiniones</h3> 
                        </div>
                        <div id="reviews-form-container">
                            <form action="https://formsubmit.co/info@inmobiliariacalu.com" method="POST">
                                <input type="hidden" name="_redirect" value="" />
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