import "../static/rated-reviews.css";


function RatedReviews(props){
    const star = <svg viewBox="0 0 512 512" fill="#FE6D36" height="1em" width="1em">
      <path
        fill="true"
        stroke="#FE6D36"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
      />
    </svg>;
    const rating = Number(props.rating);
    const rate = [];

    for(let i = 0; i < rating; i++){
        rate.push(star);
    }
    return(
        <div className="rated-review-card">
            <img src={props.img} alt="Client" />
            <div className = "rated-card-text-container">
                <div className = "rated-card-text-header-container">
                    <h4>{props.name}</h4>
                    <div className = "rating-container">
                        {rate}
                    </div>
                </div>
                <p className="rated-card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default RatedReviews;