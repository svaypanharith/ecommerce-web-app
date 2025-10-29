"use client"

import { ArrowLeft } from "lucide-react";
import CardWrapper from "@/components/share/cardwrapper"
import AddStorageForm from "@/components/dashboard/storage/addstorageform"
import { useCallback } from "react"
import { FormValues } from "@/components/dashboard/storage/addstorageform"
import { useCreateStorageMutation } from "@/redux/slices/data-slices"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AddStorage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [addStorage] = useCreateStorageMutation();
  
  const from = searchParams.get('from') || '/dashboard/storage';

  const handleSubmit = useCallback(async (data: FormValues) => {
    try {
      console.log("Submitting data:", data);
      await addStorage(data).unwrap();
      router.push(from as string);
    } catch (error) {
      console.error("Failed to add storage:", error);
    }
  }, [addStorage, from, router]);

  return (
    <div className="space-y-6">
      <Button
        variant="outline"
        size="sm"
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
      
      <CardWrapper 
        title="Add New Storage" 
        description="Fill in the details below to add a new storage location"
        className="mt-4"
      >
        <AddStorageForm onSubmit={handleSubmit} />
      </CardWrapper>
    </div>
  );
}