import React from "react";
import Box from "./Box";

export default function SectionYellow(){

    return <>
        <div className={ "section_row"}>
        <Box number={"10"}
         header={"ODDANYCH WORKÓW"}
         description={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque " +
         "vel enim a elit viverra elementuma. Aliquam erat volutpat."}/>
        <Box number={"5"}
             header={"WSPARTYCH ORGANIZACJI"}
             description={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque " +
             "vel enim a elit viverra elementuma. Aliquam erat volutpat."}/>
        <Box number={"7"}
             header={"ZORGANIZOWANY ZBIÓREK"}
             description={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque " +
             "vel enim a elit viverra elementuma. Aliquam erat volutpat."}/>
        </div>
    </>
}