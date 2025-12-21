"use client";

import { Toast,ToastProvider, ToastViewport } from "@/components/ui/toast";
// import { useToast } from "@/hooks/use-toast";
import { useToast } from "@/app/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, ...props }) => (
        <Toast key={id} {...props} />
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
