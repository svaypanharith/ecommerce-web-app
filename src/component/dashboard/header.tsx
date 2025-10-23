import { SidebarTrigger } from "@/components/ui/sidebar"
export default function Header() {
    return (
        <div className="flex w-screen justify-between bg-blue-500 align-item-center items-center p-6">
            <SidebarTrigger/>
        </div>
    )
}