//
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

const ShowSearch = ({ searchTextValue, setAllBooks, allBooks }) => {
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    searchTextValue === ""
      ? setSearchBooks([])
      : BooksAPI.search(searchTextValue).then((res) => 
         setSearchBooks(res)
        );
  }, [searchTextValue]);

  const handle = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };

  const matchBooks = (book) => {
    let myShelf = "none";
    for (let i = 0; i < allBooks.length; i++) {
      allBooks[i].title === book.title &&
        (myShelf = allBooks[i].shelf);
    }

    return myShelf;
  };
  
  useEffect(() => {
    BooksAPI.getAll().then((res) => setAllBooks(res) );
  }, [])
  
  return ( 
    Array.isArray(searchBooks) &&
    searchBooks.map((book) => {
      return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: book.imageLinks
                    ? `url(${book.imageLinks.thumbnail})`
                    : "",
                }}></div>
              <div className="book-shelf-changer">
                <select
                  onChange={(e) => {
                    handle(book, e.target.value);
                  }}
                  defaultValue={matchBooks(book)}>
                  <option value="noValue" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
              {book.authors ? book.authors[0] : ""}
            </div>
          </div>
        </li>
      );
    })
  );
};
export default ShowSearch;
