// import `useState` with React so that we can take advantage of the hook
import React, { useState } from 'react';

function Nav() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  //set a state variable using 'useState' and an update function
  const [active, setActive] = useState('');

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top' id='sideNav'>
      <a className='navbar-brand' href='#page-top'>
        <span className='d-block d-lg-none'>Sean Shin</span>
        <span className='d-none d-lg-block'><img className='img-fluid img-profile rounded-circle mx-auto mb-2'
          src='profile.JPG' alt='Profile Picture' /></span>
      </a>

      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav'>
          <li className='nav-item'><a className='nav-link' href='#about'>About</a></li>
          <li className='nav-item'><a className='nav-link' href='#experience'>Experience</a></li>
          <li className='nav-item'><a className='nav-link' href='#education'>Education</a></li>
          <li className='nav-item'><a className='nav-link' href='#skills'>Skills</a></li>
          <li className='nav-item'><a className='nav-link' href='#interests'>Interests</a></li>
          <li className='nav-item'><a className='nav-link' href='#projects'>Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
