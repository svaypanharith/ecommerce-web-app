import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface MAlertDialogProps {
  title: ReactNode;
  description?: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  cancelText?: ReactNode
  confirmText?: ReactNode
  variant?: "destructive" | "default";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const MAlertDialog = React.forwardRef<HTMLButtonElement, MAlertDialogProps>(
  (
    {
      title,
      description,
      open,
      onOpenChange,
      onConfirm,
      variant = "default",
      size = "md",
      loading,
      ...props
    },
    ref
  ) => {
    const presetStyles = {
      default: "bg-white text-black hover:bg-gray-100",
      destructive: "bg-red-500 text-white hover:bg-red-600",
    };

    const sizeStyles = {
      sm: "w-[300px]",
      md: "w-[370px]",
      lg: "w-[450px]",
    };

    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent
          className={clsx(
            "bg-white min-w-[400px] max-w-[400px] left-[50%] sm:left-[49.26%] top-[50%] sm:top-[49.45%] -translate-x-[50%] sm:-translate-x-[49.45%] -translate-y-[50%] sm:-translate-y-[49.45%]  rounded-xl",
            sizeStyles[size],
            open
              ? "animate-in fade-in-0 zoom-in-95"
              : "animate-out fade-out-0 zoom-out-95"
          )}
        >
          <div className="flex flex-col">
            {title && <AlertDialogTitle className="text-black">{title}</AlertDialogTitle>}
            {description && (
              <AlertDialogDescription className="text-black">{description}</AlertDialogDescription>
            )}
          </div>
          <AlertDialogFooter className="flex flex-row gap-3 sm:gap-2  justify-end">
            {props.cancelText && (
              <AlertDialogCancel className="rounded-lg w-20 text-black hover:bg-gray-100">
                {props.cancelText}
              </AlertDialogCancel>
            )}
            {props.confirmText && (
              <AlertDialogAction
                onClick={onConfirm}
                ref={ref}
                className={clsx(
                  "rounded-lg sm:mt-0 mt-2 w-20",
                  presetStyles[variant as keyof typeof presetStyles],
                  loading && "opacity-50 cursor-not-allowed text-black "
                )}

              >
                {loading ? (
                  <Loader2
                    size={18}
                    strokeWidth={1.5}
                    className="animate-spin"
                  />
                ) : (
                  props.confirmText
                )}
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
);
MAlertDialog.displayName = "MAlertDialog";

export default MAlertDialog;
