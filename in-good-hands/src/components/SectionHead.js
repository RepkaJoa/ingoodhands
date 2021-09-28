import React from "react";
import HeadBackground from "./HeadBackground";
import HeadNaviUp from "./HeadNaviUp";
import HeadNaviDown from "./HeadNaviDown";
import HeadMain from "./HeadMain";

export default function SectionHead(){
    return <>
    <div id={"start"} className={"section_row container"}>
        <HeadBackground/>
        <div className={"head"}>
            <div className={"head_navi"}>
            <HeadNaviUp/>
            <HeadNaviDown/>
            </div>
            <HeadMain/>
        </div>
    </div>

    </>
}