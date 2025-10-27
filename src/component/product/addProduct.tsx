"use client";
import MInput from "../m-ui/m-input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";


export default function AddProductForm() {
  return (
    <div className="flex w-full min-h-full bg-gray-50 p-6 rounded-lg">
      <Card className="w-full max-w-full p-8 shadow-lg rounded-2xl">
        <h1 className="text-2xl font-semibold">Add Product</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MInput label labelText="Product Name" placeholder="Product Name" />
          <MInput label labelText="Product Image" placeholder="Product Image" type="file" />
          <MInput label labelText="Product Code" placeholder="Product Code"  type="text"/>
          <MInput label labelText="Image Garllery" placeholder="Image Garllery" multiple  type="file" />
          <MInput label labelText="Product Description" placeholder="Product Description" />
          <div className="flex flex-col gap-4 ">
          <Label> Color</Label>
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-sm bg-gray-100 rounded-lg">Color</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Orange</DropdownMenuItem>
                <DropdownMenuItem>Blue</DropdownMenuItem>
                <DropdownMenuItem>Green</DropdownMenuItem>
                <DropdownMenuItem>Yellow</DropdownMenuItem>
                <DropdownMenuItem>Purple</DropdownMenuItem>
                <DropdownMenuItem>Pink</DropdownMenuItem>
                <DropdownMenuItem>Brown</DropdownMenuItem>
                <DropdownMenuItem>Gray</DropdownMenuItem>
                <DropdownMenuItem>Black</DropdownMenuItem>
                <DropdownMenuItem>White</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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