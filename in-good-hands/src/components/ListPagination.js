import React from "react";

export default function ListPagination ({list, loading}) {
    if(loading){
            return <h2> Loading...</h2>;
            }

    return (<>
        <ul className={"center section_column list"}>
            {
                list.map((el,index)=> {
                    return <li className={"list_items section_row center"} key={index}>
                        <div className={"section_column"}><div className={"name_text"}>{el.name}</div><div className={"space"}/> <div className={"description_text"}>{el.description}</div></div>
                        <span className={"space"}/>{el.items}</li>
                })
            }
        </ul>
    </>)
}