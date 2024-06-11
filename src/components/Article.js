import React from "react";
import placeicon from "../images/placeicon.png"

// add id number in a for loop and iteratively add it

export default function Article(props) {
    return (
        <section className="article--container">
            <img src = {props.imageUrl} className="article--image" />
            <div className="article--content">
                <img src = {placeicon} className="article--icon" />
                <p className="article--location">{props.location.toUpperCase()}</p>
                <a href={props.googleMapsUrl} className="map--link">
                    Google Maps
                </a>
                <h2 className="article--title">{props.title}</h2>
                <div className="article--dates">
                    <span>{props.date}</span>
                </div>
                <p className="article--description">{props.description}</p>
            </div>
        </section>
    )
}