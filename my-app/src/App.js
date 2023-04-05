import React, { useEffect, useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import SearchBlock from "./SearchBlock/SearchBlock.js";

function App() {
  const [data,setData] = useState({});

  useEffect(() =>{
    fetch('http://127.0.0.1:5000/MainPage')
    .then(response => response.json())
    .then(data => setData(data));
    console.log("Anisha");
  },[]);
  return (
   <div>
    <Navbar />
    <br></br>
    <SearchBlock />
   </div>
  );
}

export default App;
