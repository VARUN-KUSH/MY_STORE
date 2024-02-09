import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"

const Signup = () => {
        const {
                register,
                handleSubmit,
                watch,
                formState: { errors },
              } = useForm()
  return (
    <>
        
        <div>Signup </div>
        <form >
        <Input type="text"
                label="Name"
                />

        <Input type="email"
                label="email"/>

        <Input type="password"
        label="password"/>

        <Button type = "submit"
        
                >
                    Create Account
                </Button>
        </form>
        

        <Link to='/login'>login if you have an account</Link>
    </>
    
  )
}

export default Signup