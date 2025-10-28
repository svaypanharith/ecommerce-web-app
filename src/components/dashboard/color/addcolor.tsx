"use client"

import CardWrapper from "@/components/share/cardwrapper"
import MInput from "@/components/m-ui/m-input"

export default function AddColor() {
  return (
    <CardWrapper title="Add Color" description="Add a new color to the system">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MInput label labelText="Color Name" placeholder="Color Name" />
        <MInput label labelText="Color Code (Hex)" placeholder="#FF0000" />
      </div>
    </CardWrapper>
  )
}
