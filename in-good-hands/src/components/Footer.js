import React from "react";
import f_logo from "../assets/Facebook.png";
import i_logo from "../assets/Instagram.png";
export default function Footer(){

    return <>
<div className={"footer section_row center space_between"}>
    <span className={"space"}/>
    <span className={"center"}> Copyright by Coders Lab </span>
    <div className={"logo section_row space_between"}>
       <a href={"https://facebook.com"} className={"link"}> <img src={f_logo} alt={"facebook"}/></a>
        <span className={"space"}/>
        <span className={"space"}/>
        <a href={"https://www.instagram.com/"} className={"link"}> <img src={i_logo} alt={"instagram"}/></a>
    </div>
</div>
    </>
}