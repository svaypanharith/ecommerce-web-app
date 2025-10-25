"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import MInput from "@/component/m-ui/m-input";

export default function AddCategoryForm() {
  return (
    <div className="flex max-w-full h-full bg-gray-50 rounded-lg p-6">
      <Card className="w-full max-w-full p-8 shadow-lg rounded-2xl space-y-6">
        <h1 className="text-2xl font-semibold text-center">Add Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MInput label labelText="Category Name" placeholder="Category Name" />
          <MInput label labelText="Description" placeholder="Description" type="text" />
          <div className="flex flex-col w-20">
            <label className="mb-2 font-medium text-gray-700">Status</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-sm bg-gray-100 rounded-lg">Status</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Active</DropdownMenuItem>
                <DropdownMenuItem>Inactive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex justify-end pt-4">
           <Button className="bg-blue-500">Save Category</Button>
        </div>
      </Card>
    </div>
  );
}