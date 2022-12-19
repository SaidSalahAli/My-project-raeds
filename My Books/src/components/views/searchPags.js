import { Link } from "react-router-dom";
import { useState } from "react";
import ShowSearch from "./ShowSearch";
const SearchPages = ({ setAllBooks, allBooks }) => {
  const [searchTextValue, setSearchTextValue] = useState("");
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          to="/"
          className="close-search"
          //   onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchTextValue}
            onChange={(e) => setSearchTextValue(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ShowSearch 
        allBooks={allBooks}
        setAllBooks={setAllBooks}
          searchTextValue={searchTextValue}
          
        />
      </div>
    </div>
  );
};
export default SearchPages;
