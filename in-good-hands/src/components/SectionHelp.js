import React from "react";
import Navigation from "./Navigation";
import FourHeading from "./FourHeading";


export default function SectionHelp(){
    return <>
        <div className={"section_column center"}>
        <FourHeading head_text={"Komu pomagamy?"}/>
        <div id={"fund_org"} >

        <Navigation />

        </div>
        </div>
    </>
}