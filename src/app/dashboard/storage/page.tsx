"use client"

import StorageTable from "@/component/dashboard/storage/storagetable"
export default function Storage() {
  const data = [
    {
      id: "1",
      name: "128GB",
      capacity: 128,
      description: "Standard 128GB storage for smartphones",
      status: "Active",
    },
    {
      id: "2",
      name: "256GB",
      capacity: 256,
      description: "High storage option for phones and laptops",
      status: "Active",
    },
    {
      id: "3",
      name: "512GB",
      capacity: 512,
      description: "Large storage for heavy users",
      status: "Inactive",
    },
    {
      id: "4",
      name: "1TB",
      capacity: 1024,
      description: "Top-tier storage for laptops",
      status: "Active",
    },
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
    <StorageTable data={data} columns={columns} />  
  )


}