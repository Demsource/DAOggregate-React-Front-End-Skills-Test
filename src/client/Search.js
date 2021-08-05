import "./search.css";
import searchIcon from "./icons/search.svg";

function Search({ updateSearch }) {
  const inputChangeHandler = (e) => {
    updateSearch(e.target.value);
  };

  return (
    <div className="search">
      <div>
        <img src={searchIcon} alt="search icon" className="icon" />
        <input
          type="search"
          placeholder="Search"
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
}

export default Search;
