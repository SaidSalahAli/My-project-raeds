import "./App.css";
import { useState } from "react";
import SearchPages from "./components/views/searchPags";
import MainPage from "./components/views/mainPage";
import {  Routes, Route } from "react-router-dom";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  return (
    <div className="App">
     <Routes>

       <Route exact path='/' element={< MainPage
            setAllBooks={setAllBooks}
          />} /> 
       <Route path="/search" element={
          <SearchPages
          allBooks={allBooks}
          setAllBooks={setAllBooks}
          />} />
      
      </Routes>
    </div>
  );
}

export default App;
