
import { Toaster } from "sonner";

export default function ToastProvider( ) {
    return (
        <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
                style: {
                    borderRadius: '8px',
                    padding: '12px 16px',
                },
            }}
        />
    );
}
