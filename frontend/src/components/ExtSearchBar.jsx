import "../static/ext-searc-bar.css"
import {Link} from "react-router-dom"
import useStore from './store';
import axios from 'axios'
import React, { useEffect,  useState } from 'react';

function ExtSearchBar(){
    const { selects, setSelect, selectOptions, setSelectOptions, usableSelects, setUsableSelect, filteredPropertys, setFilteredPropertys } = useStore();
    const[propertys, setPropertys] = useState([]);
    useEffect(()=>{
        const getPropertys = async () => {

            try {
              const response = await axios.get('http://127.0.0.1:8000/api/v1/props/');
              setPropertys(response.data);
              setFilteredPropertys(response.data);
            } catch (error) {
              console.error('Error al obtener los datos:', error);
            }
          };
      
          getPropertys()
    }, []);
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
    const scrollLimit = () => {
        const modalSearchBar = document.getElementById('modal-search-bar');
        const modalSearchBarDisplay = modalSearchBar.style.display;
        if (modalSearchBarDisplay === "flex") {
            const rect = modalSearchBar.getBoundingClientRect();
            const scrollBottom = window.innerHeight;
            const maxScroll = modalSearchBar.clientHeight - scrollBottom;
            if (rect.bottom <= scrollBottom) {
                window.scrollTo(0, maxScroll);
            }
        }
    };

    const modalPop = () => {
        const modalSearchBar = document.getElementById("modal-search-bar");
        const modalSearchBarDisplay = modalSearchBar.style.display
        if (modalSearchBarDisplay === "none") {
            modalSearchBar.style.display = "flex";
            window.addEventListener('scroll', scrollLimit);
        } else {
            modalSearchBar.style.display = "none";
            window.removeEventListener('scroll', scrollLimit);
        }
    };
    const transformSelect = ()=>{
        const transformedSelects = [];
        for(const key in selects){
            if(key === "bedrooms" && selects[key] !== "all"){
                const bedrooms = `${selects[key]} Dormitorios`
                transformedSelects.push(bedrooms);
            }
            else if(key === "doubleBedrooms" && selects[key] !== "all"){
                const doubleBedrooms = `${selects[key]} Dormitorios dobles`
                transformedSelects.push(doubleBedrooms);
            }
            else if(key === "simpleBedrooms" && selects[key] !== "all"){
                const simpleBedrooms = `${selects[key]} Dormitorios simples`
                transformedSelects.push(simpleBedrooms);
            }
            else if(key === "bathrooms" && selects[key] !== "all"){
                const bathrooms = `${selects[key]} Baños`
                transformedSelects.push(bathrooms);
            }
            else if(key === "fullBrooms" && selects[key] !== "all"){
                const fullBathrooms = `${selects[key]} Baños completos`
                transformedSelects.push(fullBathrooms);
            }
            else if(key === "simpleBrooms" && selects[key] !== "all"){
                const simpleBathrooms = `${selects[key]} Baños de aseo`
                transformedSelects.push(simpleBathrooms);
            }
            else{
                transformedSelects.push(selects[key]);
            }
        }
        setUsableSelect(transformedSelects);
        let toFilterPropertys = propertys;

        propertys.map((property) =>{
            for(const key in selects){
                if(selects[key] !== "all"){
                    if(key === "action"){
                        if(selects[key] === "Comprar"){
                            if(!property.forSale){
                                toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                                break
                            }   
                        }
                        else{
                            if(!property.clientSale){
                                toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                                break
                            }   
                        }
                    }
                    if(key === "location" && selects[key] !== property.location){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "surface" && selects[key] !== property.surface){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "price" && parseInt(selects[key]) !== parseInt(property.price)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "type" && selects[key] !== property.type){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "pool"){
                        if(selects[key]==='Piscina' && !property.pool){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                        else if(selects[key]==='Sin piscina' && property.pool){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                    }
                    if(key === "trastero"){
                        if(selects[key]==='Trastero' && !property.trastero){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                        else if(selects[key]==='Sin trastero' && property.trastero){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                    }
                    if(key === "terraza"){
                        if(selects[key]==='Terraza' && !property.terraza){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                        else if(selects[key]==='Sin terraza' && property.terraza){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                    }
                    if(key === "elevator"){
                        if(selects[key]==='Ascensor' && !property.elevator){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                        else if(selects[key]==='Sin ascensor' && property.elevator){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                    }
                    if(key === "garden"){
                        if(selects[key]==='Jardín' && !property.garden){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                        else if(selects[key]==='Sin jardín' && property.garden){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                    }
                    if(key === "balcon"){
                        if(selects[key]==='Balcón' && !property.balcon){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                        else if(selects[key]==='Sin balcón' && property.balcon){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                    }
                    if(key === "plazaGarage"){
                        if(selects[key]==='Plaza de garage' && !property.plazaGarage){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                        else if(selects[key]==='Sin plaza de garage' && property.plazaGarage){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                    }
                    if(key === "bedrooms" && parseInt(selects[key]) !== parseInt(property.numberOfRooms)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "doubleBedrooms" && parseInt(selects[key]) !== parseInt(property.doubleBedRooms)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "simpleBedrooms" && parseInt(selects[key]) !== parseInt(property.simpleBedRooms)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "bathrooms" && parseInt(selects[key]) !== parseInt(property.numberOfBathR)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "fullBrooms" && parseInt(selects[key]) !== parseInt(property.fullBathrooms)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "simpleBrooms" && parseInt(selects[key]) !== parseInt(property.simpleBathrooms)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "garage"){
                        if(selects[key]==='Garage' && !property.garage){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                        else if(selects[key]==='Sin garage' && property.garage){
                            toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                            break
                        }
                    }
                    if(key === "minPrice" && parseInt(selects[key]) !== parseInt(property.price)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                    if(key === "maxPrice" && parseInt(selects[key]) !== parseInt(property.price)){
                        toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                        break
                    }
                }
            }
            return(null)
        })
        setFilteredPropertys(toFilterPropertys)
    }

    
    return(
        <div id="modal-search-bar" style={{display:"none"}}>
            <button id="back-button" onClick = {modalPop} style={{left: 'unset'}}>
                <svg
                    fill="#fff"
                    viewBox="0 0 16 16"
                    height="2.5em"
                    width="2.5em"
                    >
                    <path
                        fillRule="evenodd"
                        d="M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z"
                    />
                </svg>
            </button>
            <div id="ext-search-bar">
                            <ul id ="modal-tab-bar">
                                <li onClick={(e) => { setSelect('action', 'Comprar'); tabBarFocus(e); }}>Comprar</li>
                                <li onClick={(e) => { setSelect('action', 'Vender'); tabBarFocus(e); }}>Vender</li>
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
                                        {selectOptions.location.map((location) => {
                                            return(
                                                <option value={location}>{location}</option>
                                            )
                                        })}
                                    </select>
                                    Ubicación
                                </li>
                                <li>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M19.2 17.41A6 6 0 0114.46 20c-2.68 0-5-2-6-5H14a1 1 0 000-2H8.05c0-.33-.05-.67-.05-1s0-.67.05-1H14a1 1 0 000-2H8.47c1-3 3.31-5 6-5a6 6 0 014.73 2.59 1 1 0 101.6-1.18A7.92 7.92 0 0014.46 2c-3.76 0-7 2.84-8.07 7H4a1 1 0 000 2h2.05v2H4a1 1 0 000 2h2.39c1.09 4.16 4.31 7 8.07 7a7.92 7.92 0 006.34-3.41 1 1 0 00-1.6-1.18z" />
                                    </svg>
                                    <select name="price" id="searchPrice" onChange={(e) => setSelect('price', e.target.value)}>
                                        <option value="all" selected>Todos los precios</option>
                                        {selectOptions.prices.map((price) => {
                                            return(
                                                <option value={price}>{price}</option>
                                            )
                                        })}
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
                                        {selectOptions.surface.map((surface) => {
                                            return(
                                                <option value={surface}>{surface}</option>
                                            )
                                        })}
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
                                        {selectOptions.type.map((type) => {
                                            return(
                                                <option value={type}>{type}</option>
                                            )
                                        })}
                                    </select>
                                    Tipo de propiedad
                                </li>
                                <li>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1.3em"
                                        width="1.3em"
                                        >
                                        <path d="M3 19.723V21a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-1.277A1.99 1.99 0 0022 18v-3c0-.831-.507-1.542-1.228-1.845l-1.368-4.104A2.995 2.995 0 0016.559 7H7.441a2.995 2.995 0 00-2.845 2.051l-1.368 4.104A2.001 2.001 0 002 15v3c0 .738.404 1.376 1 1.723zM5.5 18a1.5 1.5 0 11.001-3.001A1.5 1.5 0 015.5 18zm13 0a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0118.5 18zM7.441 9h9.117a1 1 0 01.949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684z" />
                                        <path d="M22 7.388V5.279l-9.684-3.228a.996.996 0 00-.658.009L2 5.572V7.7l10.015-3.642L22 7.388z" />
                                    </svg>
                                    <select name="garage" id="garage" onChange={(e) => setSelect('garage', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        <option value="Garage">Sí</option>
                                        <option value="Sin garage">No</option>
                                    </select>
                                    Garage
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 014 4zM8 13a3 3 0 110-6 3 3 0 010 6z" />
                                    </svg>
                                    <select name="bedrooms" id="bedrooms" onChange={(e) => setSelect('bedrooms', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        {selectOptions.rooms.map((rooms) => {
                                            return(
                                                <option value={rooms}>{rooms}</option>
                                            )
                                        })}
                                    </select>
                                    Dormitorios
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 001 1h1v4h2v-4h12v4h2v-4h1a1 1 0 001-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z" />
                                    </svg>
                                    <select name="doubleBedrooms" id="doubleBedrooms" onChange={(e) => setSelect('doubleBedrooms', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        {selectOptions.doubleBedrooms.map((doubleRooms) => {
                                            return(
                                                <option value={doubleRooms}>{doubleRooms}</option>
                                            )
                                        })}
                                    </select>
                                    Dormitorios dobles
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M19 10V7a2 2 0 00-2-2H7a2 2 0 00-2 2v3a2 2 0 00-2 2v5h1.33L5 19h1l.67-2h10.66l.67 2h1l.67-2H21v-5a2 2 0 00-2-2m-2 0H7V7h10z" />
                                    </svg>
                                    <select name="simpleBedrooms" id="simpleBedrooms" onChange={(e) => setSelect('simpleBedrooms', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        {selectOptions.simpleBedrooms.map((simpleRooms) => {
                                            return(
                                                <option value={simpleRooms}>{simpleRooms}</option>
                                            )
                                        })}
                                    </select>
                                    Dormitorios sencillos
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M7 5a2 2 0 110 4c-1.11 0-2-.89-2-2s.9-2 2-2m13 8V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.41 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.5l1.25-1.26a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.23-.43-.38-.69-.5-.31-.15-.65-.23-1-.23C6 10 5 11 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2m0 6H4v-4h16v4z" />
                                    </svg>
                                    <select name="bathrooms" id="bathrooms" onChange={(e) => setSelect('bathrooms', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        {selectOptions.bathrooms.map((bathrooms) => {
                                            return(
                                                <option value={bathrooms}>{bathrooms}</option>
                                            )
                                        })}
                                    </select>
                                    Baños
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M17.42 22.5H5.33C3.5 22.5 2 21 2 19.17v-6.09c0-.9.36-1.75 1-2.37l5.63-5.54s1.03 1.05 1.04 1.08a.985.985 0 01.11 1.16C9.77 7.44 8 10 8 10h10.67a1.25 1.25 0 010 2.5h-5.84v.83h7.92a1.25 1.25 0 010 2.5h-7.92v.84h7.09a1.25 1.25 0 010 2.5h-7.09V20h4.59a1.25 1.25 0 010 2.5M13.5 4.8S12 6.46 12 7.5c0 2 3 2 3 0 0-1.04-1.5-2.7-1.5-2.7m5-3.8S16 3.76 16 5.5c0 3.33 5 3.33 5 0C21 3.76 18.5 1 18.5 1z" />
                                    </svg>
                                    <select name="simpleBrooms" id="simpleBrooms" onChange={(e) => setSelect('simpleBrooms', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        {selectOptions.simpleBrooms.map((simplebathrooms) => {
                                            return(
                                                <option value={simplebathrooms}>{simplebathrooms}</option>
                                            )
                                        })}
                                    </select>
                                    Baños de aseo
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.1-31.9-123-10.9l-16.3-16.2C151.8 42.5 126.4 32 99.9 32 44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32V131.9zM256 352c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm64 64c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm0-128c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm64 64c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm0-128c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm64 64c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm32-32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
                                    </svg>
                                    <select name="fullBrooms" id="fullBrooms" onChange={(e) => setSelect('fullBrooms', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        {selectOptions.fullBrooms.map((fullbathrooms) => {
                                            return(
                                                <option value={fullbathrooms}>{fullbathrooms}</option>
                                            )
                                        })}
                                    </select>
                                    Baños completos
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M12 12a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm-.71-6.29a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21L15 7.46A1 1 0 1013.54 6l-.54.59V3a1 1 0 00-2 0v3.59L10.46 6A1 1 0 009 7.46zM19 15a1 1 0 10-1 1 1 1 0 001-1zm1-7h-3a1 1 0 000 2h3a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h3a1 1 0 000-2H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3v-8a3 3 0 00-3-3zM5 15a1 1 0 101-1 1 1 0 00-1 1z" />
                                    </svg>
                                    <select name="min-price" id="min-price" onChange={(e) => setSelect('minPrice', e.target.value)}>
                                        <option value="all" selected>Todos los precios</option>
                                        {selectOptions.prices.map((price) => {
                                            return(
                                                <option value={price}>{price}</option>
                                            )
                                        })}
                                    </select>
                                    Precio mínimo
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M10.46 6l.54-.59V9a1 1 0 002 0V5.41l.54.55A1 1 0 0015 6a1 1 0 000-1.42l-2.29-2.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21L9 4.54A1 1 0 0010.46 6zM12 12a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zm-7-1a1 1 0 101-1 1 1 0 00-1 1zm14 0a1 1 0 10-1 1 1 1 0 001-1zm1-7h-4a1 1 0 000 2h4a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h4a1 1 0 000-2H4a3 3 0 00-3 3v8a3 3 0 003 3h16a3 3 0 003-3v-8a3 3 0 00-3-3z" />
                                    </svg>
                                    <select name="max-price" id="max-price" onChange={(e) => setSelect('maxPrice', e.target.value)}>
                                        <option value="all" selected>Todos los precios</option>
                                        {selectOptions.prices.map((price) => {
                                            return(
                                                <option value={price}>{price}</option>
                                            )
                                        })}
                                    </select>
                                    Precio máximo
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3M8.5 8.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5M18 11l-2.5-4-2.5 4h5m-5 2l2.5 4 2.5-4h-5z" />
                                    </svg>
                                    <select name="elevator" id="elevator" onChange={(e) => setSelect('elevator', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        <option value="Ascensor">Sí</option>
                                        <option value="Sin ascensor">No</option>
                                    </select>
                                    Ascensor
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M2 15c1.67-.75 3.33-1.5 5-1.83V5a3 3 0 013-3c1.31 0 2.42.83 2.83 2H10a1 1 0 00-1 1v1h5V5a3 3 0 013-3c1.31 0 2.42.83 2.83 2H17a1 1 0 00-1 1v9.94c2-.32 4-1.94 6-1.94v2c-2.22 0-4.44 2-6.67 2-2.22 0-4.44-2-6.66-2-2.23 0-4.45 1-6.67 2v-2m12-7H9v2h5V8m0 4H9v1c1.67.16 3.33 1.31 5 1.79V12M2 19c2.22-1 4.44-2 6.67-2 2.22 0 4.44 2 6.66 2 2.23 0 4.45-2 6.67-2v2c-2.22 0-4.44 2-6.67 2-2.22 0-4.44-2-6.66-2-2.23 0-4.45 1-6.67 2v-2z" />
                                    </svg>
                                    <select name="pool" id="pool" onChange={(e) => setSelect('pool', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        <option value="Piscina">Sí</option>
                                        <option value="Sin piscina">No</option>
                                    </select>
                                    Piscina
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
                                    <path d="M12 5a3 3 0 113 3m-3-3a3 3 0 10-3 3m3-3v1M9 8a3 3 0 103 3M9 8h1m5 0a3 3 0 11-3 3m3-3h-1m-2 3v-1" />
                                    <path d="M14 8 A2 2 0 0 1 12 10 A2 2 0 0 1 10 8 A2 2 0 0 1 14 8 z" />
                                    <path d="M12 10v12M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5zM12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5z" />
                                    </svg>
                                    <select name="garden" id="garden" onChange={(e) => setSelect('garden', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        <option value="Jardín">Sí</option>
                                        <option value="Sin jardín">No</option>
                                    </select>
                                    Jardín
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
                                    <path d="M22 8.35V20a2 2 0 01-2 2H4a2 2 0 01-2-2V8.35A2 2 0 013.26 6.5l8-3.2a2 2 0 011.48 0l8 3.2A2 2 0 0122 8.35zM6 18h12M6 14h12" />
                                    <path d="M6 10h12v12H6z" />
                                    </svg>
                                    <select name="trastero" id="trastero" onChange={(e) => setSelect('trastero', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        <option value="Trastero">Sí</option>
                                        <option value="Sin trastero">No</option>
                                    </select>
                                    Trastero
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 576 512"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v121l52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-80z" />
                                    </svg>
                                    <select name="terraza" id="terraza" onChange={(e) => setSelect('terraza', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        <option value="Terraza">Sí</option>
                                        <option value="Sin terraza">No</option>
                                    </select>
                                    Terraza
                                </li>
                                <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M10 10v2H8v-2h2m6 2v-2h-2v2h2m5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4h1M7 16H5v4h2v-4m4 0H9v4h2v-4m0-11.92C8.16 4.56 6 7.03 6 10v4h5V4.08M13 14h5v-4c0-2.97-2.16-5.44-5-5.92V14m2 2h-2v4h2v-4m4 0h-2v4h2v-4z" />
                                    </svg>
                                    <select name="balcon" id="balcon" onChange={(e) => setSelect('balcon', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        <option value="Balcón">Sí</option>
                                        <option value="Sin balcón">No</option>
                                    </select>
                                    Balcón
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
                                    <path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z" />
                                    <path d="M9 17V7h4a3 3 0 010 6H9" />
                                    </svg>
                                    <select name="plazaGarage" id="plazaGarage" onChange={(e) => setSelect('plazaGarage', e.target.value)}>
                                        <option value="all" selected>Seleccione una opción</option>
                                        <option value="Plaza de garage">Sí</option>
                                        <option value="Sin plaza de garage">No</option>
                                    </select>
                                    Plaza de Garage
                                </li>
                                <li>
                                    <Link to = "/props/" onClick={transformSelect}>
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