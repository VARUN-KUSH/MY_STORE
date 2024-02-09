import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Header = () => {
  return (

    <>
        <Link to="/"><h1>Varun Store</h1></Link>
        <p>location dyanamically</p>
        <Input />
        <Input/>
        //language decide 
        <div>
        <Link to="/login">Login</Link>
        <div>
            <p>new customer <Link to="/signup">Signup</Link> here</p>
        </div>

        </div>
        <p>Cart</p>

       


    
    
    
    </>
    
  )
}

export default Header