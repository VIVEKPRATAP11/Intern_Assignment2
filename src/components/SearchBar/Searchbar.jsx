import React, { useContext } from "react";
import "./Searchbar.css";
import { BiSearch } from "react-icons/bi";
import { carContext } from "../../context";

function Searchbar() {
  const { searchTerm, setSearchTerm } =
    useContext(carContext);
  return (
    <div className="search-bar">
      <input
        className="search-field"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BiSearch className="search-icon" />
    </div>
  );
}

export default Searchbar;
