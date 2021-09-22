import React from "react";
import Heading from "./Heading";
import {Link} from "react-router-dom";
import Button from "./Button";

export default function HeadMain(){
    return <>
        <div className={"section_main section_column"}>
            <Heading head_text={"Zacznij pomagać!\nOddaj niechciane rzeczy w zaufane ręce"} />

            <div className={"section_main_buttons section_row"}>
                <Link to={"/login"} className={"link"}> <Button text={"Oddaj \n rzeczy"}/></Link>
                <Link to={"/login"} className={"link"}>  <Button text={"Zorganizuj \n Zbiórkę"}/></Link>
            </div>
        </div>
    </>
}
