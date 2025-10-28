import { SidebarTrigger } from "@/components/ui/sidebar"
export default function Header() {
    return (
        <div className="flex w-screen justify-between bg-white align-item-center items-center">
            <SidebarTrigger/>
        </div>
    )
}