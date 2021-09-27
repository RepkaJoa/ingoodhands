import React from "react";
import Heading from "./Heading";
import Navigation from "./Navigation";


export default function SectionHelp(){
    return <>
        <div className={"section_column center section_help"}>
        <Heading head_text={"Komu pomagamy?"}/>
        <div id={"fund_org"} >

        <Navigation />

        </div>
        </div>
    </>
}