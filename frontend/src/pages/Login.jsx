import React from 'react'
import { Link } from "react-router-dom";
import Input from '../components/Input'
import Button from '../components/Button'
import { Outlet } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <Input type="email"
                label="email"/>

        <Input type="password"
        label="password"/>

        <Button type = "submit"
        
                >
                    Create Account
                </Button>
        
        <Link to='/signup'>signup if you are new</Link>
        <Outlet />
    </>
  )
}

export default Login