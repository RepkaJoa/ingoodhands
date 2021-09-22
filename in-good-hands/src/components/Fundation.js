import React from "react";
import Paragraf from "./Paragraf";
import List from "./List";
import Pages from "./Pages";

export default function Fundation({text, list_item, pages}){

    return <>
        <Paragraf text={text}/>

        <Pages/>
    </>
}