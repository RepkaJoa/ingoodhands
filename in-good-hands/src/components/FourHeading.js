import React from "react";

export default function FourHeading({head_text}){
    return <>

        <div className={"four_heading"}>
            <div className={"four_heading_text"}>{head_text}</div>
            <div className={"four_heading_decoration"}> </div>
        </div>
    </>
}