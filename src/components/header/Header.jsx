import React from "react";
import List from "../list/List";
import Button from "../button/Button";
import '../button/button.css';
import './header.css';
import { useState } from "react";

export default function Header(){
    const [menuActive, setMenuActive] = useState(false); // Стан для меню

    const toggleMenu = () => {
        setMenuActive(!menuActive); // Перемикаємо стан
    };
    const navListArr = ['Цифры', 'Сделки онлайн', 'о компании', 'как начать', 'тарифы', 'отзывы', 'FAQ'];

    return (
        <>
            <header>
                <div className="logo"></div>
                <div className={`menu ${menuActive ? "active" : ""}`}>
                    <div className={`ham-menu ${menuActive ? "active" : ""}`} 
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <List navList={navListArr} />
                    <div className="registration-btns">
                        <Button btnName={"вход"} className={"btn-regular btn-transparent"}/>
                        <Button btnName={"регистрация"} className={"btn-regular btn-blue"} />
                    </div>
                </div>
            </header>
        </>
    )
}