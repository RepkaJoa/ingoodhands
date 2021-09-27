import React, {useState, useEffect} from "react";
import Paragraf from "./Paragraf";
import ListPagination from "./ListPagination";
import Pages from "./Pages";

export default function Navigation(){
    const [loading, setLoading] = useState(false);
    const API = "http://localhost:4000";
    const [fundations, setFundations] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [locals, setLocals] = useState([]);
    const [list, setList] = useState([]);
    const [text, setText]=useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                setFundations(data.fundations);
                setOrganizations(data.organizations);
                setLocals(data.locals);
                setText(data.nowy);
                setList(data.fundations);
                setCurrentText(text[0]);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const [currentPage, setCurrentPage]=useState(1);

    const [listItemsPerPage] = useState(3);
// Get current list
    const indexOfLastListItem = currentPage * listItemsPerPage;
    const indexOfFirstListItem = indexOfLastListItem - listItemsPerPage;
    const currentListItem = list.slice(indexOfFirstListItem, indexOfLastListItem);
    const fundationText = text[0];
    const organizationText = text[1];
    const localText = text[2];
    console.log(fundationText);
    const [currentText, setCurrentText] = useState(fundationText);

    const handleNav = e => {
        e.preventDefault();


        if (parseInt(e.target.id) === 1) {
            setCurrentText(fundationText);
            setList(fundations);

        } else if (parseInt(e.target.id) === 2) {
            setCurrentText(organizationText);
            setList(organizations);
        } else {
            setCurrentText(localText)
            setList(locals);
        }};

    // change page

        const paginate = (pageNumber) => {
            setCurrentPage(pageNumber);
        };



    return <>
    <div className={"section_column"}>
        <ul  className={"section_row center"}>
            <li onClick={handleNav} id={1} className={"menu_down"}>Fundacjom</li>
            <li onClick={handleNav} id={2} className={"menu_down"}>Organizacjom <br/> pozarządowym</li>
            <li onClick={handleNav} id={3} className={"menu_down"}>Lokalnym <br/> zbiórkom</li>
        </ul>
        <div className={"section_one"}>
            <Paragraf text={currentText}/>
            <ListPagination list={currentListItem} loading={loading}/>
            { (list.length === listItemsPerPage) ? <div/> : <Pages listItemsPerPage={listItemsPerPage} totalListItems={list.length} paginate={paginate}/> }
        </div>


    </div>
    </>
}