import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import FourSteps from "./FourSteps";
import {Link} from "react-router-dom";

export default function SectionFourSteps(){

    return <>
<div id="4steps" className={"section_column"}>
    <Heading head_text={"Wystarczą 4 proste kroki"}/>
    <FourSteps/>
    <Link to={"./login"} className={"link center"}><Button text={"ODDAJ \n RZECZY"}/></Link>
</div>

    </>
}