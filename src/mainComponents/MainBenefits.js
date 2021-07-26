import React from 'react'

import "../scss/_MainBenefits.scss"

import access from "../img/icon-access-anywhere.svg"
import security from "../img/icon-security.svg"
import collaboration from "../img/icon-collaboration.svg"
import files from "../img/icon-any-file.svg"
import headerIllustration from "../img/illustration-intro.png";

const benefitsList = [
    {picture: access,
    title: "Access you files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account menas your files followe ypo everywhere."
},
    {picture: security,
    title: "Security you can trust",
    text: "2-factor authention and user-controlled encrypion are just a couple of the security features we allow to help secure your files"
},
    {picture: collaboration,
     title: "Real-time collaboration",
     text: "Securely share files and foldesr with friends, family and colleagues for live collaboration. No email attachments required"
    },
    {picture: files,
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."}
]


function MainBenefits() {

    const oneBenefit = benefitsList.map(benefit => (
        <div className={"mainBenefits__benefit benefit"} key={benefit.title}>
            <div className={"benefit__pictureWrapp"}>
            <img className={"benefit__picture"} src={benefit.picture} alt={benefit.title}/>
            </div>
            <h2 className={"benefit__title"}>{benefit.title}</h2>
            <p className={"benefit__text"}>{benefit.text}</p>
        </div>

    ))

    return (
        <section className="mainBenefits">
            {oneBenefit}
        </section>
    );
}

export default MainBenefits;





