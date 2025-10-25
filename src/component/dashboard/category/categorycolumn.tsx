"use client";

import { ColumnDef, Row, Table } from "@tanstack/react-table";
import { Ellipsis, Pencil, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface CategoryType {
  id: string;
  name: string;
  description: string;
  status?: "active" | "inactive";
}

const ActionCell = ({ row, table }: { row: Row<CategoryType>; table: Table<CategoryType> }) => {
  return (
    <div className="flex w-full justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Ellipsis className="size-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-xl rounded-lg">
          <DropdownMenuItem
            className="cursor-pointer text-primary"
            onClick={() => console.log("Edit Category:", row.original.id)}
          >
            <Pencil className="size-4" />
            Edit
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem
            className="cursor-pointer text-red-500"
            onClick={() => console.log("Delete Category:", row.original.id)}
          >
            <Trash className="size-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const columns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Category Name",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="truncate max-w-[250px]">{row.original.description}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status || "active";
      return (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "active"
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
    accessorKey: "action",
    header: "Action",
    cell: ({ row, table }) => <ActionCell row={row} table={table} />,
  },
];
