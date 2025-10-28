"use client";
import { Card } from "@/components/ui/card";
import { title } from "process";
import { Button } from "@/components/ui/button";

interface CardWrapperProps {
  children: React.ReactNode;
  title?:string;
  description?:string;
}

export default function CardWrapper({ children , description , title }: CardWrapperProps) {
  return <Card className="w-full max-w-full p-8 shadow-lg rounded-2xl">
     <h1 className="text-2xl font-semibold">{title}</h1>
     <p className="text-sm text-gray-500">{description}</p>
    {children}
    <div className="flex justify-end pt-4">
          <Button className="px-8 py-2 text-lg bg-blue-500 rounded-xl">Save</Button>
    </div>
    </Card>;
}