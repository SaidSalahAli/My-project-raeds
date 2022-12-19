import Shelf from "../shelf";
import Fbi from "../Fbi";
import * as BooksApI from "./BooksAPI";
import { useEffect, useState } from "react";

const MainPage = ( ) => {
  const [mainPageBooks, setMainPageBooks] = useState([]);
  // console.log(mainPageBooks)

  // setMainPageBooks("hii")
  // console.log(mainPageBooks)

  // setMainPageBooks((prev)=>{
  //   let newvalue = prev + " hello "
  //   return newvalue
  // })
  

  // function Example(){
  //   return(
  //     <div>
  //       {mainPageBooks}
  //     </div>
        
  //   )
  // }


    
     
  const [changed, setChanged] = useState({});

  
  useEffect(() => {
    BooksApI.getAll()
      .then((r) => {
        setMainPageBooks(r);
      
      })
      
  }, [changed]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf
          books={mainPageBooks}
          shelf="currentlyReading"
          setChanged={setChanged}
        />
        <Shelf 
          books={mainPageBooks}
          shelf="wantToRead"
          setChanged={setChanged}
           />
        <Shelf books={mainPageBooks} shelf="read" setChanged={setChanged} />
      </div>
      <Fbi />
    </div>
  );
};
export default MainPage;
