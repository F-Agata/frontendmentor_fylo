import React from 'react'

import "../scss/_Footer.scss"

import FooterNavigationFirst from "./FooterNavigationFirst";
import FooterNavigationSecond from "./FooterNavigationSecond";
import FooterContact from "./FooterContact";


import logo from "../img/logo.svg"






function Footer() {
    return (
        <footer className="footer">
            <div className={"footer__wrapLogo"}>
                <img className={"footer__logo"} src={logo} alt={"logo"}/>
            </div>

            <FooterContact/>
            <FooterNavigationFirst/>
            <FooterNavigationSecond/>

            <div className={"footer__wrapIconsSM"}>
                <span className={"footer__wrapIconSM"}> <i className="fab fa-facebook-f"></i></span>
                <span className={"footer__wrapIconSM"}><i className="fab fa-twitter"></i></span>
                <span className={"footer__wrapIconSM"}> <i className="fab fa-instagram"></i></span>
            </div>



        </footer>
    );
}

export default Footer;