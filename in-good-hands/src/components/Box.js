import React from "react";

export default function Box({number, header, description}){

    return<>
        <div className={"box"}>
        <div className={"box_number"}>{number}</div>
        <h2 className={"box_header"}>{header}</h2>
        <p className={"box_description"}>{description}</p>
        </div>
    </>
}