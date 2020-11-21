import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to ='/'><i className='fab fa-github-alt' /></Link>
      </h1>
      <ul>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/mywork'>My Work</Link></li>
        <li><Link to='/contact'>Contact Me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
