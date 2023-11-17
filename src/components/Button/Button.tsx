import React from "react";
import useEventListener from "@use-it/event-listener";
import useMouseEvent from "../../Hookes/useMouseEvent/useMouseEvent";


function Button(props) {
    
    const numero = props.numero;
    const color = props.color;
    const backcolor = props.backcolor;
    const fun = props.fun;

    return (<div className="react-button">
        <div
           style={{
            margin:5,
            marginRight:0,
            width: 110,
            height: 110,
            backgroundColor: `${backcolor}`,
            display: `flex`,
            justifyContent: `center`,
            textAlign: `center`,
            alignItems:`center`,
            borderRadius: '50px'
        }}>
            <h1 style={{
            color:`${color}`
            }}>{numero}</h1>
            
        </div>  
    </div>

    ) 

}

export default Button;