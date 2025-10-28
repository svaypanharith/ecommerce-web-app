"use client"

import CardWrapper from "@/components/share/cardwrapper"
import MInput from "@/components/m-ui/m-input"

export default function AddStorage(){
  return (
   <CardWrapper title="Add Storage" description="Add a new storage to the system">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <MInput  label labelText="Stroagename" placeholder="Storage Name" />
      <MInput label labelText="StorageCapacity" placeholder="Storage Capacity" />
      <MInput label labelText="StorageDescription" placeholder="Storage Description" />
    </div>
   </CardWrapper>
  )
}