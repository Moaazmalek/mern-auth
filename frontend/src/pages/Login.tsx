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
import { FaSignInAlt, FaUser } from 'react-icons/fa'
export const LoginSchema=z.object({
  
  email:z.string().email("Invalid email address"),
  password:z.string().min(6,"Password must be at least 6 characters long")

})
type RegisterData=z.infer<typeof LoginSchema>
function Login() {
   const form=useForm<RegisterData>({
    resolver:zodResolver(LoginSchema)
   })
   const onSubmit=async(event:z.infer<typeof LoginSchema>) => {

   }
  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}
    className='flex flex-col gap-3'>
      <h1 className='flex justify-center gap-3 text-2xl'>
        <FaSignInAlt/>  Login
      
      </h1>
      {/**Email Field */}
     <FormField
     control={form.control}
     name='email'
     render={({field}) => (
      <FormItem>
        <FormLabel>Email:</FormLabel>
        <FormControl>
          <Input placeholder='JohnDoe@gmail.com' {...field}/>
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
     
    
     <Button
     className='mt-5 w-32 self-center p-3'
      type="submit">
      Login
     </Button>


    </form>


  </Form>
}

export default Login