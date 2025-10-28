"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import TableWrapper from "../share/tablewrapper"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {  useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface ProductTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export default function ProductTable<TData, TValue>({
  columns,
  data,
}: ProductTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  const router = useRouter();

  const onClickOpendialog = useCallback(() => {
    router.push("/dashboard/product/addproduct"); 
  }, [router]);
  
  return (
     <div className="flex flex-col gap-4">
     <div className="flex flex-row">
        <div className="max-w-40 flex flex-row justify-start">
            <Input type="text" placeholder="Search" className="w-full" />
        </div>
        <div className="w-full flex flex-row justify-end">
            <Button variant="outline" onClick={onClickOpendialog}>Add Product</Button>
        </div>
     </div>
     <TableWrapper >
      <Table className="w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="bg-blue-500">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      </TableWrapper>
      </div>
  )
}