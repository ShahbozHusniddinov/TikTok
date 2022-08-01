import React from "react";
import Odam from "./images/odam.jpeg"
import Odam1 from "./images/odam1.jpeg"
import Plus from "./images/plus.svg"
import Plus1 from "./images/minus.svg"
import Group from "./images/group1.png"
import Group1 from "./images/group2.jpeg"
import Group2 from "./images/group3.jpeg"

function Automate() {
    return(
        <div className="max-width">
            <div className="aut-first">
                <h1>Automate anything you can think of</h1>
            </div>
            <div className="aut-second">
                <p>Chain conditions, use and/or logic operators, and access more metrics. <br /> Revealbot gives you all the tools to create advanced automations <br /> in TikTok Ads</p>
            </div>
            <div className="odam-first">
                <div className="odam-img">
                    <img src={Odam} alt="" />
                </div>
                <div className="odam-text">
                    <h2>"Revealbot is integral to my agency for <br /> pushing alerts on optimizations from their <br /> automation engine into Slack, and <br /> updating us during the day on key <br /> account changes."
                    </h2>
                    <p>Depesh Mandalia</p>
                </div>
            </div>
            <div className="mom-1">
                <h1>More powerful tools on the way!</h1>
            </div>
            <div className="mom">
            <div className="ota">
            <div className="cards">
                <div className="card">
                    <img src={Plus} alt="" />
                </div>
                <div className="plus-h1">
                    <h1>Custom metrics</h1>
                    <p>Import your data from a <br /> Google Sheet for more <br /> accurate attribution or <br /> specialized cases</p>
                </div>
                <div className="plus-p">
                    <p>Coming soon</p>
                </div>
            </div>
            </div>
            <div className="ota-1">
            <div className="cards">
                <div className="card">
                    <img src={Plus1} alt="" />
                </div>
                <div className="plus-h1">
                    <h1>Automated reports</h1>
                    <p>Import your data from a <br /> Google Sheet for more <br /> accurate attribution or <br /> specialized cases</p>
                </div>
                <div className="plus-p">
                    <p>Coming soon</p>
                </div>
            </div>
            </div>
            </div>
            <div className="aut-first">
                <h1>Huge time savings <br />
                and more efficient workflows</h1>
            </div>
            <div className="aut-second">
                <p>Create automations faster, keep accounts neatly organized, and <br /> troubleshoot in seconds</p>
            </div>
            <div className="odam-first">
                <div className="odam-img">
                    <img src={Odam1} alt="" />
                </div>
                <div className="odam-text1">
                    <h2>"Revealbot is integral to my agency for <br /> pushing alerts on optimizations from 
                    I used to <br /> spend 15-20 hrs/wk managing our campaigns. <br /> With Revealbot, it cut it to 5-8 hrs/wk."
                    </h2>
                    <p>Gary Jiang </p>
                </div>
            </div>
            <div className="last">
                <h1>Suggested content</h1>
                <div className="cardss">
                    <div className="kici">
                        <img src={Group} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc. <br /> Morbi cursus vitae tortor sapien, lectus sceleris<br /> porttitor. Dolor nulla bibendum </p>
                    </div>
                    <div className="kici">
                        <img src={Group1} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc. <br /> Morbi cursus vitae tortor sapien, lectus sceleris <br /> porttitor. Dolor nulla bibendum </p>
                    </div>
                    <div className="kici">
                        <img src={Group2} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc <br /> Morbi cursus vitae tortor sapien, lectus sceleris<br /> porttitor. Dolor nulla bibendum </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Automate;