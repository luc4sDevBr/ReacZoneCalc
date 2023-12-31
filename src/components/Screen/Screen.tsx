import React from "react";
import Mostrador from "./Mostrador";
import BaseButton from "./BaseButtons";
import { BASE_SIZE_H, BASE_SIZE_W } from "../../settings/configs";
import useMouseEvent from "../../Hookes/useMouseEvent/useMouseEvent";

function Screen() {
    

    return (<div>
        <div
           style={{
            width: BASE_SIZE_W,
            height: BASE_SIZE_H,
            backgroundColor: `#1E1F22`,
            display: `flex`,
            justifyContent: `center`,
            textAlign: `left`,
            borderRadius: '20px'
        }}>
             <Mostrador/>
             <BaseButton/>
        </div>
          
    </div>


    )

}

export default Screen;