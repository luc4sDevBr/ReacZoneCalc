import React from "react";
import Screen from "../Screen/Screen";
import { SCREEN_SIZE } from "../../settings/configs";
import useMouseEvent from "../../Hookes/useMouseEvent/useMouseEvent";

function Mostrador() {
    const tela = useMouseEvent();
    
    return (<div>
        <div
            style={{
                left: `0px`,
                width: SCREEN_SIZE,
                height: 193,
                backgroundColor: "black",
                position: 'absolute',
                //bottom: `127px`,
                borderRadius: '15px',
                color: `white`,
                display:'flex',
                justifyContent:'flex-end',
                alignItems:`center`
            }}>
            <h1 style={{margin: 10, fontFamily:`Helvetica`, fontSize:`25pt`}}>{`${tela.join("")}`}</h1>
        </div>
    </div>)
}

export default Mostrador;