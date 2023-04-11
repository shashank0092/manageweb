
import React from "react";
const Button=({text,bgColor,hoverColor,textColor})=>{
    return(
        <>
            
                <a href="#" className={`p-3 px-6 pt-2 ${textColor==null?('text-white'):(`text-${textColor}`)} ${bgColor==null?('bg-brightRed'):(`bg-${bgColor}`)} rounded-full baseline `} >{text}</a>
            
        
        </>
    )
}

export default Button;