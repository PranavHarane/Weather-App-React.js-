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

    return <div className="border-2 border-solid border-[#00ddff] rounded-[15px] none absolute top-[10vh]" style={{display:display}} ><p  className="text-[20px] p-[8px_16px]">{props?.error}</p></div>
}

export default Error;