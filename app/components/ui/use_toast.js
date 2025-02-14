"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";

const ToastContext = React.createContext();

export function ToastProvider({ children }) {
    const [open, setOpen] = React.useState(false);
    const [toastContent, setToastContent] = React.useState({
      title: "",
      description: "",
      variant: "",
    });
  
    const showToast = ({ title, description, variant }) => {
      setToastContent({ title, description, variant });
      setOpen(true);
    };
  
    return (
      <ToastContext.Provider value={{ showToast }}>
        {children}
        <ToastPrimitives.Provider>
          <ToastPrimitives.Root
            open={open}
            onOpenChange={setOpen}
            className={`fixed bottom-5 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg ${toastContent.variant === 'destructive' ? 'bg-red-600' : ''}`}
          >
            <strong>{toastContent.title}</strong>
            <p>{toastContent.description}</p>
          </ToastPrimitives.Root>
          <ToastPrimitives.Viewport />
        </ToastPrimitives.Provider>
      </ToastContext.Provider>
    );
  }
  

export function useToast() {
  return React.useContext(ToastContext);
}
