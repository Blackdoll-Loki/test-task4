import React from "react";
import Button from "../button/Button";
import './sectionFour.css'

export default function SectionFour(){
    return (
        <>
            <section>
                <div className="broken-background"></div>
                <div className="section4">
                    <div className="section4-text">
                        <h2>О компании</h2>
                        <p className="section4-text-p section4-text-p_first">Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p>
                        <p className="section4-text-p">Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.</p>
                    </div>
                    <div className="form-block">
                        <h3 className="section4-form-title">Попробуйте сейчас и получите <br /> 5 дней бесплатного пользования</h3>
                        <form action="#" className="section4-form">
                            <input type="email" className="section4-input" placeholder="Ваш e–mail"></input>
                            <Button className={"btn-medium section4-form-btn"} btnName={"попробовать"}/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}