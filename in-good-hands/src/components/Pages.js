import React from "react";

export default function Pages({numbers, handle}){



    return<>
    <ul className={"section_row center"}>
        {
            numbers.map((el,index)=> {
                return <li onClick={()=> handle(el)} id={el} key={index} className={"menu_down"}>{el}</li>
            })
        }
    </ul>
    </>
}