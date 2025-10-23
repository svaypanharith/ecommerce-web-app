"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "Product ID",
    cell: ({ row }) => {
      return <div>{row.original.id}</div>
    }
  },
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      return <div>{row.original.name}</div>
    }
  },
  {
    accessorKey: "description",
    header: "Product Description",
    cell: ({ row }) => {
      return <div>{row.original.description}</div>
    }
  },

  {
    accessorKey:"color",
    header: "Product Color",
    cell: ({ row }) => {
      return <div>{row.original.color}</div>
    }

  },
  {
    accessorKey: "size",
    header: "Product Size",
    cell: ({ row }) => {
      return <div>{row.original.size}</div>
    }
  },
  {
    accessorKey: "category",
    header: "Product Category",
    cell: ({ row }) => {
      return <div>{row.original.category}</div>
    }
  },

  {
    accessorKey: "price",
    header: "Product Price",
    cell: ({ row }) => {
      return <div>{row.original.price}</div>
    }
  },

  {
    accessorKey: "stock",
    header: "Product Stock",
    cell: ({ row }) => {
      return <div>{row.original.stock}</div>
    }
  },
  
]