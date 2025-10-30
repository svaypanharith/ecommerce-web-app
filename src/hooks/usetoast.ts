import { toast as sonnerToast } from 'sonner';

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

interface ToastOptions {
  type?: ToastType;
  duration?: number;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const toast = (message: string, options: ToastOptions = {}) => {
  const { type = 'default', duration = 5000, description, action } = options;
  
  const toastConfig = {
    duration,
    ...(description && { description }),
    ...(action && {
      action: {
        label: action.label,
        onClick: action.onClick,
      },
    }),
  };

  switch (type) {
    case 'success':
      return sonnerToast.success(message, toastConfig);
    case 'error':
      return sonnerToast.error(message, toastConfig);
    case 'info':
      return sonnerToast.info(message, toastConfig);
    case 'warning':
      return sonnerToast.warning(message, toastConfig);
    default:
      return sonnerToast(message, toastConfig);
  }
};

const useToast = () => {
  return {
    toast,
    success: (message: string, options?: Omit<ToastOptions, 'type'>) =>
      toast(message, { ...options, type: 'success' }),
    error: (message: string, options?: Omit<ToastOptions, 'type'>) =>
      toast(message, { ...options, type: 'error' }),
    info: (message: string, options?: Omit<ToastOptions, 'type'>) =>
      toast(message, { ...options, type: 'info' }),
    warning: (message: string, options?: Omit<ToastOptions, 'type'>) =>
      toast(message, { ...options, type: 'warning' }),
    dismiss: sonnerToast.dismiss,
  };
};

export { useToast, toast };