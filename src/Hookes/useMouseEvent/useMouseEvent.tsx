import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";


function useMouseEvent() {
    const [clickedTexts, setClickedTexts] = useState([]);
    const [numerontigo, setNovonumero] = useState(0);

    useEventListener('mousedown', (event: any) => {
        const buttonElementHtml: any = event.target;
        const buttonText: string = buttonElementHtml.innerText;

        console.log("Clicou");
        console.log(buttonText);



        // Atualiza o estado com o texto clicado
        setClickedTexts((prevClickedTexts) => [...prevClickedTexts, buttonText]);
       
        const listCalculos = ['+', '-', '*', '/']

        listCalculos.forEach(element => {
            if (buttonText == element) {
                const numero: string = String(clickedTexts)
                setNovonumero(parseInt(numero))
               


                window.alert(numerontigo)
          
            }
        });

    });

    // Retorna a lista de textos clicados
    return clickedTexts;
}

export default useMouseEvent;
