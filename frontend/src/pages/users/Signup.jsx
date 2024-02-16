import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { create } from './api-user';

const Signup = () => {
        const {
                register,
                handleSubmit,
                watch,
                formState: { errors },
              } = useForm()

        const onSubmit = (data) => {
                create(data)
                console.log(data)}

        console.log(watch("name"))
  return (
    <>
        
        <div>Signup </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text"
                label="Name"
                {...register("name", {required: true})}
                />

        <Input type="email"
                label="email"
                {...register("email", {required: true})}/>

        <Input type="password"
        label="password"
        {...register("password", {required: true})}/>
        {errors.exampleRequired && <span>This field is required</span>}


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