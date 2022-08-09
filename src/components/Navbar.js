import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'

const Navbar = () => {
    

  return (
    <nav className='h-[60px] bg-green-700 w-full'>
        <div>
        <Link to="www.google.com"><img src={Logo}/>TachoBikes</Link>
        </div>
    </nav>
  )
}

export default Navbar