function SearchResultItem(props){
    return(
        <>
        <style>
            {`
                .search-result-item{
                    padding: .8vw 1.3vw .8vw 1.3vw;
                    background-color: transparent;
                    border: 1px solid #FE6D36;
                    border-radius: 2vw; 
                    white-space: nowrap;
                    min-width: fit-content;
                }
                .search-result-item p{
                    margin: 0;
                    font-size: 1vw
                }
            `}
        </style>
        <div className="search-result-item">
            <p>{props.text}</p>
        </div>
        </>
    );
}
export default SearchResultItem;