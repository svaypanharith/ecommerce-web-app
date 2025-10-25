"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {  LayoutDashboard, List, Package } from "lucide-react";

export function AppSidebar() {

  const items = [
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
    }

  ];
  
  return (
    <Sidebar className="w-64"
    >
      <SidebarContent className={`flex flex-col justify-between h-full  p-4`}>
        <div>
          <SidebarGroup className="gap-4">
            <SidebarGroupLabel className="flex justify-center items-center ">
              <h1 className="text-xl font-bold">
                Admin Dashbaord
              </h1>
            </SidebarGroupLabel>
            <SidebarSeparator />
            <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
