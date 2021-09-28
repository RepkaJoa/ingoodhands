import React from "react";
import Heading from "./Heading";
import {Link} from "react-router-dom";
import Button from "./Button";

export default function HeadMain(){
    return <>
        <div className={"main"}>
        <div className={"section_column"}>
            <Heading head_text={"Zacznij pomagać!\nOddaj niechciane rzeczy w zaufane ręce"} />

            <div className={"section_row"}>
                <Link to={"/logowanie"} className={"link"}> <Button text={"Oddaj \n rzeczy"}/></Link>
                <Link to={"/logowanie"} className={"link"}>  <Button text={"Zorganizuj \n Zbiórkę"}/></Link>
            </div>
        </div>
        </div>
    </>
}
