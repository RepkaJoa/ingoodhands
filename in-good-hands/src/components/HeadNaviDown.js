import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";


export default function HeadNaviDown(){
    return <>

        <ul className={"menu"}>
            <li><Link className={"menu_down link"}
                      activeClass="active"
                      to="start"
                      spy={true}
                      smooth={true}
                      duration={500}
                      delay={200}> Start </Link></li>
            <li><Link className={"menu_down link"}
                      activeClass="active"
                      to="4steps"
                      spy={true}
                      smooth={true}
                      duration={500}
                      delay={200}> O co chodzi? </Link></li>
            <li><Link className={"menu_down link"}
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                      delay={200}> O nas </Link></li>
            <li><Link className={"menu_down link"}
                      activeClass="active"
                      to="fund_org"
                      spy={true}
                      smooth={true}
                      duration={500}
                      delay={200}> Fundacja i organizacje </Link></li>
            <li><Link className={"menu_down link"}
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      delay={200}> Kontakt </Link></li>


        </ul>

    </>
}