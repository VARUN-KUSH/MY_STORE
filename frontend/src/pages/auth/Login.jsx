import React from 'react'
import { Link } from "react-router-dom";
import Input from '../../components/Input'
import { useForm } from "react-hook-form"
import Button from '../../components/Button'
import { signin } from './api-auth';


const Login = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    signin(data).then((data))
  }
  return (
    <>  
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="email"
                label="email"
                {...register("email", {required: true})}/>

        <Input type="password"
        label="password"
        {...register("password", {required: true})}/>

        <Button type = "submit"
        
                >
                    Create Account
                </Button>
        
        <Link to='/signup'>signup if you are new</Link></form>
       
    </>
  )
}

export default Login