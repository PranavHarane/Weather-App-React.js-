import React, { useEffect, useState } from "react";

const Error = (props) => {

    const [display , setDisplay] = useState("inline");

    useEffect(()=>{
        const timer = setTimeout(() => {
        setDisplay("none");
    }, 3000);
        return () => clearTimeout(timer);    
    }, 
    [props.error]
    ); 

    return <div id="message" style={{display:display}} ><p id="message-text">{props?.error}</p></div>
}

export default Error;