import React from "react";
import SectionHead from "./SectionHead";
import SectionYellow from "./SectionYellow";
import SectionFourSteps from "./SectionFourSteps";
import SectionAbout from "./SectionAbout";
import SectionContact from "./SectionContact";
import SectionHelp from "./SectionHelp";
import Footer from "./Footer";


export default function Home (){
    return <>
        <SectionHead/>
        <SectionYellow/>
        <SectionFourSteps/>
        <SectionAbout/>
        <SectionHelp/>
        <SectionContact/>
        <Footer/>
    </>
}