import React from "react";
import './SearchBlock.css';
function handleClick() {
  // Send data to the backend via POST
  fetch('http://127.0.0.1:5000/acceptText', {

    method: 'POST', 
    mode: 'cors', 
    body: document.getElementById("inputText").value // body data type must match "Content-Type" header

  })
}

const SearchBlock = () => {
  return (
<div id="SB">
  <form id="form"  onClick={handleClick} method="post">
        <input id="inputText" type="textbox"/>
        <br/>
        <input id="Submitbutton" type="button" value="submit"/>
    </form>
</div>


  );
};

export default SearchBlock;