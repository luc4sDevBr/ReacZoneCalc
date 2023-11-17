import React from "react";
import Screen from "./Screen";
import Button from "../Button/Button";
import { SCREEN_SIZE } from "../../settings/configs";

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
                        <Button numero={`C`} color={'#ff333c'} />
                        <Button numero={1} color={`#EBEBEC`} />
                        <Button numero={4} color={`#EBEBEC`}/>
                        <Button numero={7} color={`#EBEBEC`}/>
                        <Button numero={`+-`} color={`#EBEBEC`} />
                    </td>
                    <td>
                        <Button numero={`()`} color={`#40a300`}/>
                        <Button numero={2} color={`#EBEBEC`}/>
                        <Button numero={5}color={`#EBEBEC`} />
                        <Button numero={8} color={`#EBEBEC`}/>
                        <Button numero={0} color={`#EBEBEC`}/>
                    </td>
                    <td>
                        <Button numero={`%`} color={`#1CC64F`}/>
                        <Button numero={3} color={`#EBEBEC`}/>
                        <Button numero={6} color={`#EBEBEC`}/>
                        <Button numero={9} color={`#EBEBEC`}/>
                        <Button numero={`.` } color={`#EBEBEC`} />
                    </td>
                    <td>
                        <Button numero={`/`} color={`#1CC64F`} />
                        <Button numero={`X`} color={`#1CC64F`}/>
                        <Button numero={`-`} color={`#1CC64F`}/>
                        <Button numero={`+`} color={`#1CC64F`}/>
                        <Button numero={`=`} backcolor ={`#1CC64F`}/>
                    </td>

                </tr>
            </tbody>
        </table>



    </div>)
}

export default BaseButton;