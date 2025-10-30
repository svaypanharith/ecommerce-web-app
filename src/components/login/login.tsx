"use client";
import LoginForm from "./loginform";
import { useCallback} from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {

  const router = useRouter();

  const handleSub = useCallback(() => {
    console.log("submit");
    router.push("/dashboard");
  }, [router]);

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
        <LoginForm onSubmit={handleSub} isLoading={false} />
      </CardContent>
    </Card>
    )
}