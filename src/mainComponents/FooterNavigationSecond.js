import React from 'react'

import "../scss/_FooterNavigation.scss"




function FooterNavigationSecond() {
    return (
        <div className={"footerNavigation__wrapNavigation"}>
            <nav className={"footerNavigation__navigation"}>
                <ul className={"footerNavigation__ul"}>
                    <li className={"footerNavigation__li"}>
                        <a className={"footerNavigation__link"} href={"#"}>Contact Us</a>
                    </li>
                    <li className={"footerNavigation__li"}>
                        <a className={"footerNavigation__link"} href={"#"}>Terms</a>
                    </li>
                    <li className={"footerNavigation__li"}>
                        <a className={"footerNavigation__link"} href={"#"}>Privacy</a>
                    </li>
                </ul>
            </nav>
        </div>


    );
}

export default FooterNavigationSecond;

