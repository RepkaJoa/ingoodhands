import React, {useState} from "react";
import Paragraf from "./Paragraf";
import List from "./List";
import Pages from "./Pages";
export default function Navigation(){
    const [text, SetText]=useState("Text 1 - Fundacje");
    return <>
    <div className={"section_column"}>
    <ul className={"section_row center"}>
        <li className={"menu_down"}>Fundacjom</li>
        <li className={"menu_down"}>Organizacjom <br/> pozarządowym</li>
        <li className={"menu_down"}>Lokalnym <br/> zbiórkom</li>
    </ul>
    <Paragraf text={text}/>
    <List/>
    <Pages/>
</div>
    </>
}