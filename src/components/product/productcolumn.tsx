"use client"

import { ColumnDef, Row, Table } from "@tanstack/react-table"
import { Ellipsis, Pencil, Trash } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

interface ProductType {
   id: string;
   name: string;
   description: string;
   color?: string;
   size?: string;
   category?: string;
   price?: number;
   stock?: number;
   code?: string;
   image?: string;
   action?: string;
}


const ActionCell = ({ row, table }: { row: Row<ProductType>; table: Table<ProductType> }) => {
  return (
    <div className="flex w-full justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Ellipsis className="size-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-xl rounded-lg">
          <DropdownMenuItem
            className="cursor-pointer text-primary"
            onClick={() => {
              console.log("edit")
            }}
          >
            <Pencil className="size-4" />
            Edit
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem
            className="cursor-pointer text-red-500"
            onClick={() => {
              console.log("delete")
            }}
          >
            <Trash className="size-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const productColumns: ColumnDef<{
  id: string;
  name: string;
  description: string;
  color?: string;
  size?: string;
  category?: string;
  price?: number;
  stock?: number;
  code?: string;
}>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <div>{row.original.id}</div>
    },
  },
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      return <div>{row.original.name}</div>
    },
 
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => {
      return <div>{row.original.code}</div>
    },
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return <div>{row.original.name}</div>
    },
  },
  {
    accessorKey: "color" ,
    header: "Color",
    cell: ({ row }) => {
      return <div>{row.original.color}</div>
    },
  },

  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className="truncate max-w-50">{row.original.description}</div>
    },

  },
   
  {
    accessorKey: "Price",
    header: "Price",
    cell: ({ row }) => {
      return <div>{row.original.price}</div>
    },
  },
  {
    accessorKey: "Category" ,
    header: "Category",
    cell: ({ row }) => {  
     return <div>{row.original.category}</div>
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row, table }) => {
        return <ActionCell row={row} table={table} />
    },
  }

]