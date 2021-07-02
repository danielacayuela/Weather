import React from 'react';
import cityStyleCSS from './ciudadStyle.module.css';

export default function Ciudad({city}) {
if(city){
    return (
        <div className={cityStyleCSS.city}>
                <div>
                    <h2>{city.name}</h2>
                    <div className={cityStyleCSS.info}>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}else{
    return 'City not found'
}
}