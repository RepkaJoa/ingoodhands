import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Step from "./Step";
import FourSteps from "./FourSteps";

export default function SectionFourSteps(){

    return <>
<div className={"four_steps_container"}>
    <Heading head_text={"Wystarczą 4 proste kroki"}/>
    <FourSteps/>
    <Button text={"ODDAJ RZECZY"}/>
</div>

    </>
}