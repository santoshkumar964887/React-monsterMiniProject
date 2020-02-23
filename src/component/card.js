import React from 'react';
import './card.style.css';

export const Card=(props)=>{
    return (
    <div className="card">
    <img src="https://joeschmoe.io/api/v1/random"/>
    <h3 >Name : {props.list.name}</h3>
    <h5>Email : {props.list.email}</h5>
    <p>Number : {props.list.phone}</p>

    </div>
    )
}