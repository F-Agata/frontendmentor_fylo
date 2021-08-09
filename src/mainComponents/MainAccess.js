import React,  {useState} from 'react'

// https://www.npmjs.com/package/validator

import validator from 'validator'

import "../scss/_MainAccess.scss"





function MainAccess() {

    const [inputValue, setInputValue] = useState("");
    const [correctEmail, setCorrectEmail] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setCorrectEmail(validator.isEmail(inputValue))
        setInputValue(prevInputValue => "")
    }

    const handleChange = (e) => {
        setInputValue(prevInputValue => e.target.value)
    }


    return (
        <section className="mainAccess">
            <h2 className={"mainAccess__title"}>Get early access today</h2>
            <p className={"mainAccess__text"}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happu to help you. </p>

            <form className={"mainAccess__form"} onSubmit={handleOnSubmit}>
                <input className={"mainAccess__input"} type={"text"} placeholder={"email@example.com"} value={inputValue} onChange={handleChange}/>

                {inputValue.length > 0 ? (<p className={"mainAccess__message"}>Please enter a valid email address</p>) : null}
                {correctEmail === true ? (<p className={"mainAccess__message"}>Email address is correct</p>) : null}

                <button className={"mainAccess__btn"}>Get Started For Free</button>
            </form>
        </section>
    );
}

export default MainAccess;




