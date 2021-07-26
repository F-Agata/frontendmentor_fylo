import React from 'react'

import "../scss/_Header.scss"

import headerIllustration from "../img/illustration-intro.png"



function Header() {
    return (
        <div className="header">
            <div className={"header__wrapIllustration"} >
                <img className={"header__illustration"} src={headerIllustration} alt={"headerIllustration"}/>
            </div>

        <div className={"header__text"}>
            <h1 className={"header__title"}>All your files in one secure location, accessible anywhere.</h1>
            <p className={"header__paragraph"}>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button className={"header__btnGetStarted"}>Get Started</button>
        </div>


        </div>
    );
}

export default Header;