"use client"

import TableData from "@/components/share/table"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import { StorageResponse } from "@/redux/slices/data-type"
import { ColumnDef } from "@tanstack/react-table"
import { useCallback } from "react"
import Link from "next/link"

interface StorageDataProp {
  data?: StorageResponse[];
  isLoading: boolean;
  columns: ColumnDef<StorageResponse>[];
}

export default function StorageTable({ data, columns  , isLoading}: StorageDataProp) {
  const router = useRouter()

  const handleAddStorage = useCallback(() => {
    router.push("/dashboard/storage/addstorage")
  }, [router])

  const currentlyroute = usePathname()

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row justify-start text-lg">
           <Link href={currentlyroute}>
             <p className="text-blue-500">
                Storage
             </p>
           </Link>
          </div>
          <div className="flex flex-row justify-end">
            <Button
          variant="outline"
          onClick={() => handleAddStorage()}
        >
          Add Storage
          </Button>
          </div>
        </div>
        <TableData data={data || []} columns={columns} isLoading={isLoading} />
      </div>
    );
  }
