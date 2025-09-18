import React, { useState } from "react";

const InputBox = (props) => {

    const [value , setValue] = useState("");

    return (
        <div className="h-[12%] flex justify-center items-center">
            <input className="bg-white w-[80%] p-[7px_10px_8px_20px] rounded-[30px_0px_0px_30px] border-none outline-none" type="text" placeholder="Enter a city name" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className="h-[39px] p-[0px_16px_0px_10px] bg-amber-400 border-none rounded-[0px_30px_30px_0px] cursor-pointer" onClick={() =>{props.function(value); setValue("")}}><img className="h-[20px] w-[20px]" src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Search" /></button>
        </div>
    )
}

export default InputBox;