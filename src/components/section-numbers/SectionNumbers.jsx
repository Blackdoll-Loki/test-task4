import React from "react";
import NumberCard from "../numberCard/NumberCard";
import './sectionNumbers.css'

export default function SectionNumbers(){
    const numbersText = [
        {
            heading: 'Торговой прибыли',
            paragraph: '2756%'
        },
        {
            heading: 'фьючерсных и спотовых сделок',
            paragraph: '67'
        },
        {
            heading: 'прибыль подписчиков',
            paragraph: '375000'
        }
    ];


    return (
        <>
        <section>
            <div className="broken-background"></div>
            <div className="numbbers-section">
                <div className="numbers-text">
                    <h2 className="section-heading">Цифры</h2>
                    <p className="section-paragraph">Cентябрь 2022</p>
                </div>
                <div className="numbers-cards">
                    { numbersText.map((obj, idx) =>  <NumberCard key={idx} heading={obj.heading} paragraph={obj.paragraph} />  ) }
                </div>
            </div>
        </section>
        </>
    )
}