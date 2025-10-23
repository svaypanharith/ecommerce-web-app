"use client";

import type React from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/component/dashboard/header";
import { AppSidebar } from "@/component/sidebar/app-sidebar";
export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex h-full flex-col gap-4 ">
          <Header />
          <main className="flex-1 overflow-auto">
            <div className="flex flex-col gap-4 py-base px-base">{children}</div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
