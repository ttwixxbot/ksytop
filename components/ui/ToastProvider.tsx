"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Toast = {
  id: number;
  title: string;
  description?: string;
};

type ToastContextValue = {
  toast: (title: string, description?: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((title: string, description?: string) => {
    const id = Date.now();
    setToasts((items) => [...items, { id, title, description }]);
    window.setTimeout(() => {
      setToasts((items) => items.filter((item) => item.id !== id));
    }, 3600);
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-5 right-5 z-[90] flex w-[min(360px,calc(100vw-40px))] flex-col gap-3">
        <AnimatePresence>
          {toasts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              className="glass-card flex gap-3 p-4 shadow-bronze"
            >
              <CheckCircle2 className="mt-0.5 text-bronze-200" size={20} aria-hidden />
              <div>
                <p className="font-semibold text-ivory">{item.title}</p>
                {item.description ? (
                  <p className="mt-1 text-sm text-mist">{item.description}</p>
                ) : null}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
};
