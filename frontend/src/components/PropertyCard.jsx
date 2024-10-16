import '../static/propertyCard.css'
import { Link } from 'react-router-dom';

function PropertyCard(props){
    return(
        <div className = "property-card" id = {props.id}>
            <div id = "property-card-picture">
                <img src = {props.picture} alt = "Property" />
                <p id='for-sale-sign'>For Sale</p>
                <p id='price'>Price: $ {props.price}</p>
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