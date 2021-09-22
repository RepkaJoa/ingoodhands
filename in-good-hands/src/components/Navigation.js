import React, {useState, useEffect} from "react";
import Paragraf from "./Paragraf";
import List from "./List";
import Pages from "./Pages";

export default function Navigation(){
    const API = "http://localhost:4000";
    const [fundations, setFundations] = useState([])
    useEffect(() => {
        fetch(`${API}/fundations`)
            .then(response => response.json())
            .then(data => {
                setFundations(data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const [organizations, setOrganizations] = useState([])
    useEffect(() => {
        fetch(`${API}/organizations`)
            .then(response => response.json())
            .then(data => {
                setOrganizations(data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const [locals, setLocals] = useState([])
    useEffect(() => {
        fetch(`${API}/locals`)
            .then(response => response.json())
            .then(data => {
                setLocals(data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    const [text, setText]=useState("Text 1");
    const [listItem, setListItem] = useState([]);
    const [pages, setPages] = useState([1,2,3]);
    const [pageSelected, setPageSelected] = useState("");
    const handlePage = (el) => {
        console.log(el)
        setPageSelected(el);
    }

    const handleNav = e => {
        e.preventDefault();

    if (e.target.id == 1) {

        setText("Text 1 - Fundacje")
        setPages([1,2,3])
        console.log(pageSelected)
        setListItem([fundations[0],fundations[1],fundations[2]])



    }
    else if  (e.target.id == 2)
    {
        setText("Text 2 - Organizacje")
        setPages([1,2])
        console.log(organizations)
        setListItem([organizations[0],organizations[1],organizations[2]])
    }
 else
    {
        setText("Text 3 - Lokalne zbiórki")
        // setListItem(local_list)
        setPages([ ])
        console.log(locals)
        setListItem([locals[0],locals[1],locals[2]])
    }    ;

    }
    return <>
    <div className={"section_column"}>
    <ul className={"section_row center"}>
        <li onClick={handleNav} id={1} className={"menu_down"}>Fundacjom</li>
        <li onClick={handleNav} id={2} className={"menu_down"}>Organizacjom <br/> pozarządowym</li>
        <li onClick={handleNav} id={3} className={"menu_down"}>Lokalnym <br/> zbiórkom</li>
    </ul>
        <Paragraf text={text}/>
        <List list_item={listItem}/>
        <Pages numbers={pages} handle={handlePage}/>

    </div>
    </>
}