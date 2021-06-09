import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import swal from 'sweetalert';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';

export default function App() {
  const [cities,setCities] = useState([]);
  console.log('CITIES',cities);
  
  function onSearch(ciudad) {
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          let exists= cities.filter(city=> city.id ===  recurso.id); 
          console.log('EXISTS',exists);
          if (!exists.length>0){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);  
          }else{
            swal({title:'City already selected', icon:'warning', timer:2000});
          }
        } else {
          swal({title:'City not found', icon:'error', timer:2000});
        }
      });
    }
    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id != id));
    }
    function onFilter (ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if (ciudad.length>0){
        return ciudad[0];
      }else{
        return null;
      }
    }
  return (
    <div className="App">
      <Route path='/' render={()=> <Nav onSearch ={onSearch}/>}/>
      <Route exact path='/about' component ={About} />
      <Route exact path='/' render={()=> <Cards cities = {cities} onClose= {onClose}/>}/>
      <Route exact path='/ciudad/:ciudadId' render={({match})=><Ciudad city={onFilter(match.params.ciudadId)} />} />
    </div>
  );
}

