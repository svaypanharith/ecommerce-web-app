"use client";

import CategoryTable from "@/component/dashboard/category/categorytable";
import { columns } from "@/component/dashboard/category/categorycolumn";

export default function CategoryPage() {
  const data = [
    {
      id: "CAT-001",
      name: "Smartphones",
      description: "High-end and budget smartphones from top brands.",
      status: "active",
    },
    {
      id: "CAT-002",
      name: "Laptops",
      description: "Gaming, business, and personal laptops.",
      status: "active",
    },
    {
      id: "CAT-003",
      name: "AirPod",
      description: "Phone cases, chargers, cables, earphones, and more.",
      status: "inactive",
    },
    {
      id: "CAT-004",
      name: "HeadPhone",
      description: "Refrigerators, washing machines, microwaves, and smart home devices.",
      status: "active",
    },
    {
      id: "CAT-005",
      name: "KeyBoard",
      description: "Gaming consoles, controllers, and gaming accessories.",
      status: "active",
    },
  ];

  return <CategoryTable columns={columns} data={data} />;
}
