import './SearchContainer.css';


function SearchContainer() {
  return (
    <div className="search-container">
        {/* <form onSubmit={} className="selection"> */}
        <h2>Search for hundreds of players here...</h2>
        <input className="player-name-search" name="player-name-value" type="text" />
        {/* <button className="search-player-button">Search</button> */}
        {/* </form> */}
    </div>
  );
}

export default SearchContainer;
