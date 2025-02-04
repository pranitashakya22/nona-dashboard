import { IoSearch } from "react-icons/io5";


const SearchBar = ()=>{
    return(
        <>
        <div className="searchBar position-relative d-flex align-items-center">
            <IoSearch className="me-2"/>
            <input type="text" placeholder="Search here..." />
        </div>
        </>
    )
}


export default SearchBar;