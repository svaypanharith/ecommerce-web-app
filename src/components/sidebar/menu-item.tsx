import { Package } from "lucide-react";

import { User, LayoutDashboard, List } from "lucide-react";

const menuitems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Product",
    url: "/dashboard/product",
    icon: Package,
  },
  {
    title: "Category",
    url: "/dashboard/category",
    icon: List,
  },
  {
    title: "Customer",
    url: "/dashboard/customer",
    icon: User,
  },
];

export { menuitems };
