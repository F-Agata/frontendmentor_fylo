import React from 'react'

import "../scss/_Navigation.scss"

import logo from "../img/logo.svg"


function Navigation() {
    return (
        <div className="navigation">
            <div className={"navigation__wrapLogo"}>
                <img className={"navigation__logo"} src={logo} alt={"logo"}/>
            </div>

            <div className={"navigation__wrapNavigation"}>
                <nav className={"navigation__navigation"}>
                     <ul className={"navigation__ul"}>
                         <li className={"navigation__li"}>
                             <a className={"navigation__link"} href={"#"}>Features</a>
                         </li>
                         <li className={"navigation__li"}>
                             <a className={"navigation__link"} href={"#"}>Team</a>
                         </li>
                         <li className={"navigation__li"}>
                             <a className={"navigation__link"} href={"#"}>Sign In</a>
                         </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}

export default Navigation;

