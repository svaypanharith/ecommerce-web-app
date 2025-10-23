import Layout from "@/component/sidebar/layout";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}