import React from "react";
import HeadBackground from "./HeadBackground";
import HeadNaviUp from "./HeadNaviUp";
import HeadNaviDown from "./HeadNaviDown";
import Heading from "./Heading";
import HeadMain from "./HeadMain";

export default function SectionHead(){
    return <>
    <div id={"start"} className={"section_row container"}>
        <HeadBackground/>
        <div className={"header_info"}>
        <HeadNaviUp/>
        <HeadNaviDown/>
        <HeadMain/>
        </div>
    </div>

    </>
}