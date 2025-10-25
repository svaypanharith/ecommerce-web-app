"use client";
import AddProductForm from  "@/component/product/addProduct";

export default function AddProduct() {
    return (
        <div className="flex flex-col gap-2">
            <h1>Add Product</h1>
            <AddProductForm/>
        </div>
    )
}