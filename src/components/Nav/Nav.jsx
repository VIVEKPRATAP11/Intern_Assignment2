import React, { useContext } from "react";
import "./Nav.css";
import Searchbar from "../SearchBar/Searchbar";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav">
          <div className="search-bar-left">
            <Searchbar />
          </div>
          <div className="nav-options">
            <select id="relevences-option">
              <option value="volvo">Relevence</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
              <option value="ford">Ford</option>
              <option value="honda">Honda</option>
            </select>
            <select id="all-brand-option">
              <option value="volvo">All brands</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
              <option value="kia15">KIA15</option>
              <option value="kia17">KIA17</option>
            </select>
          </div>
          <div className="nav-right"></div>
        </div>
      </div>
    </>
  );
}

export default Nav;
