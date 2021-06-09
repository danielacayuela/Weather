import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import navCss from './Nav.module.css';



function Nav({onSearch}) {
  return (
    <nav className= {navCss.nav}>
      <SearchBar onSearch={onSearch}/>
      <div className={navCss.options}>
          <Link to ='/'>
            <span className={navCss.ho}>Home</span>
          </Link >
          <Link exact to ='/about'> 
            <span className={navCss.ab}>About</span>
          </Link>
      </div>
    </nav>
  );
};

export default Nav;
