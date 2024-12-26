import '../static/propertyCard.css'
import { Link } from 'react-router-dom';

function PropertyCard(props){
    return(
        <div className = "property-card" id = {props.id}>
            <div id = "property-card-picture">
                {/* <img src = {props.picture} alt = "Propiedad" /> */}
                {props.picture ? (
                    <img src={props.picture} alt="Propiedad" onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image+Available';
                    }} />
                ) : (
                    <img src="https://via.placeholder.com/300x200?text=No+Image+Available" alt="No image available" />
                )}
                <p id='for-sale-sign'>{props.forSaleSign}</p>
                <p id='price'>Precio: € {props.price}</p>
            </div>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.description}
            </p>
            <Link to={`/property/${props.id}`}>
                <button>
                    Ver detalles
                </button>
            </Link>    
        </div>
    );
}

export default PropertyCard