"use client";
import SidebarLayout from "@/app/layout/SidebarLayout";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  );
}
