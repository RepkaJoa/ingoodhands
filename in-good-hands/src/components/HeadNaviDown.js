import {Link} from "react-scroll";



export default function HeadNaviDown(){
    return <>

        <ul className={"menu"}>
            <li><div className={"menu_down"} ><Link className={"link"} to={"/"}>Start</Link></div> </li>
            <li><div className={"menu_down"}><Link className={"link"} to={"/"}>O co chodzi?</Link></div> </li>
            <li><div className={"menu_down"} ><Link className={"link"} to={"/"}>O nas</Link></div> </li>
            <li><div className={"menu_down"}><Link className={"link"} to={"/"}>Fundacja i organizacje</Link></div> </li>
            <li><div className={"menu_down"}><Link className={"link"} to={"/"}>Kontakt</Link></div> </li>
        </ul>

    </>
}