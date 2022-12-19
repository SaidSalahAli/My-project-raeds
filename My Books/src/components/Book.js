import * as BooksApI from "../components/views/BooksAPI";

const Book = ({  books, shelf, setChanged }) => {
  
  const handleChangeShelf = (book, shelf) => {
    BooksApI.update(book, shelf).then((res) => {
      setChanged(res);
    });
  };  


  return books.map((book) => {
    return (
      book.shelf === shelf && (
        <li key={book.title}>
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
                    handleChangeShelf(book, e.target.value);
                  }}
                  defaultValue={book.shelf}>
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>

                  <option value="nonde">REMOVE</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
              {book.authors ? book.authors[0] : ""}
            </div>
          </div>
        </li>
      )
    );
  });
};
export default Book;
