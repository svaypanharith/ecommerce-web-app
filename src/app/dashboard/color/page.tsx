"use client"

import ColorTable from "@/components/dashboard/color/colortable"

export default function ColorPage(){
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Code",
      accessorKey: "code",
    },
  ]
  const data = [
    {
      id: "1",
      name: "Red",
      code: "#FF0000",
    },
    {
      id: "2",
      name: "Silver",
      code: "#C0C0C0", 
    },
    {
      id: "3",
      name: "Black",
      code: "#000000", 
    },
    {
      id: "4",
      name: "White",
      code: "#FFFFFF", 
    },
    {
      id: "5",
      name: "Blue",
      code: "#0000FF", 
    },
    {
      id: "6",
      name: "Green",
      code: "#008000",
    },
    {
      id: "7",
      name: "Yellow",
      code: "#FFFF00", 
    },
    {
      id: "8",
      name: "Gray",
      code: "#808080", 
    },
  ]
  return (
     <ColorTable data={data} columns={columns} />
  )
}
