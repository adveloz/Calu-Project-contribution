import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ExtSearchBar from './ExtSearchBar';


// Configure axios defaults
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

function AdminSite(){
    const [fileNames, setFileNames] = useState([]);
    const [mapNames, setMapNames] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [location, setLocation] = useState();
    const [surface, setSurface] = useState();
    const [type, setType] = useState();
    const [price, setPrice] = useState();
    const [rooms, setRooms] = useState();
    const [doubleRooms, setDoubleRooms] = useState();
    const [singleRooms, setSingleRooms] = useState();
    const [bRooms, setbRooms] = useState();
    const [fullBRooms, setFullBRooms] = useState();
    const [simpleBRooms, setSimpleBRooms] = useState();
    const [garage, setGarage] = useState();
    const [terraza, setTerraza] = useState();
    const [tastero, setTastero] = useState();
    const [garden, setGarden] = useState();
    const [elevator, setElevator] = useState();
    const [pool, setPool] = useState();
    const [balcon, setBalcon] = useState();
    const [plazaGarage, setPlazaGarage] = useState();
    const [forSale, setForSale] = useState();
    const [clientSale, setClientSale] = useState();
    // Estado para lat/lon
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        const names = [];
        
        for (let i = 0; i < files.length; i++) {
            names.push(files[i].name);
        }
        
        setFileNames(names);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const mapDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        const names = [];
        
        for (let i = 0; i < files.length; i++) {
            names.push(files[i].name);
        }
        
        setMapNames(names);
    };

    const mapOver = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async () => {
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toLocaleString();
        const numericDateTime = formattedDateTime.replace(/\D/g, '')

        // const images = {};
        // fileNames.forEach((img, index) => {
        //     images[`img${index + 1}`] = img
        // });

        const propData = {
            id: numericDateTime,
            title: title,
            description: description,
            location: location,
            surface: surface,
            type: type,
            price: price,
            numberOfRooms: rooms,
            doubleBedRooms: doubleRooms,
            simpleBedRooms: singleRooms,
            numberOfBathR: bRooms,
            fullBathrooms: fullBRooms,
            simpleBathrooms: simpleBRooms,
            garage: garage,
            terraza: terraza,
            trastero: tastero,
            garden: garden,
            elevator: elevator,
            pool: pool,
            balcon: balcon,
            plazaGarage: plazaGarage,
            forSale: forSale,
            clientSale: clientSale,
            img1: fileNames[0],
            img2: fileNames[1],
            img3: fileNames[2],
            img4: fileNames[3],
            img5: fileNames[4],
            img6: fileNames[5],
            img7: fileNames[6],
            img8: fileNames[7],
            img9: fileNames[8],
            img10: fileNames[9],
            img11: fileNames[10],
            img12: fileNames[11],
            img13: fileNames[12],
            img14: fileNames[13],
            img15: fileNames[14],
            img16: fileNames[15],
            img17: fileNames[16],
            img18: fileNames[17],
            img19: fileNames[18],
            img20: fileNames[19],
            img21: fileNames[20],
            img22: fileNames[21],
            img23: fileNames[22],
            img24: fileNames[23],
            img25: fileNames[24],
            img26: fileNames[25],
            img27: fileNames[26],
            img28: fileNames[27],
            img29: fileNames[28],
            img30: fileNames[29],
            mapImg: mapNames[0],
            latitude: latitude,
            longitude: longitude
        };
        
        try {
            // const response = await axios.post('http://127.0.0.1:8000/api/props/', propData);
            const response = await axios.post('/api/v1/props/', propData);
            console.log('Datos enviados:', response.data);
            alert("Los datos fueron guardados")
        } catch (error) {
            console.error('Error al enviar:', error);
            alert("Error al enviar")
        }
        };
    return(
       <section style={{width: '100vw', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <ExtSearchBar/>
        <div style={{width: '60vw', margin: '16px 0'}}>
          <label style={{marginRight: '8px'}}>Latitud:</label>
          <input
            type="text"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            placeholder="Ej: 40.7128"
            style={{marginRight: '24px', width: '120px'}}
          />
          <label style={{marginRight: '8px'}}>Longitud:</label>
          <input
            type="text"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            placeholder="Ej: -74.0060"
            style={{width: '120px'}}
          />
        </div>

       <style>
                    {`
                    div{
                        margin-left: 40px;
                        margin-top: 40px;
                        display: flex;
                        flex-direction: row;
                        width: 60vw;
                        gap: 1vw;
                        align-items: center;
                    }

                    input{
                        border-radius: .3vw;
                        border: 1px solid #aaa;
                        width:100%;
                    }
                    input[type="checkbox"]{
                        width: 3vw;
                    }
                    textarea{
                        border-radius: .3vw;
                        border: 1px solid #aaa;
                        width:100%;
                    }
                    h2{
                        color: #000
                        }
                    button{
                        width: 10vw;
                        height: 3vw;
                        border: 0;
                        background-color: #0feb25;
                        color: #fff;
                        font-size: 1.3vw;
                        border-radius: .5vw;
                        margin: 1vw;
                    }
                    `}
            </style>
        <div>
            <label htmlFor="title">Título</label>
            <input type="text" id="title" name="title" onChange = {(e)=> setTitle(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="description">Descripción</label>
            <textarea name="description" id="description" onChange = {(e)=> setDescription(e.target.value)}></textarea>
        </div>
        <div>
            <label htmlFor="location">Localización</label>
            <input type="text" id="location" name="location" onChange = {(e)=> setLocation(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="latitude">Latitud</label>
            <input type="number" id="latitude" name="latitude" value={latitude || ''} onChange={(e) => setLatitude(Number(e.target.value))} step="any" />
        </div>
        <div>
            <label htmlFor="longitude">Longitud</label>
            <input type="number" id="longitude" name="longitude" value={longitude || ''} onChange={(e) => setLongitude(Number(e.target.value))} step="any" />
        </div>
        {/* <div style={{ width: '60vw', height: '300px', margin: '20px 0' }}>
            <MapContainer center={[28.1235, -15.4363]} zoom={12} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
            <small>Haz clic en el mapa para seleccionar la ubicación de la propiedad.</small>
        </div> */}
        <div>
            <label htmlFor="surface">Superficie</label>
            <input type="text" id="surface" name="surface" onChange = {(e)=> setSurface(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="type">Tipo</label>
            <input type="text" id="type" name="type" onChange = {(e)=> setType(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="sellPrice">Precio</label>
            <input type="number" id="sellPrice" name="sellPrice" onChange = {(e)=> setPrice(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="rooms">Cantidad total de cuartos</label>
            <input type="number" id="rooms" name="rooms" onChange = {(e)=> setRooms(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="doubleRooms">Cantidad de cuartos dobles</label>
            <input type="number" id="doubleRooms" name="doubleRooms" onChange = {(e)=> setDoubleRooms(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="simpleRooms">Cantidad de cuartos simples</label>
            <input type="number" id="simpleRooms" name="simpleRooms" onChange = {(e)=> setSingleRooms(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="bathrooms">Cantidad total de baños</label>
            <input type="number" id="bathrooms" name="bathrooms" onChange = {(e)=> setbRooms(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="simpleBRooms">Cantidad de baños de aseo</label>
            <input type="number" id="simpleBRooms" name="simpleBRooms" onChange = {(e)=> setSimpleBRooms(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="fullBRooms">Cantidad de baños completos</label>
            <input type="number" id="fullBRooms" name="fullBRooms" onChange = {(e)=> setFullBRooms(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="garage">Garage</label>
            <input type="checkbox" id="garage" name="garage" onChange = {(e)=> setGarage(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="terraza">Terraza</label>
            <input type="checkbox" id="terraza" name="terraza" onChange = {(e)=> setTerraza(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="trastero">Trastero</label>
            <input type="checkbox" id="trastero" name="trastero" onChange = {(e)=> setTastero(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="garden">Jardín</label>
            <input type="checkbox" id="garden" name="garden" onChange = {(e)=> setGarden(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="elevator">Ascensor</label>
            <input type="checkbox" id="elevator" name="elevator" onChange = {(e)=> setElevator(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="pool">Piscina</label>
            <input type="checkbox" id="pool" name="pool" onChange = {(e)=> setPool(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="balcon">Balcón</label>
            <input type="checkbox" id="balcon" name="balcon" onChange = {(e)=> setBalcon(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="plazaGarage">Plaza de Garage</label>
            <input type="checkbox" id="plazaGarage" name="plazaGarage" onChange = {(e)=> setPlazaGarage(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="forSale">Para que el cliente compre</label>
            <input type="checkbox" id="forSale" name="forSale" onChange = {(e)=> setForSale(e.target.checked ? true : false)}/>
        </div>
        <div>
            <label htmlFor="clientSale">Para que el cliente venda</label>
            <input type="checkbox" id="clientSale" name="clientSale" onChange = {(e)=> setClientSale(e.target.checked ? true : false)}/>
        </div>
        <div 
            onDrop={handleDrop} 
            onDragOver={handleDragOver} 
            style={{
                border: '2px dashed #007bff', 
                width: '60vw',
                borderRadius: '5px', 
                padding: '20px', 
                textAlign: 'center'
            }}
        >
            <h2>Arrastra tus imágenes aquí</h2>
            <p>{fileNames.length > 0 ? `Archivos: ${fileNames.join(', ')}` : 'Ningún archivo aún.'}</p>
        </div>
        <div 
            onDrop={mapDrop} 
            onDragOver={mapOver} 
            style={{
                border: '2px dashed #007bff', 
                width: '60vw',
                borderRadius: '5px', 
                padding: '20px', 
                textAlign: 'center'
            }}
        >
            <h2>Arrastra la captura del mapa</h2>
            <p>{mapNames.length > 0 ? `Archivos: ${mapNames.join(', ')}` : 'Ningún archivo aún.'}</p>
        </div>
        <div>
            <button onClick={handleSubmit}>Aceptar</button>
            <Link to = "/">
                <button style={{backgroundColor: "red"}}>Atrás</button>
            </Link>
        </div>
       </section>
    )
}

export default AdminSite;