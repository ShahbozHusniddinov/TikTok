import React from "react";
import Tok from "./images/tik.svg"
import Sec from "./images/img.png"

function Body() {
    return(
        <div className="max-width">
        <div className="katta">
        <div className="father">
                <div className="son">
                    <img src={Tok} alt="" />
                    <h2>TikTok Ads</h2>
                </div>
                <div className="body-h1">
                    <h1>Automate your <br />
                    TikTok campaign <br /> management</h1>
                </div>
                <div className="body-p">
                    <p>Revealbot is a more efficient and powerful automation <br /> for TikTok Ads</p>
                </div>
                <div className="buttons">
                    <button className="buttons-one">
                        <a href="#">Try Revealbot - Free</a>
                    </button>
                    <button className="buttons-second">
                        <a href="#">Book a demo</a>
                    </button>
                </div>
            </div>
                <div className="second">
                    <img src={Sec} alt="" />
                </div>
        </div>
        </div>
    )
}
export default Body;