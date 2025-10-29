"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardWrapperProps {
  children: React.ReactNode;
  title?:string;
  description?:string;
  className?:string;
}

export default function CardWrapper({ children , description , title , className }: CardWrapperProps) {
  return <Card className="w-full max-w-full p-8 shadow-lg rounded-2xl ${className}">
     <h1 className="text-2xl font-semibold">{title}</h1>
     <p className="text-sm text-gray-500">{description}</p>
    {children}
    </Card>;
}