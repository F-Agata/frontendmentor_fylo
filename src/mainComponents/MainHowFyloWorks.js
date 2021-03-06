import React from 'react'

import "../scss/_MainHowFyloWorks.scss"

import stayProductive from "../img/illustration-stay-productive.png"
import iconArrow from "../img/icon-arrow.svg"



function MainHowFyloWorks() {
    return (
        <section className="mainHowFyloWorks">
            <div className={"mainHowFyloWorks__pictureWrapp"}>
                <img className={"mainHowFyloWorks__picture"} src={stayProductive} alt={"illustationStayProductive"}/>
            </div>
            <div className={"mainHowFyloWorks__informationWrapp"}>
             <h2 className={"mainHowFyloWorks__title"}>Stay productive, wherever you are</h2>
             <p className={"mainHowFyloWorks__text"}>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
             <p className={"mainHowFyloWorks__text"}>Securely share files and folders with friends, family and collaguees for live collaboration. No email attachments required.</p>
             <a className={"mainHowFyloWorks__link"} href={"#"}>See how Fylo works
                <span className={"mainHowFyloWorks__linkSpan"}>
                    {/*<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"*/}
                    {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                    {/*    <defs>*/}
                    {/*     <circle id="b" cx="6" cy="6" r="6"/>*/}
                    {/*     <filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a">*/}
                    {/*     <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>*/}
                    {/*     <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>*/}
                    {/*     <feColorMatrix values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0" in="shadowBlurOuter1"/>*/}
                    {/*     </filter></defs>*/}
                    {/*     <g fill="none" fill-rule="evenodd"><g transform="translate(2 2)">*/}
                    {/*         <use fill="#000" filter="url(#a)" xlink:href="#b"/>*/}
                    {/*         <use fill="#62E0D9" xlink:href="#b"/></g>*/}
                    {/*         <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330"/></g>*/}
                    {/*</svg>*/}
                    <img className={"mainHowFyloWorks__linkArrow"} src={iconArrow} alt={"arrowGo"}/>
                </span>
             </a>
            </div>

        </section>
    );
}

export default MainHowFyloWorks;