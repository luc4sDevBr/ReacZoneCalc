import React from "react";
import Screen from "./Screen";
import Button from "../Button/Button";
import { SCREEN_SIZE } from "../../settings/configs";
import useMouseEvent from "../../Hookes/useMouseEvent/useMouseEvent";

function BaseButton() {

    return (<div style={{
        width: SCREEN_SIZE,
        height: 590,
        backgroundColor: "black",
        position: `absolute`,
        bottom: `127px`,
        borderRadius: '10px',
        display: `grid`

    }}>
        <table>
            <tbody style={{
                alignItems: `center`
            }}>
                <tr>
                    <td>
                        <Button numero={`C`} color={'#ff333c'} backcolor={`#1E1F22`} />
                        <Button numero={1} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={4} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={7} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={`+-`} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                    </td>
                    <td>
                        <Button numero={`()`} color={`#40a300`} backcolor={`#1E1F22`} />
                        <Button numero={2} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={5} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={8} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={0} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                    </td>
                    <td>
                        <Button numero={`%`} color={`#1CC64F`} backcolor={`#1E1F22`} />
                        <Button numero={3} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={6} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={9} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                        <Button numero={`.`} color={`#EBEBEC`} backcolor={`#1E1F22`} />
                    </td>
                    <td>
                        <Button numero={`/`} color={`#1CC64F`} backcolor={`#1E1F22`} />
                        <Button numero={`X`} color={`#1CC64F`} backcolor={`#1E1F22`} />
                        <Button numero={`-`} color={`#1CC64F`} backcolor={`#1E1F22`} />
                        <Button numero={`+`} color={`#1CC64F`} backcolor={`#1E1F22`} />
                        <Button numero={`=`} backcolor={`#1CC64F`} />
                    </td>

                </tr>
            </tbody>
        </table>
    </div>)
}

export default BaseButton;