import React from "react";

const PictureCard = props => {
    return (
        <div className="cContainer">
            <h2>{props.title}</h2>
            <h3>Date: {props.date}</h3>
            <img className="spacePic" alt="space" src={props.hdurl}/>
        </div>
    )
}

export default PictureCard