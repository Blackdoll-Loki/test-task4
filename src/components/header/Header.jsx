import React from "react";
import List from "../list/List";
import Button from "../button/Button";
import '../button/button.css';
import './header.css'

export default function Header(){
    const navListArr = ['Цифры', 'Сделки онлайн', 'о компании', 'как начать', 'тарифы', 'отзывы', 'FAQ'];

    return (
        <>
            <header>
                <div className="logo"></div>
                <List navList={navListArr} />
                <div>
                    <Button btnName={"вход"} className={"btn-regular btn-transparent"}/>
                    <Button btnName={"регистрация"} className={"btn-regular btn-blue"} />
                </div>
            </header>
        </>
    )
}