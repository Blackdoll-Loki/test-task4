import React from "react";
import './numberCard.css'

export default function NumberCard({ heading, paragraph}){
    return (
        <div>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </div>
    )
}