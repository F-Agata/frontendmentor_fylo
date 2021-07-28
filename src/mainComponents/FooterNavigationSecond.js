import React from 'react'

import "../scss/_FooterNavigationSecond.scss"




function FooterNavigationSecond() {
    return (
        <div className={"navigation__wrapNavigation"}>
            <nav className={"navigation__navigation"}>
                <ul className={"navigation__ul"}>
                    <li className={"navigation__li"}>
                        <a className={"navigation__link"} href={"#"}>Contact Us</a>
                    </li>
                    <li className={"navigation__li"}>
                        <a className={"navigation__link"} href={"#"}>Terms</a>
                    </li>
                    <li className={"navigation__li"}>
                        <a className={"navigation__link"} href={"#"}>Privacy</a>
                    </li>
                </ul>
            </nav>
        </div>


    );
}

export default FooterNavigationSecond;

