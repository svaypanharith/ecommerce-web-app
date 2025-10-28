"use client";

interface TableWrapperProps {
  children: React.ReactNode;
}
export default function TableWrapper({ children }: TableWrapperProps) {
  return <div className="rounded-lg shadow-xl max-w-full">{children}</div>;
}
