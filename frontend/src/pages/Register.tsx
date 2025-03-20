import React from 'react'
import { useState,useEffect } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaUser } from 'react-icons/fa'
export const RegisterSchema=z.object({
  name:z.string().min(1,"Name is required"),
  email:z.string().email("Invalid email address"),
  password:z.string().min(6,"Password must be at least 6 characters long"),
  cinfirmPassword:z.string().min(6,"Password must be at least 6 characters long")

}).refine(data => data.password===data.cinfirmPassword ,{
  message:"Password don't match."
});
type RegisterData=z.infer<typeof RegisterSchema>
function Register() {
   const form=useForm<RegisterData>({
    resolver:zodResolver(RegisterSchema)
   })
   const onSubmit=async(event:z.infer<typeof RegisterSchema>) => {

   }
  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}
    className='flex flex-col gap-3'>
      <h1 className='flex justify-center gap-3 text-2xl'>
        <FaUser/>  Register
      
      </h1>
      {/**userName Field */}
     <FormField
     control={form.control}
     name='name'
     render={({field}) => (
      <FormItem>
        <FormLabel>Username:</FormLabel>
        <FormControl>
          <Input placeholder='John Doe' {...field}/>
        </FormControl>
      </FormItem>
     )}
     />
     {/**Email Field */}
     <FormField
     control={form.control}
     name="email"
     render={({field}) => (
      <FormItem >
        <FormLabel>Email:</FormLabel>
        <FormControl>
          <Input {...field} placeholder='Example@gmail.com'/>
        </FormControl>
      </FormItem>
     )}
     />
     {/**Password Field */}
     <FormField
     control={form.control}
     name="password"
     render={({field}) => (
      <FormItem >
        <FormLabel>Password:</FormLabel>
        <FormControl>
          <Input {...field} type='password'/>
        </FormControl>
      </FormItem>
     )}
     />
     {/** confirm Password Field */}
  
     <FormField
     control={form.control}
     name="cinfirmPassword"
     render={({field}) => (
      <FormItem >
        <FormLabel>Confirm Password:</FormLabel>
        <FormControl>
          <Input {...field} type='password'/>
        </FormControl>
      </FormItem>
     )}
     />
     <Button
     className='mt-5 w-32 self-center p-3'
      type="submit">
      Create Account
     </Button>


    </form>


  </Form>
}

export default Register