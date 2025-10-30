"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableWrapper from "./tablewrapper";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import { Row } from "@tanstack/react-table";

interface TableDataProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  onSelectedRow: ( row: Row<TData>) => void;
  onOpenEditModal: () => void;
  onOpenDeleteModal: () => void;
}

export interface TableMeta<TData> extends TableDataProps<TData, any> {
  handleRowEditClick: (row: Row<TData>) => void;
  handleRowDeleteClick: (row: Row<TData>) => void;
}

export default function TableData<TData>({ columns, data ,isLoading ,  onSelectedRow , onOpenEditModal , onOpenDeleteModal }:TableDataProps<TData , any>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      handleRowEditClick: (row: Row<TData>) => {
        onSelectedRow(row);
        onOpenEditModal();
      },
      handleRowDeleteClick: (row : Row<TData>) => {

        onSelectedRow(row);
        onOpenDeleteModal();
      },
    },
  });

  return (
    <TableWrapper>
      <Table className="w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="bg-blue-500">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length}>

                  <div className="w-full h-full flex justify-center items-center">
                    <Loader2 className="w-14 h-14 text-center animate-spin" />
                  </div>
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
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
  );
}
