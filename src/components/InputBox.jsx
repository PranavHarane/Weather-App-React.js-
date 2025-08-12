import React, { useState } from "react";

const InputBox = (props) => {

    const [value , setValue] = useState("");

    return (
        <div id="search-box">
            <input id="search-value" type="text" placeholder="Enter a city name" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button id="search-button" onClick={() =>{props.function(value); setValue("")}}><img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Search" /></button>
        </div>
    )
}

export default InputBox;