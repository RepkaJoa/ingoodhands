import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Step from "./Step";

export default function SectionFourSteps(){

    return <>
<div className={"four_steps_container"}>
    <Heading head_text={"Wystarczą 4 proste kroki"}/>
    <div className={"section_row"}>
        <Step/>
        <Step/>
        <Step/>
        <Step/>
    </div>
<Button text={"ODDAJ RZECZY"}/>
</div>

    </>
}