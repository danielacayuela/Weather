import React from 'react';
import aboutStyleCSS from './aboutStyle.module.css'

function About (){
    return(
        <div className={aboutStyleCSS.general}>
            <p> Check the weather in different cities around the world. Get the main data, such as maximum and minimum temperature, wind, clouds, latitude and longitude. For this application was used: api.openweathermap.org/</p>
        </div>
    )
}

export default About;