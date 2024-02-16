import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import Signup from '../pages/users/Signup'
import Login from '../pages/auth/Login'

const Header = () => {
  //location func
  //lang func
  //cart
  return (

    <>
      <div className='flex bg- '>

      <h1>
        <Link to="/">Varun's Store
        </Link></h1>
        

        <Input type='text'/>

        
        <Input/>

        <p>Cart</p>


        //language decide 
        <div className=''>
        <Link to="/login">Login</Link>
        <div>
            <p>new customer <Link to="/signup">Signup</Link> here</p>
        </div>

        </div>
      </div>
        
        
       


    
    
    
    </>
    
  )
}

export default Header