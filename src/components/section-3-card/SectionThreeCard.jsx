import React from "react";
import './section-3-card.css'

export default function SectionThreeCard({title, time, profit, percentage, aim, date}){
    return (
        <div className="section-3-card">
            <div className="folded-square"></div>
            <h3>{title}</h3>
            <p className="smaller-text">{time}</p>
            <h4 className="smaller-text card-profit">{profit}</h4>
            <p className="card-percent">{percentage}</p>
            <div className="bottom-text">
                <p className="smaller-text">{aim}</p>
                <p className="smaller-text">{date}</p>
            </div>
        </div>
    )
}