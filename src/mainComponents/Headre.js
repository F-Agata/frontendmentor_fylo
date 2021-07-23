import React from 'react'

import "../scss/_Header.scss"

import headerIllustration from "../img/illustration-intro.png"



function Header() {
    return (
        <div className="header">
            <div className={"header__wrapIllustration"} >
                <img className={"header__illustration"} src={headerIllustration} alt={"headerIllustration"}/>
            </div>


        </div>
    );
}

export default Header;