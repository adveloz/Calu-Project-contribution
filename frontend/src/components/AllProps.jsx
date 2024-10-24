import "../static/all-props.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchResultItem from "./SearchResultItem";
import PropertyCard from "./PropertyCard";
import headerPerson from "../static/media/front-view-young-female-student-white-t-shirt-grey-coat-grey-trousers-with-copybook-her-hands-smiling-pink-desk-lessons-university-college-study 1.png"
import axios from 'axios';
import React, { useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from './store';
import ExtSearchBar from './ExtSearchBar'

function AllProps(){

    const[propertys, setPropertys] = useState([]);
    const { selects, setSelect, selectOptions, setSelectOptions, usableSelects, setUsableSelect, filteredPropertys, setFilteredPropertys } = useStore();


    useEffect(()=>{
        const getPropertys = async () => {

            try {
              const response = await axios.get('http://127.0.0.1:8000/api/v1/props/');
              setPropertys(response.data);
              console.log(filteredPropertys)
              setFilteredPropertys(filteredPropertys)
              for (const key in selects){
                setSelect(key, "all");
              }

              let pricesArr = [];
                for(let i = 0; i < response.data.length; i++){
                    if(!(pricesArr.includes(parseInt(response.data[i].price)))){
                        pricesArr.push(parseInt(response.data[i].price))
                    }
                }
                const sortedPricesArr = pricesArr.sort();
                setSelectOptions('prices', sortedPricesArr);

                let roomsArr = [];
                for(let i = 0; i < response.data.length; i++){
                    if(!(roomsArr.includes(response.data[i].numberOfRooms))){
                        roomsArr.push(response.data[i].numberOfRooms)
                    }
                }
                const sortedRoomsArr = roomsArr.sort();
                setSelectOptions('rooms', sortedRoomsArr);

                let bathroomsArr = [];
                for(let i = 0; i < response.data.length; i++){
                    if(!(bathroomsArr.includes(response.data[i].numberOfBathR))){
                        bathroomsArr.push(response.data[i].numberOfBathR)
                    }
                }
                const sortedBathroomsArr = bathroomsArr.sort();
                setSelectOptions('bathrooms', sortedBathroomsArr);

                let surfaceArr = []
                for(let i = 0; i < response.data.length; i++){
                    if(!(surfaceArr.includes(response.data[i].surface))){
                        surfaceArr.push(response.data[i].surface)
                    }
                }
                setSelectOptions('surface', surfaceArr)

                let locationArr = []
                for(let i = 0; i < response.data.length; i++){
                    if(!(locationArr.includes(response.data[i].location))){
                        locationArr.push(response.data[i].location)
                    }
                }
                setSelectOptions('location', locationArr)

                let typeArr = []
                for(let i = 0; i < response.data.length; i++){
                    if(!(typeArr.includes(response.data[i].type))){
                        typeArr.push(response.data[i].type)
                    }
                }
                setSelectOptions('type', typeArr)

            } catch (error) {
              console.error('Error al obtener los datos:', error);
            }
          };
      
          getPropertys()
    }, []);

    const tabBarFocus = (e) =>{
        const tabBarList = document.querySelectorAll("#allprops-tab-bar li");
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
        const modalSearchBarDisplay = modalSearchBar.style.display
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
        const modalSearchBarDisplay = modalSearchBar.style.display;
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
            transformedSelects.push(selects[key]);
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
                        else if(selects[key] === "Vender"){
                            if(!property.clientSale){
                                toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                                break
                            }   
                        }
                        else if(selects[key] === "Rentar"){
                            if(!property.forRent){
                                toFilterPropertys = toFilterPropertys.filter(p => p.id !== property.id);
                                break
                            }   
                        }
                        else{
                            if(!property.coVivienda){
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
                }
            }
            return(toFilterPropertys)
        })
        setFilteredPropertys(toFilterPropertys)
    }


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
            <ExtSearchBar/>
            <Navbar barsColor = "#FE6D36"/>
            <div id = "allprops-search-section">
                    <div id = "allprops-search-container">
                        <div id = "allprops-search-container-text">
                            <h1>Tu futuro hogar comienza aquí</h1>
                            <p>Desde modernos apartamentos hasta amplias casas familiares, te ayudamos a encontrar el lugar donde tus sueños se hacen realidad.</p>
                        </div>
                        <div id = "allprops-search-bar">
                            <ul id = "allprops-tab-bar">
                                <li onClick={(e) => { setSelect('action', 'Comprar'); tabBarFocus(e); }}>Comprar</li>
                                <li onClick={(e) => { setSelect('action', 'Vender'); tabBarFocus(e); }}>Vender</li>
                                <li onClick={(e) => { setSelect('action', 'Rentar'); tabBarFocus(e); }}>Rentar</li>
                                <li onClick={(e) => { setSelect('action', 'Co-Vivienda'); tabBarFocus(e); }}>Co-Vivienda</li>
                                <li>
                                    <button onClick={modalPop}>
                                        <svg
                                            fill="#fff"
                                            viewBox="0 0 16 16"
                                            height="1.6em"
                                            width="1.6em"
                                            >
                                            <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
                                        </svg>
                                    </button>
                                    <Link onClick={transformSelect}>
                                        <button>
                                            <svg
                                                    viewBox="0 0 24 24"
                                                    fill="#fff"
                                                    height="1.4em"
                                                    width="1.4em"
                                                    >
                                                    <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                            <ul id = "allprops-search-parameters-list">
                            <li>
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1.3em"
                                    width="1.3em"
                                    >
                                    <path d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 10-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                    Ubicación
                                    <select name="location" id="location" onChange={(e) => setSelect('location', e.target.value)}>
                                        <option value="all" selected>Todas las ubicaciones</option>
                                        {selectOptions.location.map((location) => {
                                            return(
                                                <option value={location}>{location}</option>
                                            )
                                        })}
                                    </select>
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
                                    <select name="type" id="type" onChange={(e) => setSelect('type', e.target.value)}>
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
                                    <button onClick={modalPop}>
                                        <svg
                                            fill="#fff"
                                            viewBox="0 0 16 16"
                                            height="1.6em"
                                            width="1.6em"
                                            >
                                            <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
                                        </svg>
                                    </button>
                                    <Link onClick={transformSelect}>
                                        <button>
                                            <svg
                                                    viewBox="0 0 24 24"
                                                    fill="#fff"
                                                    height="1.4em"
                                                    width="1.4em"
                                                    >
                                                    <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <img src={headerPerson} alt="Worker"/>
                    </div>
            </div>
            <div id="search-results">
                    <p>Resultados de búsqueda:</p>
                    <div id="search-results-container">
                        {usableSelects.map((searchResult) =>{
                            if(searchResult !== "all"){
                                return(
                                    <SearchResultItem
                                        text = {searchResult}
                                    />
                                )
                            }
                        })}
                    </div>   
            </div>
            <div id="allprops-container">
                {filteredPropertys.map((property) => {
                    return(
                        <PropertyCard 
                            id={property.id}
                            picture={require(`../static/media/${property.img1}`)}
                            price={property.price} 
                            title={property.title} 
                            description={property.description}
                        />
                    )
                })}
            </div>
            <Footer/>
        </>
    );
}
export default AllProps;