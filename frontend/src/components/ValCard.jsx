import "../static/valcard.css"

function ValCard(props){
    return(
        <div className = "val-card">
            <img src={props.img} alt="Crew" />
            <div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default ValCard