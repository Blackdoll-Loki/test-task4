import React from "react";
import './list.css';

export default function List(props){
    return (
        <>
            <ul>
                {
                props.navList.map((item, idx)=> <li key={idx}>{item}</li>)
                }
            </ul>
        </>
    )
}