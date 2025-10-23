"use client";

import { Link, LogOut } from "lucide-react";
import { useState } from "react";
import Image from "next/image";



import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { menuitems } from "@/component/sidebar/menu-item";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  // const { logout } = useAuth();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <Sidebar className="w-64 min-h-screen flex flex-col">
        <SidebarContent
          className="flex flex-col justify-between h-full bg-gradient-to-br from-slate-900 
    via-slate-800 to-slate-900 p-4"
        >
          <div>
        
            <SidebarGroup>
              <SidebarGroupLabel className="flex justify-center items-center my-6 me-10">
              </SidebarGroupLabel>
            
              <SidebarGroupContent>
                <SidebarMenu className="py-10 gap-3">
                  {menuitems.map(item => (
                   <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                    <SidebarMenuButton
                        asChild
                        className="w-full   transition p-3 flex items-center gap-3 text-lg"
                      >
                        <a
                          href={item.url}
                          className={`flex gap-2 ${
                            pathname === item.url
                              ? "bg-gray-200 text-black rounded-md"
                              : "text-white"
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuButton>
                   </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
          {/* Logout Button */}
          <SidebarFooter className="mt-auto">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setOpen(true)}
                  className="w-full text-red-500 text-lg  hover:bg-red-600 hover:text-white transition p-3 rounded-md flex items-center gap-3"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
