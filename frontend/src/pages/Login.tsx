import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../components/ui/form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const LoginSchema = z
    .object({
    
      email: z.string().email({ message: "Please enter a valid email" }),
      password: z.string().min(6, "Password must be minimum 6 characters"),
    })
  

  const form = useForm<z.infer<typeof LoginSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="
      flex flex-col gap-5">
        
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
        
        <Button type="submit"
        className="w-32 p-3 self-center">Login</Button>
      </form>
    </Form>
  );
};

export default Login;
