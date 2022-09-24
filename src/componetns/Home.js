import React from 'react'
import { Link } from 'react-router-dom'

import './Stylee/Navbar.css'
function Home(){
  return (
  <div>
    <div className='sum'>
    <div className='logo'>
    MyCompany
    </div>
    <nav className='item'>
     <ul className='ul'>
     <li>
            <Link to="/">  Home </Link>
        </li>
        <li>
            <Link to="/contact"> Contact </Link>
        </li>
        <li>
            <Link to="/project"> project </Link>
        </li>
        <li >
            <Link to="/login" className='text-primary p-3 mb-2 bg-light text-dark'> Login </Link>
        </li>
     </ul>
    </nav>
   
    </div>
    <section className="main">
        <div>
            <h2>Hello, I'm Norah <br/><span>Content Creator</span></h2>
            <h3>I developer web </h3>
            <a href="https://github.com/Nurah-Osma" className="main-btn">View my work</a>
            <div className="social-icons">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
   </section>
    </div>
  )
}

export default Home;