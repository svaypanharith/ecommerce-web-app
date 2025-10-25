"use client";
import MInput from "../m-ui/m-input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AddProductForm() {
  return (
    <div className="flex w-full min-h-full bg-gray-50 p-6 rounded-lg">
      <Card className="w-full max-w-full p-8 shadow-lg rounded-2xl">
        <h1 className="text-2xl font-semibold">Add Product</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MInput label labelText="Product Name" placeholder="Product Name" />
          <MInput label labelText="Product Image" placeholder="Product Image" type="file" />
          <MInput label labelText="Product Code" placeholder="Product Code" />
          <MInput label labelText="Product Description" placeholder="Product Description" />
          <MInput label labelText="Product Color" placeholder="Product Color" />
          <MInput label labelText="Product Size" placeholder="Product Size" />
          <MInput label labelText="Product Category" placeholder="Product Category" />
          <MInput label labelText="Product Price" placeholder="Product Price" />
          <MInput label labelText="Product Stock" placeholder="Product Stock" />
        </div>
        <div className="flex justify-end pt-4">
          <Button className="px-8 py-2 text-lg bg-blue-500 rounded-xl">Save Product</Button>
        </div>
      </Card>
    </div>
  );
}