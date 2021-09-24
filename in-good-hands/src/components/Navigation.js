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
    useEffect(() => {
        setLoading(true);
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => {
                setFundations(data.fundations);
                setOrganizations(data.organizations);
                setLocals(data.locals);
                setLoading(false);
                setList(data.fundations);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);



    const [text, setText]=useState("W naszej bazie znajdziesz listę zweryfikowanych Fundacji,\n z którymi współpracujemy. " +
        "Możesz sprawdzić czym się zajmują,\n komu pomagają i czego potrzebują.");

    const [currentPage, setCurrentPage]=useState(1);
    const [listItemsPerPage, setListItemsPerPage] = useState(3);
// Get current list
    const indexOfLastListItem = currentPage * listItemsPerPage;
    const indexOfFirstListItem = indexOfLastListItem - listItemsPerPage;
    const currentListItem = list.slice(indexOfFirstListItem, indexOfLastListItem);

    const handleNav = e => {
        e.preventDefault();


        if (parseInt(e.target.id) === 1) {

            setText("W naszej bazie znajdziesz listę zweryfikowanych Fundacji, \n z którymi współpracujemy. " +
                "Możesz sprawdzić czym się zajmują, \n komu pomagają i czego potrzebują.");
            setList(fundations);

        } else if (parseInt(e.target.id) === 2) {
            setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n sed do eiusmod tempor incididunt " +
                "ut labore et dolore magna aliqua. \n Ut enim ad minim veniam, quis nostrud exercitation.");
            setList(organizations);
        } else {
            setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "\n Ut enim ad minim veniam, quis nostrud exercitation.");
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
            <Paragraf text={text}/>
            <ListPagination list={currentListItem} loading={loading}/>
            { (list.length === listItemsPerPage) ? <div/> : <Pages listItemsPerPage={listItemsPerPage} totalListItems={list.length} paginate={paginate}/> }
        </div>


    </div>
    </>
}