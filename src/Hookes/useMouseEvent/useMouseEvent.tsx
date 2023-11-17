import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";

function useMouseEvent() {
    const [clickedTexts, setClickedTexts] = useState([]);

    useEventListener('mousedown', (event: any) => {
        const buttonElementHtml:any = event.target;
        const buttonText:string = buttonElementHtml.innerText;

        console.log("Clicou");
        console.log(buttonText);

        // Atualiza o estado com o texto clicado
        setClickedTexts((prevClickedTexts) => [...prevClickedTexts, buttonText]);
    });

    // Retorna a lista de textos clicados
    return clickedTexts;
}

export default useMouseEvent;
