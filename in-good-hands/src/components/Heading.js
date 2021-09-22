import React from "react";

export default function Heading({head_text}){
    return <>

        <div className={"section_heading"}>
            <div className={"heading"}>{head_text}</div>
        </div>
    </>
}