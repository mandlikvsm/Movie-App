import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../logo.png'
import './Header.scss'

import { ImSearch } from 'react-icons/im'

const Header = () => {
   
  return (
      <nav className="header">
          
          <img src={logo} alt="Logo" />
         

          <div className='div1'>
              
          <Link to="/">Home</Link>
          <Link to="/">TV Shows</Link>
          <Link to="/">Movies</Link>
       
          <Link to="/">My List</Link>
          
          </div>
          
          <div className='div2'>
             <input type="text" />
              <button>
              <ImSearch/>
                  
                </button>
             
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>    

        </div>
          
    </nav>
  )
}

export default Header