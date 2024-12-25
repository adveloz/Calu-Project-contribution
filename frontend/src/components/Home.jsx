import '../home.css';
import Navbar from './Navbar';
import PropertyCard from './PropertyCard';
import Service from './Service';
import ClientOpinion from './ClientOpinion';
import ShineItem from './ShineItem';
import Footer from './Footer';
import background from "../static/media/homeBackground.svg";
import examProp1 from "../static/media/exam-prop1.png";
import examProp2 from "../static/media/exam-prop2.png";
import examProp3 from "../static/media/exam-prop3.png";
import examProp4 from "../static/media/exam-prop4.png";
import examProp5 from "../static/media/exam-prop5.png";
import examProp6 from "../static/media/exam-prop6.png";
import Vector1 from "../static/media/Vector.svg"
import Vector2 from "../static/media/Vector (1).svg"
import Vector3 from "../static/media/Vector (2).svg"
import Vector4 from "../static/media/Vector (3).svg"
// import Fox from "../static/media/matthew-hamilton-tNCH0sKSZbA-unsplash.png"
import buildingImg from '../static/media/building.png';
import { useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExtSearchBar from './ExtSearchBar';
import useStore from './store';

function Home(){
    const[propertys, setPropertys] = useState([]);
    const[reviews, setReviews] = useState([]);
    const[movementLeft, setMovementLeft] = useState(0);
    const[movementRight, setMovementRight] = useState(0);
    const { selects, setSelect, selectOptions, setSelectOptions, usableSelects, setUsableSelect, filteredPropertys, setFilteredPropertys } = useStore();

    useEffect(()=>{
        const getPropertys = async () => {
            try {
                // const clientReviewsResponse = await axios.get('http://127.0.0.1:8000/api/v1/reviews/');
                // Get reviews
                const clientReviewsResponse = await axios.get('/api/v1/reviews/');
                const clientReviews = [];
                
                // Safely handle reviews data
                if (clientReviewsResponse.data && Array.isArray(clientReviewsResponse.data)) {
                    const numReviews = Math.min(4, clientReviewsResponse.data.length);
                    for(let i = 0; i < numReviews; i++) {
                        if (clientReviewsResponse.data[i]) {
                            clientReviews.push(clientReviewsResponse.data[i]);
                        }
                    }
                }
                setReviews(clientReviews);
                
                // const response = await axios.get('http://127.0.0.1:8000/api/v1/props/');
                // Get properties
                const response = await axios.get('/api/v1/props/');
                console.log('Properties response:', response.data);
                
                // Ensure we have valid property data
                if (!response.data || !Array.isArray(response.data)) {
                    console.error('Invalid or empty property data received');
                    setPropertys([]);
                    return;
                }
                
                setPropertys(response.data);

                // Process selects only if we have valid data
                const transformedSelects = [];
                for(const key in selects){
                    transformedSelects.push(selects[key]);
                }
                setUsableSelect(transformedSelects);

                for(const key in selects){
                    setSelect(key, "all");
                }

                // Process prices safely
                let pricesArr = [];
                response.data.forEach(prop => {
                    const price = parseInt(prop.price);
                    if (!isNaN(price) && !pricesArr.includes(price)) {
                        pricesArr.push(price);
                    }
                });
                setSelectOptions('prices', pricesArr.sort((a, b) => a - b));

                // Process rooms safely
                let roomsArr = [];
                response.data.forEach(prop => {
                    if (prop.numberOfRooms && !roomsArr.includes(prop.numberOfRooms)) {
                        roomsArr.push(prop.numberOfRooms);
                    }
                });
                setSelectOptions('rooms', roomsArr.sort((a, b) => a - b));

                // Process simple bedrooms safely
                let simpleRoomsArr = [];
                response.data.forEach(prop => {
                    if (prop.simpleBedRooms && !simpleRoomsArr.includes(prop.simpleBedRooms)) {
                        simpleRoomsArr.push(prop.simpleBedRooms);
                    }
                });
                setSelectOptions('simpleBedrooms', simpleRoomsArr.sort((a, b) => a - b));

                // Process double bedrooms safely
                let doubleRoomsArr = [];
                response.data.forEach(prop => {
                    if (prop.doubleBedRooms && !doubleRoomsArr.includes(prop.doubleBedRooms)) {
                        doubleRoomsArr.push(prop.doubleBedRooms);
                    }
                });
                setSelectOptions('doubleBedrooms', doubleRoomsArr.sort((a, b) => a - b));

                // Process bathrooms safely
                let bathroomsArr = [];
                response.data.forEach(prop => {
                    if (prop.numberOfBathR && !bathroomsArr.includes(prop.numberOfBathR)) {
                        bathroomsArr.push(prop.numberOfBathR);
                    }
                });
                setSelectOptions('bathrooms', bathroomsArr.sort((a, b) => a - b));

                // Process simple bathrooms safely
                let simpleBathroomsArr = [];
                response.data.forEach(prop => {
                    if (prop.simpleBathrooms && !simpleBathroomsArr.includes(prop.simpleBathrooms)) {
                        simpleBathroomsArr.push(prop.simpleBathrooms);
                    }
                });
                setSelectOptions('simpleBrooms', simpleBathroomsArr.sort((a, b) => a - b));

                // Process full bathrooms safely
                let fullBathroomsArr = [];
                response.data.forEach(prop => {
                    if (prop.fullBathrooms && !fullBathroomsArr.includes(prop.fullBathrooms)) {
                        fullBathroomsArr.push(prop.fullBathrooms);
                    }
                });
                setSelectOptions('fullBrooms', fullBathroomsArr.sort((a, b) => a - b));

                // Process surface safely
                let surfaceArr = [];
                response.data.forEach(prop => {
                    if (prop.surface && !surfaceArr.includes(prop.surface)) {
                        surfaceArr.push(prop.surface);
                    }
                });
                setSelectOptions('surface', surfaceArr);

                // Process location safely
                let locationArr = [];
                response.data.forEach(prop => {
                    if (prop.location && !locationArr.includes(prop.location)) {
                        locationArr.push(prop.location);
                    }
                });
                setSelectOptions('location', locationArr);

                // Process type safely
                let typeArr = [];
                response.data.forEach(prop => {
                    if (prop.type && !typeArr.includes(prop.type)) {
                        typeArr.push(prop.type);
                    }
                });
                setSelectOptions('type', typeArr);

            } catch (error) {
                console.error('Error fetching data:', error);
                // Set safe default states on error
                setReviews([]);
                setPropertys([]);
                setUsableSelect([]);
                // Set empty arrays for all select options
                setSelectOptions('prices', []);
                setSelectOptions('rooms', []);
                setSelectOptions('simpleBedrooms', []);
                setSelectOptions('doubleBedrooms', []);
                setSelectOptions('bathrooms', []);
                setSelectOptions('simpleBrooms', []);
                setSelectOptions('fullBrooms', []);
                setSelectOptions('surface', []);
                setSelectOptions('location', []);
                setSelectOptions('type', []);
            }
        };

        getPropertys()
    }, []);

    const tabBarFocus = (e) =>{
        const tabBarList = document.querySelectorAll("#tab-bar li");
        for(let i = 0; i < tabBarList.length; i++){
            if (tabBarList[i] === e.target){
                tabBarList[i].style.borderBottom = "3px solid #FE6D36";
            }
            else{
                tabBarList[i].style.borderBottom = "0";
            }
        }
    }

    const setMovementToZero = ()=>{
        const cardSet = document.querySelectorAll('.property-card');
        setMovementLeft(0);
        setMovementRight(0);
        for(let i = 0; i < cardSet.length; i++){
            cardSet[i].style.transform = "translate(0)";
        }
    }
    window.addEventListener("resize", setMovementToZero);

    const carouselControl = (e)=>{
        const cardContainer = document.querySelector("#props-cards-container");
        const sugestContainer = document.querySelector("#sugestion-section");
        const prevButton = document.getElementById("carousel-prev-button");
        const cardSet = document.querySelectorAll('.property-card');
        const cardStyles = window.getComputedStyle(cardSet[0]);
        const movementMeasure = cardSet[0].clientWidth + parseFloat(cardStyles.marginLeft) +parseFloat(cardStyles.marginRight);
        let movementRange = 0;

        if(window.innerWidth <= 580){
            movementRange = (cardContainer.clientWidth - sugestContainer.clientWidth);
            if(e.target === prevButton){
                if(movementLeft > 0){
                    setMovementLeft(movementLeft - movementMeasure);
                    for(let i = 0; i < cardSet.length; i++){
                        cardSet[i].style.transform = `translateX(-${movementLeft - movementMeasure}px)`;
                    }
                }
            }
            else{
                if(movementLeft <= movementRange){
                    setMovementLeft(movementLeft + movementMeasure);
                    for(let i = 0; i < cardSet.length; i++){
                        cardSet[i].style.transform = `translateX(-${movementLeft + movementMeasure}px)`;
                    }
                }
            }
        }
        else{
            let movementRange = (cardContainer.clientWidth - sugestContainer.clientWidth)/2;

            if(sugestContainer.clientWidth <= cardContainer.clientWidth){
                if(e.target === prevButton){
                    if(movementLeft !== movementRange){
                        if((movementRange - movementLeft) < movementMeasure){
                            setMovementLeft(movementLeft + (movementRange-movementLeft));
                            setMovementRight(movementRight - (movementRange-movementLeft));
                            for(let i = 0; i < cardSet.length; i++){
                                cardSet[i].style.transform = `translateX(${movementLeft + (movementRange-movementLeft)}px)`;
                            }
                        }
                        else{
                            setMovementLeft(movementLeft + movementRange);
                            setMovementRight(movementRight - movementRange);
                            for(let i = 0; i < cardSet.length; i++){
                                cardSet[i].style.transform = `translateX(${movementLeft + movementRange}px)`;
                            }
                        }
                    }
                }
                else{
                    if(movementRight !== movementRange){
                        if((movementRange - movementRight) < movementMeasure){
                            setMovementLeft(movementLeft - (movementRange-movementRight));
                            setMovementRight(movementRight + (movementRange-movementRight));
                            for(let i = 0; i < cardSet.length; i++){
                                cardSet[i].style.transform = `translateX(-${movementRight + (movementRange-movementRight)}px)`;
                            }
                        }
                        else{
                            setMovementLeft(movementLeft - movementRange);
                            setMovementRight(movementRight + movementRange);
                            for(let i = 0; i < cardSet.length; i++){
                                cardSet[i].style.transform = `translateX(-${movementRight + movementRange}px)`;
                            }
                        }
                    }
                }
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
                }
            }
            return(null)
        })
        setFilteredPropertys(toFilterPropertys)
    }

    return(
        <>
            <header className="App-header">
                <div className='sparkle-container'>
                    <div id='sparkle-subcontainer01'>
                        <ShineItem radius = ".3vw" id = "sparkle01" posX= "3vw" posY= "5vw" />
                        <ShineItem radius = ".5vw" id = "sparkle02" posX= "1vw" posY= ".6vw" />
                        <ShineItem radius = ".6vw" id = "sparkle03" posX= "15vw" posY= "1vw" />
                        <ShineItem radius = ".4vw" id = "sparkle04" posX= "1vw" posY= "1vw" />
                        <ShineItem radius = ".5vw" id = "sparkle05" posX= "6vw" posY= ".6vw" />
                        <ShineItem radius = ".3vw" id = "sparkle06" posX= "8vw" posY= "2vw" />
                        <ShineItem radius = ".5vw" id = "sparkle07" posX= "2vw" posY= "0" />
                        <ShineItem radius = ".6vw" id = "sparkle08" posX= "18vw" posY= "1vw" />
                    </div>
                    <div id='sparkle-subcontainer02'>
                        <ShineItem radius = ".3vw" id = "sparkle01" posX= "3vw" posY= "5vw" />
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <radialGradient id="gradienteSol" cx="50%" cy="50%" r="40%" fx="50%" fy="50%">
                                <stop offset="80%" style={{ stopColor: '#ffcfbc', stopOpacity: .4}} />
                                <stop offset="100%" style={{ stopColor: '#FE6D36', stopOpacity: 0}} />
                                </radialGradient>
                                <filter id="brillo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                                </filter>
                            </defs>
                            <circle cx="4vw" cy="2vw" r="2vw" fill="url(#gradienteSol)" filter="url(#brillo)" />
                        </svg>
                        <ShineItem radius = ".6vw" id = "sparkle03" posX= "15vw" posY= "1vw" />
                        <ShineItem radius = ".4vw" id = "sparkle04" posX= "1vw" posY= "1vw" />
                        <ShineItem radius = ".5vw" id = "sparkle05" posX= "6vw" posY= ".6vw" />
                        <ShineItem radius = ".3vw" id = "sparkle06" posX= "8vw" posY= "2vw" />
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <radialGradient id="gradienteSol" cx="50%" cy="50%" r="40%" fx="50%" fy="50%">
                                <stop offset="80%" style={{ stopColor: '#ffcfbc', stopOpacity: .4}} />
                                <stop offset="100%" style={{ stopColor: '#FE6D36', stopOpacity: 0}} />
                                </radialGradient>
                                <filter id="brillo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                                </filter>
                            </defs>
                            <circle cx="10vw" cy="9vw" r="2vw" fill="url(#gradienteSol)" filter="url(#brillo)" />
                        </svg>
                    </div>
                    <div id='sparkle-subcontainer03'>
                        <ShineItem radius = ".3vw" id = "sparkle01" posX= "16vw" posY= "2vw" />
                        <ShineItem radius = ".5vw" id = "sparkle02" posX= "5vw" posY= "9vw" />
                        <ShineItem radius = ".6vw" id = "sparkle03" posX= "8vw" posY= "0w" />
                        <ShineItem radius = ".4vw" id = "sparkle04" posX= "14vw" posY= "0" />
                        <ShineItem radius = ".5vw" id = "sparkle05" posX= "10vw" posY= "0" />
                    </div>
                    <div id='sparkle-subcontainer04'>
                        <ShineItem radius = ".3vw" id = "sparkle01" posX= "16vw" posY= "2vw" />
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <radialGradient id="gradienteSol" cx="50%" cy="50%" r="40%" fx="50%" fy="50%">
                                <stop offset="80%" style={{ stopColor: '#ffcfbc', stopOpacity: .4}} />
                                <stop offset="100%" style={{ stopColor: '#FE6D36', stopOpacity: 0}} />
                                </radialGradient>
                                <filter id="brillo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                                </filter>
                            </defs>
                            <circle cx="4vw" cy="2vw" r="1.5vw" fill="url(#gradienteSol)" filter="url(#brillo)" />
                        </svg>
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <radialGradient id="gradienteSol" cx="50%" cy="50%" r="40%" fx="50%" fy="50%">
                                <stop offset="80%" style={{ stopColor: '#ffcfbc', stopOpacity: .4}} />
                                <stop offset="100%" style={{ stopColor: '#FE6D36', stopOpacity: 0}} />
                                </radialGradient>
                                <filter id="brillo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                                </filter>
                            </defs>
                            <circle cx="1vw" cy="2vw" r="1.5vw" fill="url(#gradienteSol)" filter="url(#brillo)" />
                        </svg>
                        <ShineItem radius = ".5vw" id = "sparkle02" posX= "5vw" posY= "1vw" />
                        <ShineItem radius = ".6vw" id = "sparkle03" posX= "8vw" posY= "0w" />
                        <ShineItem radius = ".4vw" id = "sparkle04" posX= "14vw" posY= "0" />
                        <ShineItem radius = ".5vw" id = "sparkle05" posX= "10vw" posY= "0" />
                    </div>
                </div>
                <ExtSearchBar/>
                <Navbar barsColor = "#fff"/>
                <div id = "search-section">
                    <div id = "search-container">
                        <div id = "search-container-text">
                            <h1>Tu futuro hogar comienza aquí</h1>
                            <p>Desde modernos apartamentos hasta amplias casas familiares, te ayudamos a encontrar el lugar donde tus sueños se hacen realidad.</p>
                        </div>
                        <div id = "search-bar">
                            <ul id = "tab-bar">
                                <li onClick={(e) => { setSelect('action', 'Comprar'); tabBarFocus(e); }}>Comprar</li>
                                <li onClick={(e) => { setSelect('action', 'Vender'); tabBarFocus(e); }}>Vender</li>
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
                                    <Link to = "/props/" onClick={transformSelect}>
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
                            <ul id = "search-parameters-list">
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
                                    <button onClick={modalPop}>
                                        <svg
                                            fill="#fff"
                                            viewBox="0 0 16 16"
                                            height="2em"
                                            width="2em"
                                            >
                                            <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
                                        </svg>
                                    </button>
                                    <Link to = "/props/" onClick={transformSelect}>
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
                            <div id='header-building-container'>
                                <img src={buildingImg} alt="Building" />
                            </div> 
                        </div>
                    </div>
                    <div id='sugestion-section-scroller'>
                        <div id = "sugestion-section">
                            <div id='carousel-control'>
                                <button id='carousel-prev-button' onClick={carouselControl}>
                                    <svg
                                        fill="#fff"
                                        viewBox="0 0 16 16"
                                        height="2em"
                                        width="2em"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
                                        />
                                    </svg>
                                </button>
                                <button id='carousel-next-button' onClick={carouselControl}>
                                    <svg
                                        fill="#fff"
                                        viewBox="0 0 16 16"
                                        height="2em"
                                        width="2em"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div id = "props-cards-container">
                                {propertys.map((property) => {
                                    var isForSale = ""
                                    if(property.forSale === true){
                                        isForSale = "Para comprar"
                                    }
                                    else if(property.forRent === true){
                                        isForSale = "Para rentar"
                                    }
                                    else{
                                        isForSale = "Para vender"
                                    }
                                    return(
                                        <PropertyCard 
                                            id={property.id}
                                            forSaleSign={isForSale}
                                            picture={`../static/media/assets/${property.img1}`}
                                            price={property.price} 
                                            title={property.title} 
                                            description={property.description}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <article>
            <section id = "services-section">
                    <h2 id = "service-section-title">Nuestros Servicios</h2>
                    <p id = "service-section-text">Ya sea que estés buscando comprar, vender o invertir, ofrecemos una amplia gama de servicios que cubren todas las etapas del proceso inmobiliario. Desde la búsqueda de la propiedad ideal hasta el cierre de la venta, estamos contigo en cada paso del camino.</p>
                    <div className = 'services-container'>
                        <Service
                        icon = {Vector2}
                        text = "Asesoramiento personalizado para compradores y vendedores, facilitando la búsqueda, negociación y cierre de transacciones inmobiliarias."
                        title = "Compra y venta de propiedades"
                        />
                        <Service
                        icon = {Vector3}
                        text = "Asesoramiento para inversores interesados en adquirir propiedades con potencial de rentabilidad, ayudándolos a tomar decisiones estratégicas."
                        title = "Consultoría en inversiones inmobiliarias"
                        />
                        <Service
                        icon = {Vector4}
                        text = "Determinación del valor de mercado de inmuebles, tanto para la venta como para fines hipotecarios o de inversión"
                        title = "Valoración y tasación de propiedades"
                        />
                        <Service
                        icon = {Vector1}
                        text = "Ofrecemos  la posibilidad de asistencia a nuestros clientes que necesitan hipoteca."
                        title = "Asesoramiento Financiero"
                        />
                    </div>
                    <div id = "service-section-pictures">
                        <div className='service-section-picture-card'>
                            <img src={examProp1} alt="Example Property" />
                        </div>
                        <div className='service-section-picture-card'>
                            <img src={examProp2} alt="Example Property" />
                        </div>
                        <div className='service-section-picture-card'>
                            <img src={examProp3} alt="Example Property" />
                        </div>
                        <div className='service-section-picture-card'>
                            <img src={examProp4} alt="Example Property" />
                        </div>
                        <div className='service-section-picture-card'>
                            <img src={examProp5} alt="Example Property" />
                        </div>
                        <div className='service-section-picture-card'>
                            <img src={examProp6} alt="Example Property" />
                        </div>
                    </div>
                </section>
                <div id='client-reviews-container'>
                    <img src={background} alt="City Background" id='client-reviews-background'/>
                    <h2>Opiniones de nuestros clientes</h2>
                    <div id='client-cards-scroller'>
                        <div id='client-cards-container'>
                            {reviews.map((review, index) =>{
                                if(index % 2 === 0){
                                    return(
                                        <ClientOpinion
                                            // picture = {review.img}
                                            picture = {`../static/media/assets/${review.img}`}
                                            name = {review.name}
                                            profession = {review.job}
                                            title = {review.title}
                                            review = {review.review}
                                            is_reversed = "is_reversed"
                                        />
                                    )
                                }
                                else{
                                    return(
                                        <ClientOpinion
                                            // picture = {review.img}
                                            picture = {`../static/media/assets/${review.img}`}
                                            name = {review.name}
                                            profession = {review.job}
                                            title = {review.title}
                                            review = {review.review}
                                        />
                                    )
                                }  
                            })}
                        </div>
                    </div>
                    <div id = "quick-contact-container">
                        <div id='sparkle-subcontainer05'>
                            <ShineItem radius = ".3vw" id = "sparkle01" posX= "9vw" posY= "-3vw" />
                            <ShineItem radius = ".5vw" id = "sparkle02" posX= ".3vw" posY= "3vw" />
                            <ShineItem radius = ".4vw" id = "sparkle03" posX= ".3vw" posY= "-9vw" />
                            <ShineItem radius = ".3vw" id = "sparkle04" posX= ".3vw" posY= "4vw" />
                            <ShineItem radius = ".4vw" id = "sparkle05" posX= ".3vw" posY= "0vw" />
                            <ShineItem radius = ".3vw" id = "sparkle06" posX= ".3vw" posY= "1vw" />
                            <ShineItem radius = ".3vw" id = "sparkle07" posX= ".3vw" posY= "-5vw" />
                            <ShineItem radius = ".4vw" id = "sparkle08" posX= ".3vw" posY= "-3vw" />
                        </div>
                        <div id='sparkle-subcontainer06'>
                            <ShineItem radius = ".5vw" id = "sparkle01" posX= "3vw" posY= "5vw" />
                            <ShineItem radius = ".2vw" id = "sparkle02" posX= "1vw" posY= ".6vw" />
                            <ShineItem radius = ".6vw" id = "sparkle03" posX= "15vw" posY= "1vw" />
                            <ShineItem radius = ".3vw" id = "sparkle04" posX= "1vw" posY= "1vw" />
                            <ShineItem radius = ".2vw" id = "sparkle05" posX= "6vw" posY= ".6vw" />
                            <ShineItem radius = ".3vw" id = "sparkle06" posX= "8vw" posY= "2vw" />
                            <ShineItem radius = ".3vw" id = "sparkle07" posX= "2vw" posY= "0" />
                            <ShineItem radius = ".2vw" id = "sparkle08" posX= "18vw" posY= "1vw" />
                        </div>
                        <h2>Donde cada propiedad cuenta</h2>
                        <p>¿Listo para dar el siguiente paso?<br/> Ya sea que busques tu próximo hogar o una oportunidad de inversión, estamos aquí para ayudarte a lograr tus objetivos inmobiliarios</p>
                        <form id='quick-contact-form' action="https://formsubmit.co/info@inmobiliariacalu.com" method="POST"> 
                            <input type="text" name = "email" placeholder='Enter your mail address'/>
                            <button>Submit</button>
                            <input type="hidden" name="_captcha" value="false" />
                        </form>
                    </div>
                </div>
            </article>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Home;