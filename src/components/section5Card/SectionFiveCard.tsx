import React from "react";
import Button from "../button/Button";
import './sectionFiveCard.css';

export default function SectionFiveCard({title, list, price, discount, options, btnName, className}){
    return (
        <div className="section5-card">
            <h3 className="section5-card-heading">{title}</h3>
            <ul>
                {list.map((el, idx) => <li key={idx} className="section5-card-li">{el}</li>)}
            </ul>
            <div className="price-block">
                <p className="price-block-amount">{price}<span className="price-block-disc">{discount}</span></p>
                <select>
                    {options.map((el, idx)=><option key={idx}>{el}</option>)}
                </select>
            </div>
            <Button btnName={btnName} className={className}/>
        </div>
    )
}