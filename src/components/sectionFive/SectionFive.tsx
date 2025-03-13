import React from "react";
import SectionFiveCard from "../section5Card/SectionFiveCard";

export default function SectionFive(){
    const cards = [
        {
            title: 'STANDART',
            list: [
                'Ручной трейдинг',
                'Автоматическое или полуавтоматическое копирование сделок',
                'Личный кабинет со статистикой',
                'Среднесрочные сделки с уровнями набора портфеля'
            ],
            price: '$234',
            discount: '-35%',
            options: [
                '12 месяцев',
                '6 месяцев',
                '3 месяцев',
                '1 12 месяц'
            ],
        },
        {
            title: 'VIP',
            list: [
                'Ручной трейдинг',
                'Автоматическое или полуавтоматическое копирование сделок',
                'Личный кабинет со статистикой',
                'Краткосрочные, среднесрочные и инвест сделки',
                'Доступ в Vip чат с командой',
                'Наш авторский курс по трейдингу'
            ],
            price: '$585',
            discount: '-35%',
            options: [
                '12 месяцев',
                '6 месяцев',
                '3 месяцев',
                '1 12 месяц'
            ],
        }
    ];

    return(
        <>
            <section className="section5">
                <h2>тарифы</h2>
                <div className="section5-btns-block">
                    <button>СПОТ</button>
                    <button>фьючерс</button>
                </div>
                <div className="section5-cards">
                    {cards.map((el, idx)=> <SectionFiveCard key={idx} title={el.title} list={el.list} price={el.price} discount={el.discount} options={el.options} className={"btn-blue"} btnName={"Попробовать, 5 дней бесплатно"}/>)}
                </div>
            </section>
        </>
    )
}