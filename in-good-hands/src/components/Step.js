import React from "react";

export default function Step({text, description, icon }){

    return <>
    <div className={"step"}>
        <img className={"step_img"} src={icon}/>
        <h2 className={"step_header"}>{text}</h2>
        <p className={"step_description"}>{description}</p>
    </div>
    </>
}