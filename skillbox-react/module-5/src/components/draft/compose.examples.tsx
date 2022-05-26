import React from "react";
import { getValue } from "../../utils/react/pickFromSyntheticEvent";
import { preventDefault } from "../../utils/react/preventDefault";
import { stopPropagation } from "../../utils/react/stopPropagation";

function InputExample({ value, onChange }: any){
    return (
        <input 
        value={value}
        onChange={preventDefault(stopPropagation(getValue(onChange)))}
         />
    )
}

