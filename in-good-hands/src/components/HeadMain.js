import React from "react";
import Heading from "./Heading";
import {Link} from "react-router-dom";
import Button from "./Button";

export default function HeadMain(){
    return <>
        <div className={"header_info section"}>
            <Heading head_text={"Zacznij pomagać!\nOddaj niechciane rzeczy w zaufane ręce"} />

        <div className={"section_two"}>
            <Link to={"/login"} className={"link"}> <Button text={"Oddaj rzeczy"}/></Link>
            <Link to={"/login"} className={"link"}>  <Button text={"Zorganizuj Zbiórkę"}/></Link>
        </div>
        </div>
    </>
}
