"use client"

import ColorTable from "@/component/dashboard/color/colortable"



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
      code: "#000000", // Black
    },
    {
      id: "4",
      name: "White",
      code: "#FFFFFF", // White
    },
    {
      id: "5",
      name: "Blue",
      code: "#0000FF", // Standard Blue
    },
    {
      id: "6",
      name: "Green",
      code: "#008000", // Standard Green
    },
    {
      id: "7",
      name: "Yellow",
      code: "#FFFF00", // Pure Yellow
    },
    {
      id: "8",
      name: "Gray",
      code: "#808080", // Gray
    },
  ]
  return (
     <ColorTable data={data} columns={columns} />
  )
}
