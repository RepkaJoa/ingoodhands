import {Link} from "react-router-dom";
export default function HeadNaviUp (){
    return <>

        <ul className={"menu"}>
            <li><div className={"menu_up"} ><Link className={"link"} to={"/login"}>Zaloguj</Link></div> </li>
            <li><div className={"menu_up"}><Link className={"link"} to={"/register"}>Załóż konto</Link></div> </li>
        </ul>

    </>
}

