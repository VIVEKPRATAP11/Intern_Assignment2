import { useEffect, useState } from "react";
import "./App.css";
import Routing from "./Routing";
import { carContext } from "./context.js";

function App() {
  const [allcar, setAllCar] = useState([]);
  const [cardata, setCarData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  return (
    <>
      <carContext.Provider
        value={{
          allcar,
          setAllCar,
          cardata,
          setCarData,
          searchTerm,
          setSearchTerm,
          // page,
          // setPage,
        }}
      >
        <Routing />
      </carContext.Provider>
    </>
  );
}

export default App;
