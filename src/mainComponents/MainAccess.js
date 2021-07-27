import React from 'react'

import "../scss/_MainHowFyloWorks.scss"

import stayProductive from "../img/illustration-stay-productive.png"
import iconArrow from "../img/icon-arrow.svg"



function MainAccess() {
    return (
        <section className="mainAccess">
            <h2 className={"mainAccess__title"}>Get early access today</h2>
            <p className={"mainAccess__text"}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happu to help you. </p>

            <form className={"mainAccess__form"}>
                <input className={"mainAccess__input"} type={"text"} placeholder={"email@example.com"}/>
                <button className={"mainAccess__btn"}>Get Started For Free</button>
            </form>
        </section>
    );
}

export default MainAccess;