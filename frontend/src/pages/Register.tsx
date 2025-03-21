import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../components/ui/form";
import {reset,register} from '../features/auth/authSlice'
import { toast } from "react-toastify";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {RootType,AppDispatch} from '../store/store'
import { useNavigate } from "@tanstack/react-router";
import { User } from "@/lib/types";
const RegisterSchema = z
    .object({
      name: z.string(),
      email: z.string().email({ message: "Please enter a valid email" }),
      password: z.string().min(6, "Password must be minimum 6 characters"),
      confirmPassword: z
        .string()
        .min(6, "Password must be minimum 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"], // Specify where the error message should be applied
    });
const Register = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch<AppDispatch>();
  const {user,isLoading,isError,isSuccess,message}=useSelector((state:RootType) => state.auth)
  useEffect(() => { 
      if(isError){
        toast.error(message)
      }
      if(isSuccess || user ){
       navigate({to:"/dashboard"})
         
      }
      dispatch(reset())
    
  }, [user,isError,isSuccess,message,dispatch])
  
  const form = useForm<z.infer<typeof RegisterSchema>>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async ({name,password,email,confirmPassword}: z.infer<typeof RegisterSchema>) => {
if(confirmPassword !== password){
  toast.error("Passwords don't match")
}else {  
 
  if(name && email && password){
    const userData={
      name,password,email
    }
    dispatch(register(userData))
  }
}

  };

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="
      flex flex-col gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Input type="text" {...field} placeholder="John Doe" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Input type="email" {...field} placeholder="JohnDoe@gmail.com" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Input type="password" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <Input type="password" {...field} />
            </FormItem>
          )}
        />
        {form.formState.errors.confirmPassword && <h1>{form.formState.errors.confirmPassword?.message}</h1>}

        <Button type="submit"
        className="w-32 p-3 self-center">Create Account</Button>
      </form>
    </Form>
  );
};

export default Register;
