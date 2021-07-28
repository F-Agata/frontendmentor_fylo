import React from 'react'

import "../scss/_Footer.scss"

import FooterNavigationFirst from "./FooterNavigationFirst";
import FooterNavigationSecond from "./FooterNavigationSecond";


import logo from "../img/logo.svg"
import iconLocation from "../img/icon-location.svg"
import iconPhone from "../img/icon-phone.svg"
import iconEmail from "../img/icon-email.svg"




function Footer() {
    return (
        <footer className="footer">
            <div className={"footer__wrapLogo"}>
                <img className={"footer__logo"} src={logo} alt={"logo"}/>
            </div>

            <div className={"footer__contactWrapp"}>
                <div className={"footer__wrapIcon"}>
                    <img className={"footer__icon"} src={iconLocation} alt={"iconlocation"}/>
                </div>

                <p className={"footer__description"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae id ipsam ipsum nobis placeat reprehenderit sunt vel veritatis vitae. Architecto deserunt dolor fuga inventore nisi repellendus sed tempora voluptatem!</p>

                <div className={"footer__wrapIcon"}>
                    <img className={"footer__icon"} src={iconPhone} alt={"iconPhone"}/>
                </div>

                <p className={"footer__description"}>+48-123-456-789</p>

                <div className={"footer__wrapIcon"}>
                    <img className={"footer__icon"} src={iconEmail} alt={"iconEmail"}/>
                </div>

                <p className={"footer__description"}>example@fylo.com</p>

            </div>

            <FooterNavigationFirst/>
            <FooterNavigationSecond/>

            <div>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </div>



        </footer>
    );
}

export default Footer;