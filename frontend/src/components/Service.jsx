import "../static/service.css"

function Service(props){
    return(
        <div className = "service-card">
            <div className = "icon-container"><img src={props.icon} alt={props.icon} /></div>
            <p>{props.text}</p>
            <h5>{props.title}</h5>
        </div>
    );
}

export default Service