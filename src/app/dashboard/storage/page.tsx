"use client"

import StorageTable from "@/components/dashboard/storage/storagetable"
import { useGetStoragesQuery } from "@/redux/slices/data-slices"
import { useEffect } from "react"
import { StorageColumns } from "@/components/dashboard/storage/storagecolumn"
export default function Storage() {
  const { data: storageData  , isLoading , error} = useGetStoragesQuery()




const data = [

]


  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Storage Name",
      accessorKey: "name",
    },
    {
      header: "Capacity (GB)",
      accessorKey: "capacity",
    },
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }: any) => (
        <div className="flex gap-2">
          <button className="text-blue-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline">Delete</button>
        </div>
      ),
    },
  ]

  
  return (
    <StorageTable data={storageData?.data|| data} columns={StorageColumns} />  
  )
}