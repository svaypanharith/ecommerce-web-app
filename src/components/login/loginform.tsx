
import MInput from "../m-ui/m-input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider } from "react-hook-form";

interface LoginFormProps {
    onSubmit: (data: FormValues) => void;
    isLoading?: boolean;
}

const formSchema = z.object({
    username: z.string().min(2, "Username must be at least 2 characters"),
    password: z.string().min(2, "Password must be at least 2 characters"),
});

export type FormValues = z.infer<typeof formSchema>;

export default function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const methods =  useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 max-w-full  p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
                <MInput
                    label
                    labelText="Username"
                    placeholder="Enter username"
                    name="username"
                />
                <MInput
                    label
                    labelText="Password"
                    placeholder="Enter password"
                    name="password"
                />
                <Button
                    type="submit"
                    className="px-6 bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                >
                    {isLoading ? "Logging in..." : "Login"}
                </Button>
            </form>
        </FormProvider>
    )
}