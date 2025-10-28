"use client"

import TableData from "@/components/share/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ColorDataProp {
  data: [];
  columns: [];
}

export default function ColorTable({ data, columns }: ColorDataProp) {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col gap-2">
        <div className="flex flex-row justify-end">
            <Button variant="outline" onClick={() => router.push("/dashboard/color/addColor")}>Add Color</Button>
        </div>
        <TableData data={data} columns={columns} />
    </div>
  );
}
