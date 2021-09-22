import React, {useState} from "react";

export default function List({list_item}) {


    return <>
    <ul className={"center section_column"}>
        {
            list_item.map((el,index)=> {
                return <li className={"list"} key={index}>{el.name}<span className={"space"}/>{el.description}<span className={"space"}/>{el.items}</li>
            })
        }
    </ul>

    </>
        }