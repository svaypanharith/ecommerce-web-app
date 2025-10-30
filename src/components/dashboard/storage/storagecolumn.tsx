"use client"

import { ColumnDef, Row, Table } from "@tanstack/react-table"
import { Ellipsis, Pencil, Trash } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { StorageResponse } from "@/redux/slices/data-type"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableMeta } from "@/components/share/table"


export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

interface StorageType {
  id: string;
    name: string;
        capacity: number;
        description: string;
        status: string;

}

const ActionCell = ({ row, table }: { row: Row<StorageResponse>; table: Table<StorageResponse> }) => {
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
              (table.options.meta as TableMeta<StorageResponse>)?.handleRowEditClick(row);
            }}
          >
            <Pencil className="size-4" />
            Edit
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem
            className="cursor-pointer text-red-500"
            onClick={() => {
              (table.options.meta as TableMeta<StorageResponse>)?.handleRowDeleteClick(row);
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

export const StorageColumns: ColumnDef<StorageType>[] = 


[
    {
      header: "ID",
      accessorKey: "id",
      cell: ({ row }) => {
        return <div>{row.index + 1}</div>
      },
    },
    {
      header: "Storage Name",
      accessorKey: "name",
      cell: ({ row }) => {
        return <div>{row.original?.name}</div>
      },
    },
    {
      header: "Capacity (GB)",
      accessorKey: "capacity",
      cell: ({ row }) => {
        
          return <div>{row.original?.capacity}</div>
      },
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: ({ row }) => {
        return <div>{row.original?.description}</div>
      },
    },

     {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original?.status|| "active";
      return (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "ACTIVE"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </span>
      );
    },
  },
        {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row  , table}: { row: Row<StorageResponse>; table: Table<StorageResponse> }) => (
        <ActionCell row={row} table={table} />
      ),
    },
    
]