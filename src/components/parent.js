import React, {useState, useEffect} from "react";
import axios from "axios";
import PictureCard from "../components/child"

export default function NasaData(){
    const [picture, setPicture] = useState([])

    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response=>{
        setPicture(response.data)
        console.log(response);
    })
    .catch(error => {
        console.log("GOTCHA MF", error);
    });
}, []);
    return (
        <div className="container">

            <h2>{picture.title}</h2>
            <h3>Date: {picture.date}</h3>
            <p>{picture.explanation}</p>
            <img className="space" alt="stars" src="https://apod.nasa.gov/apod/image/1911/m45astrograph.jpg"/>
        </div>
    )
 }