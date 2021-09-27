import React from "react";
import f_logo from "../assets/Facebook.png";
import i_logo from "../assets/Instagram.png";
export default function Footer(){

    return <>
<div className={"footer section_row space_between"}>
    <span className={"center"}> Copyright by Coders Lab </span>
    <div className={"logo section_row space_between"}>
        <img src={f_logo}/>
        <img src={i_logo}/>
    </div>
</div>
    </>
}