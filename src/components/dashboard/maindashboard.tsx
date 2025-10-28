"use client"

import Layout from "../sidebar/layout"
import  DataTable  from "../product/productable"
import { columns, Payment } from "../product/productcolumn"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ]
  }
  


export default function MainDashboard() {
    
    const data = [
        {
            id: "728ed52f",
            name: "Product 1",
            description: "Product 1 description",
            color: "Red",
            size: "M",
            category: "Electronics",
            price: 100,
            stock: 100,
        },
        {
            id: "728ed52f",
            name: "Product 2",
            description: "Product 2 description",
            color: "Blue",
            size: "L",
            category: "Electronics",
            price: 200,
            stock: 200,
        },
        {
            id: "728ed52f",
            name: "Product 3",
            description: "Product 3 description",
            color: "Green",
            size: "XL",
            category: "Electronics",
            price: 300,
            stock: 300,
        },
        {
            id: "728ed52f",
            name: "Product 4",
            description: "Product 4 description",
            color: "Yellow",
            size: "XXL",
            category: "Electronics",
            price: 400,
            stock: 400,
        },
        {
            id: "728ed52f",
            name: "Product 5",
            description: "Product 5 description",
            color: "Purple",
            size: "XXXL",
            category: "Electronics",
            price: 500,
            stock: 500,
        },
    ]

    return (
        <Layout>
                 <DataTable columns={columns }  data={data} />
        </Layout>
    )
}   