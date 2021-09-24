import React from "react";
import Heading from "./Heading";

export default function SectionContact(){
    return <>
        <div id={"contact"} className={"section_row"}>
            <div className={"contact_background section_two"}>

            </div>
            <div className={"contact_form section_two"}>
                <form>
                    <Heading head_text={"Skontaktuj się z Nami"}/>
                    <input type={"text"}/>
                    <input type={"email"}/><br/>
                    <input type={"textarea"}/><br/>
                    <input type={"submit"} value={"Wyślij"}
                           className={"button"}/>
                </form>
            </div>
        </div>
    </>
}