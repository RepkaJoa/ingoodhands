import React, {useState} from "react";

export default function List() {
    const fundation_list = [
        {
            name: "Fundacja1",
            description: "Cel1",
            items: "1,2,3"
        },
        {
            name: "Fundacja2",
            description: "Cel2",
            items: "1,2,3"
        },
        {
            name: "Fundacja3",
            description: "cel3",
            items: "1,2,3"
        }
    ];
    const organization_list = [{
        name: "Organization1",
        description: "Cel1",
        items: "1,2,3"
    },
        {
            name: "Organization2",
            description: "Cel2",
            items: "1,2,3"
        },
        {
            name: "Organization3",
            description: "cel3",
            items: "1,2,3"
        }
    ];
    const local_list = [{
        name: "Local1",
        description: "Cel1",
        items: "1,2,3"
    },
        {
            name: "Local2",
            description: "Cel2",
            items: "1,2,3"
        },
        {
            name: "Local3",
            description: "cel3",
            items: "1,2,3"
        }
    ];

    return <>
    <ul className={"center section_column"}>
        {
            fundation_list.map((el,index)=> {
                return <li key={index}>{el.name}{el.description}{el.items}</li>
            })
        }
    </ul>

    </>
        }