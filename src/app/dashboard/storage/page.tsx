"use client"

import StorageTable from "@/components/dashboard/storage/storagetable"
import { useGetStoragesQuery } from "@/redux/slices/data-slices"
import { StorageColumns } from "@/components/dashboard/storage/storagecolumn"
import { useState } from "react"
import { useEffect } from "react"
import { StorageResponse } from "@/redux/slices/data-type"


export default function Storage() {
  const { data: storageData  , isLoading } = useGetStoragesQuery()
  const [storages, setStorages] = useState<StorageResponse[]>([])

  useEffect(() => {
    if (storageData) {
    
      setStorages(storageData)
    }
  }, [storageData])

  return <StorageTable data={storages?.data} isLoading={isLoading} columns={StorageColumns} />;
}