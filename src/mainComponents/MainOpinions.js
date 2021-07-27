import React from 'react'

import "../scss/_MainOpinions.scss"

import profile1 from "../img/profile-1.jpg"
import profile2 from "../img/profile-2.jpg"
import profile3 from "../img/profile-3.jpg"
import quotes from "../img/bg-quotes.png"



const opinionsList = [
    {
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
        picture: profile1,
        name: "Satish Patel",
        work: "Founder & CEO, Huddle"
    },
    {
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
        picture: profile2,
        name: "Bruce McKenzie",
        work: "Founder & CEO, Huddle"
    },
    {
        text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
        picture: profile3,
        name: "Iva Boyd",
        work: "Founder & CEO, Huddle"
    },
]



function MainOpinions() {

    const oneOpinion = opinionsList.map(opinion => (
        <div className={"mainOpinions__opinionWrapp"} key={opinion.name}>
            <p className={"mainOpinions__text"}>{opinion.text}</p>
            <div  className={"mainOpinions__cardWrapp"}>
                 <div className={"mainOpinions__pictureWrapp"}>
                     <img className={"mainOpinions__picture"} src={opinion.picture} alt={opinion.title}/>
                 </div>
                <h3 className={"mainOpinions__name"}>{opinion.name}</h3>
                 <p className={"mainOpinions__work"}>{opinion.work}</p>
            </div>

        </div>

    ))

    return (
        <section className="mainOpinions">
            <div  className="mainOpinions__quotesWrapp">
                <img className={"mainOpinions__quotes"} src={quotes} alt={"backgroundQuotes"}/>
            </div>
            {oneOpinion}
        </section>


    );
}

export default MainOpinions;