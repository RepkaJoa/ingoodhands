import React from "react";
import {Link} from "react-router-dom";
import FourHeading from "./FourHeading";
import HeadNaviDown from "./HeadNaviDown";
import HeadNaviUp from "./HeadNaviUp";

export default function Login (){
    return <>
        <HeadNaviUp/>
        <HeadNaviDown/>
        <div className={"login"}>
            <FourHeading head_text={"Zaloguj się"}/>
        <div className={"login_box"}>
            <form className={"section_column login_form"}>
                <label> Email</label><br/>
                <input className={"login_form_input"} type={"email"}/><br/>
                <label> Hasło</label><br/>
                <input className={"login_form_input"} type={"password"}/><br/>
            </form>
        </div>

        </div>
        <div className={"login_buttons"}>
            <button className={"login_buttons_btn menu_down"}>
                <Link className={"link"} to={"/rejestracja"}>Załóż konto</Link>
            </button>

            <button className={"login_buttons_btn menu_down"}>
                <Link className={"link"} to={"/logowanie"}>Zaloguj się </Link>
            </button>
        </div>

    </>
}