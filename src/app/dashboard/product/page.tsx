

import DataTable from "@/component/product/productable"
import { columns } from "@/component/product/productcolumn"

export default function ProductPage() {

    const data = [
        {
          id: "1",
          name: "iPhone 17 Pro Max",
          color: "Red",
          code: "APL-RED-17PM",
          category: "SmartPhone",
          price: "1200$",
          description: "The ultimate flagship with A19 Bionic chip, ProMotion 120Hz display, aerospace-grade titanium frame, and breakthrough battery life."
        },
        {
          id: "2",
          name: "iPhone 17 Pro Max",
          color: "Blue",
          category: "SmartPhone",
          price: "1200$",
          code: "APL-BLUE-17PM",
          description: "Stunning Deep Ocean Blue edition featuring an advanced triple-lens camera system with AI-enhanced photography and ultra-fast 6G connectivity."
        },
        {
          id: "3",
          name: "iPhone 17 Pro Max",
          color: "Green",
          price: "1200$",
          category: "Smart Phone",
          code: "APL-GREEN-17PM",
          description: "Eco Green finish with sustainable materials, enhanced cooling system, and next-gen Face ID for ultra-secure authentication."
        }
      ]
      
    return (
            <DataTable columns={columns} data={data} />
    )
}