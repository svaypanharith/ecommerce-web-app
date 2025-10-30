"use client"
import MAlertDialog from "@/components/m-ui/m-alertdialog"
import { useDeleteStorageMutation } from "@/redux/slices/data-slices"
import { useCallback } from "react"
import { useToast } from "@/hooks/usetoast"


interface DeleteStorageProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
    
}
export default function DeleteStorage({isOpen , onClose , id}: DeleteStorageProps) {
  const [deleteStorage , {isLoading}] = useDeleteStorageMutation()
  const {  success , error } = useToast()
  const handleDeleteStorage = useCallback(async ( id: string)  =>   {
      try {
        const response =  await deleteStorage(id)
        console.log("response",response.data?.success)
          if(response.data?.success === "true"){
              success("Storage deleted successfully")
          }
        onClose()
      } catch (error) {
          console.log("error",error)
      }
  }, [deleteStorage, onClose, success])
    return (
        <MAlertDialog
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        open={isOpen}
        onOpenChange={onClose}
        onConfirm={() => {
            handleDeleteStorage( id)
        }}
        cancelText="Cancel"
        confirmText="Delete"
        variant="destructive"
        size="md"
        loading={isLoading}
        />
    )
}