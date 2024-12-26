import "../static/client-opinion-card.css"

function ClientOpinion(props){
    return(
        <div className={"client-opinion-card " + `${props.is_reversed}`}>   
            <div className="client-info">
                {/* <img src={props.picture} alt="Client" /> */}
                <img 
                    src={props.picture} 
                    alt="No image available" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/150x150?text=No+Image+Available';
                    }} 
                />
                <div className="client-info-text">
                    <div>
                        <h5>{props.name}</h5>
                        <h6>{props.profession}</h6>
                    </div>
                    <svg
                        fill="#FE6D36"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.354 6.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7 8.793l2.646-2.647a.5.5 0 01.708 0z"
                        />
                        <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z" />
                    </svg>
                </div>

            </div>
            <div className="client-opinion">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#feb47b', stopOpacity: .5 }} />
                            <stop offset="100%" style={{ stopColor: '#ff7e5f', stopOpacity: .5 }} />
                        </linearGradient>
                    </defs>
                    <circle cx="80%" cy="20%" r="30%" fill="url(#gradient)" />
                </svg>
                <h3>{props.title}</h3>
                <p>{props.review}</p>
            </div>
        </div>
    );
}

export default ClientOpinion;