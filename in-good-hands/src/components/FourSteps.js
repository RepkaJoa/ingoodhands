import React from "react";
import Step from "./Step";
import icon1 from "../assets/Icon-1.png"
import icon2 from "../assets/Icon-2.png"
import icon3 from "../assets/Icon-3.png"
import icon4 from "../assets/Icon-4.png"

export default function FourSteps(){
    return <>
        <div className={"section_row four_steps"}>
            <Step icon={icon1} text={"Wybierz rzeczy"} description={"ubrania, zabawki, sprzęt i inne"}/>
            <Step icon={icon2} text={"Spakuj je"} description={"skorzystaj z worków na śmieci"}/>
            <Step icon={icon3} text={"Zdecyduj komu chcesz pomóc"} description={"wybierz zaufane miejsce"}/>
            <Step icon={icon4} text={"Zamów kuriera"} description={"kurier przyjedzie w dogodnym terminie"}/>

        </div>

    </>
}