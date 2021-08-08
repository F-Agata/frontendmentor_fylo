import React from 'react'

import "../scss/_FooterContact.scss"


import iconLocation from "../img/icon-location.svg";
import iconPhone from "../img/icon-phone.svg";
import iconEmail from "../img/icon-email.svg";


function FooterContact() {
    return (
        <div className={"footer__contactWrapp"}>
            <div className={"footer__wrapIcon footer__wrapIconLocation"}>
                <img className={"footer__icon"} src={iconLocation} alt={"iconlocation"}/>
            </div>

            <p className={"footer__description footer__descriptionLocation"}>Loremd ipsz sf sdfsx cdum asf scdzsolor sit acffmet, conseetur adipisicing elit. Atque beatae id ipsam ipsum nobis placeat atem!</p>

            <div className={"footer__wrapIcon footer__wrapIconPhone"}>
                <img className={"footer__icon"} src={iconPhone} alt={"iconPhone"}/>
            </div>

            <p className={"footer__description footer__descriptionPhone"}>+48-123-456-789</p>

            <div className={"footer__wrapIcon footer__wrapIconEmail"}>
                <img className={"footer__icon"} src={iconEmail} alt={"iconEmail"}/>
            </div>

            <p className={"footer__description footer__descriptionEmail"}>example@fylo.com</p>

        </div>


    );
}

export default FooterContact;
