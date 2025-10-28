"use client"

import TableData from "@/components/share/table"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface StorageDataProp {
  data?: [];
  columns: [];
}

export default function StorageTable({ data, columns }: StorageDataProp) {
  const router = useRouter()

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex flex-row justify-end">
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/storage/addstorage")}
        >
          Add Storage
        </Button>
      </div>
      <TableData data={data} columns={columns} />
    </div>
  )
}
