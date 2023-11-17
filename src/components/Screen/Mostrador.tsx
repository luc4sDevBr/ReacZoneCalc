import React from "react";
import Screen from "../Screen/Screen";
import { SCREEN_SIZE } from "../../settings/configs";

function Mostrador() {
    return (<div
        style={{
           
            width: SCREEN_SIZE,
            height: 193,
            backgroundColor: "black",
            position: 'absolute',
            //bottom: `127px`,
            borderRadius: '15px'

        }}
    />)
}

export default Mostrador;