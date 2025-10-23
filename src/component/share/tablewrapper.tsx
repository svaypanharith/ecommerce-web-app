"use client";

interface TableWrapperProps {
  children: React.ReactNode;
}
export default function TableWrapper({ children }: TableWrapperProps) {
  return <div className="rounded-lg my-base  bg-white shadow-xl overflow-x-auto ">{children}</div>;
}
