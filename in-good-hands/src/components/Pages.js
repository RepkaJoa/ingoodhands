import React from "react";

export default function Pages({listItemsPerPage, totalListItems, paginate}){
    const listNumbers = [];
    for (let i=1; i <= Math.ceil(totalListItems/ listItemsPerPage); i++){

        listNumbers.push(i);
    }



    return<>
    <ul className={"section_row center"}>
        {
            listNumbers.map((el,index)=> {
                return <li onClick={() => paginate(el)} id={el} key={index} className={"menu_down"}>{el} </li>
            })
        }
    </ul>
    </>
}