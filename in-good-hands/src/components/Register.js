import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import HeadNaviUp from "./HeadNaviUp";
import HeadNaviDown from "./HeadNaviDown";
import {Link} from "react-router-dom";

export default function Register (){
    return <>
        <HeadNaviUp/>
        <HeadNaviDown/>
        <div className={"login"}>
            <Heading head_text={"Załóż konto"}/>
            <div className={"login_box"}>
                <form className={"section_column login_form"}>
                    <label> Email</label><br/>
                    <input className={"login_form_input"} type={"email"}/><br/>
                    <label> Hasło</label><br/>
                    <input className={"login_form_input"} type={"password"}/><br/>
                    <label> Powtórz hasło</label><br/>
                    <input className={"login_form_input"} type={"password"}/><br/>
                </form>
            </div>

        </div>
        <div className={"login_buttons"}>
            <button className={"login_buttons_btn menu_down"}>
                <Link className={"link"} to={"/logowanie"}>Zaloguj się </Link>
            </button>
            <button className={"login_buttons_btn menu_down"}>
                <Link className={"link"} to={"/rejestracja"}>Załóż konto</Link>
            </button>


        </div>
    </>
}