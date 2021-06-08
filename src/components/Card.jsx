import React from 'react';
import {Link} from 'react-router-dom'
import cardStyleCSS from './cardStyle.module.css'

export default function Card({name,max,min,img,onClose,id}) {
  // acá va tu código
  return (
  <div className={cardStyleCSS.border}>
    <button onClick = {onClose} className={cardStyleCSS.btn}>X</button>
    <Link to ={`/ciudad/${id}`}>
    <h3>{name}</h3>
    </Link>
    <div className={cardStyleCSS.text}>
      <div className={cardStyleCSS.temp}>
        <div className = {cardStyleCSS.M}><b>Min:</b></div>
        <div className = {cardStyleCSS.m}>
          {min>200?`${Math.round(min-273)}°C`:`${Math.round(min)}°F`}</div>
      </div>
      <div className={cardStyleCSS.temp}>
        <div className = {cardStyleCSS.M}><b>Max:</b></div>
        <div className = {cardStyleCSS.m}>
          {max>200?`${Math.round(max-273)}°C`:`${Math.round(max)}°F`}</div>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
    </div>
  </div>
  )
};