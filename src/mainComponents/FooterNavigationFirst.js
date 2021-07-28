import React from 'react'

import "../scss/_FooterNavigation.scss"




function FooterNavigationFirst() {
    return (
            <div className={"footerNavigation__wrapNavigation"}>
                <nav className={"footerNavigation__navigation"}>
                    <ul className={"footerNavigation__ul"}>
                        <li className={"footerNavigation__li"}>
                            <a className={"footerNavigation__link"} href={"#"}>About Us</a>
                        </li>
                        <li className={"footerNavigation__li"}>
                            <a className={"footerNavigation__link"} href={"#"}>Jobs</a>
                        </li>
                        <li className={"footerNavigation__li"}>
                            <a className={"footerNavigation__link"} href={"#"}>Press</a>
                        </li>
                        <li className={"footerNavigation__li"}>
                            <a className={"footerNavigation__link"} href={"#"}>Blog</a>
                        </li>
                    </ul>
                </nav>
            </div>


    );
}

export default FooterNavigationFirst;

