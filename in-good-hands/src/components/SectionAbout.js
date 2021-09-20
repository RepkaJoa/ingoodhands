import React from "react";
import Heading from "./Heading";
import signature from "../assets/Signature.svg"

export default function SectionAbout(){

    return <>
    <div id={"about"} className={"section_row"}>
        <div className={"section_column section_about"}>
            <Heading  head_text={"O nas"}></Heading>
            <p className={"about_text"}>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <div className={"signature"}> </div>
        </div>
        <div className={"about_background section_about"}></div>
    </div>

    </>
}