import React from 'react'

import "../scss/_FooterNavigationFirst.scss"




function FooterNavigationFirst() {
    return (
            <div className={"navigation__wrapNavigation"}>
                <nav className={"navigation__navigation"}>
                    <ul className={"navigation__ul"}>
                        <li className={"navigation__li"}>
                            <a className={"navigation__link"} href={"#"}>About Us</a>
                        </li>
                        <li className={"navigation__li"}>
                            <a className={"navigation__link"} href={"#"}>Jobs</a>
                        </li>
                        <li className={"navigation__li"}>
                            <a className={"navigation__link"} href={"#"}>Press</a>
                        </li>
                        <li className={"navigation__li"}>
                            <a className={"navigation__link"} href={"#"}>Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>


    );
}

export default FooterNavigationFirst;

