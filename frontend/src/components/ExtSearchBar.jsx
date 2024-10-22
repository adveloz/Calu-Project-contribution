import "../static/ext-searc-bar.css"
import {Link} from "react-router-dom"
import useStore from './store';

function ExtSearchBar(){
    const { selects, setSelect } = useStore();
    
    const modalCollapse = () =>{
        const modalSearchBar = document.getElementById("modal-search-bar");
        const body = document.querySelector("body");
        body.style.overflowY = "scroll";
        modalSearchBar.style.display = "none";
    }

    const tabBarFocus = (e) =>{
        const tabBarList = document.querySelectorAll("#modal-tab-bar li");
        for(let i = 0; i < tabBarList.length; i++){
            if (tabBarList[i] === e.target){
                tabBarList[i].style.borderBottom = "3px solid #FE6D36";
            }
            else{
                tabBarList[i].style.borderBottom = "0";
            }
        }
    }

    return(
        <div id="modal-search-bar">
            <button id="back-button" onClick = {modalCollapse} style={{left: 'unset'}}>
                        <svg
                            fill="#fff"
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
            <div id="ext-search-bar">
                            <ul id ="modal-tab-bar">
                                <li onClick = {tabBarFocus}>Comprar</li>
                                <li onClick = {tabBarFocus}>Vender</li>
                                <li onClick = {tabBarFocus}>Rentar</li>
                                <li onClick = {tabBarFocus}>Co-vivienda</li>
                            </ul>
                            <ul id = "modal-search-parameters-list">
                            <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                    <select name="location" id="location" onChange={(e) => setSelect('location', e.target.value)}>
                                        <option value="all" selected>Todas las ubicaciones</option>
                                    </select>
                                    Ubicación
                                </li>
                                <li>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M16.7 8A3 3 0 0014 6h-4a3 3 0 000 6h4a3 3 0 010 6h-4a3 3 0 01-2.7-2M12 3v3m0 12v3" />
                                    </svg>
                                    <select name="price" id="searchPrice" onChange={(e) => setSelect('price', e.target.value)}>
                                        <option value="all" selected>Todos los precios</option>
                                    </select>
                                    Precio
                                </li>
                                <li>
                                     <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M20 9a1 1 0 001-1V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H9V4a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h1v6H4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-1h6v1a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-1V9h1zm-3-4h2v2h-2V5zM5 5h2v2H5V5zm2 14H5v-2h2v2zm12 0h-2v-2h2v2zm-2-4h-1a1 1 0 00-1 1v1H9v-1a1 1 0 00-1-1H7V9h1a1 1 0 001-1V7h6v1a1 1 0 001 1h1v6z" />
                                    </svg>
                                    <select name="surface" id="surface" onChange={(e) => setSelect('surface', e.target.value)}>
                                        <option value="all" selected>Todas las superficies</option>
                                    </select>
                                    Superficie
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="types" id="types" onChange={(e) => setSelect('types', e.target.value)}>
                                        <option value="all" selected>Todos los tipos</option>
                                    </select>
                                    Tipo de propiedad
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="garage" id="garage" onChange={(e) => setSelect('garage', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                    </select>
                                    Garage
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="bedrooms" id="bedrooms" onChange={(e) => setSelect('bedrooms', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                    </select>
                                    Dormitorios
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="bathrooms" id="bathrooms" onChange={(e) => setSelect('bathrooms', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                    </select>
                                    Baños
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="min-price" id="min-price" onChange={(e) => setSelect('minPrice', e.target.value)}>
                                        <option value="all" selected>Todos los precios</option>
                                    </select>
                                    Precio mínimo
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="max-price" id="max-price" onChange={(e) => setSelect('maxPrice', e.target.value)}>
                                        <option value="all" selected>Todos los precios</option>
                                    </select>
                                    Precio máximo
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="elevator" id="elevator" onChange={(e) => setSelect('elevator', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                    </select>
                                    Ascensor
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="pool" id="pool" onChange={(e) => setSelect('pool', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                    </select>
                                    Piscina
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="garden" id="garden" onChange={(e) => setSelect('garden', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                    </select>
                                    Jardín
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="trastero" id="trastero" onChange={(e) => setSelect('trastero', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                    </select>
                                    Trastero
                                </li>
                                <li>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-4h2v4a.5.5 0 00.5.5H14a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4H2.5z" />
                                    </svg>
                                    <select name="terraza" id="terraza" onChange={(e) => setSelect('terraza', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                    </select>
                                    Terraza
                                </li>
                                <li>
                                    <Link to = "/props/">
                                            <button> 
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="#fff"
                                                    height="1.5em"
                                                    width="1.5em"
                                                    >
                                                    <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
                                                </svg>
                                            </button>
                                    </Link> 
                                </li>
                            </ul>
                        </div>
        </div>
    );
}

export default ExtSearchBar;