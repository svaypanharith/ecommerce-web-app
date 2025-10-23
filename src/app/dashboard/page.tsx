"use client"
import MainDashboard from "@/component/dashboard/maindashboard"
import DataTable from "@/component/product/productable"
import { columns } from "@/component/product/productcolumn"
export default function DashboardPage() {
   
    const data = [
        {
            id: "1",
            name: "Product 1",
            description: "Product 1 description",
        },
        {
            id: "2",
            name: "Product 2",
            description: "Product 2 description",
        },
        {
            id: "3",
            name: "Product 3",
            description: "Product 3 description",
        }
    ]
        return (
                <DataTable columns={columns} data={data} />
        )
}