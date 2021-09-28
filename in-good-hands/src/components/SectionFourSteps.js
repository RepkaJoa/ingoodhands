import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import FourSteps from "./FourSteps";
import {Link} from "react-router-dom";
import FourHeading from "./FourHeading";

export default function SectionFourSteps(){

    return <>
    <div id="4steps" className={"section_column"}>

            <FourHeading head_text={"Wystarczą 4 proste kroki"}/>
            <FourSteps/>
        <button className={"four_steps_button"}>
            <Link to={"./logowanie"} className={"link center"}>
             ODDAJ RZECZY
        </Link>
        </button>
</div>

    </>
}