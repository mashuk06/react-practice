import React from 'react';
import '../hemisphere.css'
import NorthernPic from '../images/northern.gif'
import SouthernPic from '../images/image-2.jpg'

const hamisphereConfig = {
    Northern: {
        text: "You are in Northern Hamisphere !",
        picture: NorthernPic
    },
    Southern: {
        text: "You are in Southern Hamisphere !",
        picture: SouthernPic
    }
}

const HamisphereDisplay = ({ latitude }) => {

    const hamisphere = latitude > 0 ? "Northern" : "Southern";
    const { text, picture } = hamisphereConfig[hamisphere];

    return (
        <div className={hamisphere}>
            <div class="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt=""></img>
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HamisphereDisplay;
