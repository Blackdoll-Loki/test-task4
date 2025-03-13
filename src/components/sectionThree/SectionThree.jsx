import React from "react";
import '../section-numbers/sectionNumbers.css'
import SectionThreeCard from "../section-3-card/SectionThreeCard";
import './sectionThree.css'

export default function SectionThree(){
    const cardsData = [
        {
            title: 'NEAR/USDT',
            time: 'SPOT · 1 мин. назад',
            profit: 'Прибыль',
            percentage: '58.6206%',
            aim: 'Цель 4',
            date: 'Дата входа 06.10.2022'
        },
        {
            title: 'BTC/USDT',
            time: 'SPOT · 1 мин. назад',
            profit: 'Прибыль',
            percentage: '6.02%',
            aim: 'Цель 3',
            date: 'Дата входа 06.10.2022'
        },
        {
            title: 'ETH/USDT',
            time: 'SPOT · 1 мин. назад',
            profit: 'Прибыль',
            percentage: '16.3%',
            aim: 'Цель 4',
            date: 'Дата входа 06.10.2022'
        },
        {
            title: 'NEAR/USDT',
            time: 'SPOT · 1 мин. назад',
            profit: 'Прибыль',
            percentage: '0.963%',
            aim: 'Цель 4',
            date: 'Дата входа 06.10.2022'
        },
        {
            title: 'NEAR/USDT',
            time: 'SPOT · 1 мин. назад',
            profit: 'Прибыль',
            percentage: '58.6206%',
            aim: 'Цель 4',
            date: 'Дата входа 06.10.2022'
        },
    ]
    return (
        <>
            <section className="section-3">
                <h2 className="section-heading">Прошедшие сделки</h2>
                <p className="section-paragraph section-3-status">Онлайн</p>
                <div className="section-3-cards">
                    { cardsData.map((obj,idx)=> <SectionThreeCard key={idx} title={obj.title} time={obj.time} profit={obj.profit} percentage={obj.percentage} aim={obj.aim} date={obj.date} /> )}
                </div>
                <div className="broken-background"></div>
            </section>
        </>
    )
}