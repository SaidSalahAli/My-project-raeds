import Book from "./Book";
const Shelf = ({shelf,books,setChanged}) => {

  let title;
  if (shelf === "currentlyReading") {
    title = "Currently Reading";
  } else if (shelf === "wantToRead") {
    title = "want To Read";
  } else {
    title = "Read";
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book title={title}
            shelf={shelf}
            books={books}
            setChanged={setChanged}
            />
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
