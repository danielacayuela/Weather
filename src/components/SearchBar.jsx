import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import searchStyle from './searchStyle.module.css'


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
    <form  onSubmit={(e) => {
      setCity('');
      e.preventDefault();
      onSearch(city);
    }}>
      <div className={searchStyle.search}>
        <Link to ='/'>
          <h2 className={searchStyle.title}>Weather App</h2>
        </Link>
        <div>
          <input
            type="text"
            placeholder="City..."
            value={city}
            onChange={e => setCity(e.target.value)}
            className={searchStyle.in}/>
          <input type="submit" value="Search" className={searchStyle.add}/>
        </div>
      </div>
    </form>
  );
}