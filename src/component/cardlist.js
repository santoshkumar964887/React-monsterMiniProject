import React from 'react';
import'./liststyle.css';
import {Card} from './card';

export const CardList=(props)=>{
return (<div className="cardlist"> {props.list.map(list=><Card key={list.id} list={list}/>)}</div>)
}