"use client"; 

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MInput from "@/component/m-ui/m-input";

export default function LoginForm() {

 const onSubmit = useCallback(() => {
     console.log("Submit Test Data ")
 }, []);

  return (
    <Card 
      className="max-w-md mx-auto w-full rounded-2xl p-6 transition-all duration-300 
                 bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 
                 shadow-lg hover:shadow-xl" 
    >
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Admin Login
        </CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Enter your credentials to access the dashboard
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="gap-5 flex flex-col">
          <MInput 
            label={true}
            labelText="Email"
            placeholder="john.doe@admin.com" 
            type="email"
          />
          <MInput
            label={true}
            labelText="Password"
            placeholder="••••••••" 
            type="password"
          />
          
          <Button
            type="submit"
            className="rounded-lg bg-blue-600 w-full text-lg h-12 mt-2 
                       text-white font-semibold hover:bg-blue-700 transition 
                       shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}