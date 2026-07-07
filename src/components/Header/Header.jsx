import React from 'react'
import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
 
      <div className="header-contents">
  
          <h2>Order your favourite food here</h2>
  
          <p>My favourite food is Indian cuisine, especially flavorful dishes like biryani, dosa, and butter chicken packed with rich spices and aroma.</p>

          <a href="#explore-menu"><button>View Menu</button></a>

      </div>

    </div>
  )
}

export default Header
