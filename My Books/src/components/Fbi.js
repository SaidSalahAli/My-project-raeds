import { Link } from "react-router-dom";

 
 const Fbi = ({setShowSearchpage,showSearchPage}) =>{
 return(
    <div className="open-search">
       <Link to='/search' >Add a book</Link>
    </div>
 )
}
export default Fbi;
