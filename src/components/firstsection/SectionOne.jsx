import React from "react";
import Button from "../button/Button";
import './sectionOne.css'

export default function SectionOne(){
    return (
        <>
            <section className="section-1">
                <div className="section-1-text">
                    <h1>моментально Копируй сделки профи трейдеров</h1>
                    <p>Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.</p>
                    <form>
                        <input type="email" className="section-1-text-email" placeholder="Ваш e–mail"></input>
                        <Button className={"btn-blue"} btnName={"начать"}/>
                    </form>
                    <span className="section-1-text-advertisment">5 дней бесплатного пользования</span>
                </div>
                <div className="section-1-img"></div>
            </section>
        </>
    )
}