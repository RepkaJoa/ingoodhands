import Heading from "./Heading";
import Button from "./Button";
import HeadNaviUp from "./HeadNaviUp";
import HeadNaviDown from "./HeadNaviDown";

export default function Logout (){
    return <>
        <div>
            <HeadNaviUp/>
            <HeadNaviDown/>
        </div>
        <div className={"logout"}>
            <Heading head_text={"Wylogowanie nastąpiło \n pomyślnie!"}/>
            <button className={"menu_down logout_button"}> Strona główna </button>
        </div>
    </>
}