import {Link} from "react-router-dom";
export default function HeadNaviUp (){
    return <>

        <ul className={"menu"}>
            <li><div className={"menu_up"} ><Link className={"link"} to={"/logowanie"}>Zaloguj</Link></div> </li>
            <li><div className={"menu_up"}><Link className={"link"} to={"/rejestracja"}>Załóż konto</Link></div> </li>
        </ul>

    </>
}

