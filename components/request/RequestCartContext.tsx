"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { products } from "@/data/products";
import {
  readRequestItems,
  writeRequestItems,
  type RequestItem
} from "@/lib/request-store";

type RequestCartContextValue = {
  items: RequestItem[];
  count: number;
  hydrated: boolean;
  addItem: (productId: string) => boolean;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  incrementItem: (productId: string) => void;
  decrementItem: (productId: string) => void;
  clear: () => void;
};

const RequestCartContext = createContext<RequestCartContextValue | null>(null);
const validProductIds = new Set(products.map((product) => product.id));

const sanitizeItems = (items: RequestItem[]) => {
  const merged = new Map<string, number>();

  for (const item of items) {
    if (!item?.productId || !validProductIds.has(item.productId)) {
      continue;
    }

    const quantity = Number.isFinite(item.quantity)
      ? Math.max(1, Math.min(99, Math.floor(item.quantity)))
      : 1;
    merged.set(item.productId, (merged.get(item.productId) ?? 0) + quantity);
  }

  return Array.from(merged, ([productId, quantity]) => ({
    productId,
    quantity: Math.min(99, quantity)
  }));
};

export function RequestCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<RequestItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(sanitizeItems(readRequestItems()));
    setHydrated(true);
  }, []);

  const commit = useCallback((nextItems: RequestItem[]) => {
    const sanitized = sanitizeItems(nextItems);
    setItems(sanitized);
    writeRequestItems(sanitized);
  }, []);

  const addItem = useCallback(
    (productId: string) => {
      if (!validProductIds.has(productId)) {
        return false;
      }

      commit(
        items.some((item) => item.productId === productId)
          ? items.map((item) =>
              item.productId === productId
                ? { ...item, quantity: Math.min(99, item.quantity + 1) }
                : item
            )
          : [...items, { productId, quantity: 1 }]
      );
      return true;
    },
    [commit, items]
  );

  const removeItem = useCallback(
    (productId: string) => {
      commit(items.filter((item) => item.productId !== productId));
    },
    [commit, items]
  );

  const setQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (!validProductIds.has(productId)) {
        return;
      }

      const nextQuantity = Math.max(1, Math.min(99, Math.floor(quantity)));
      commit(
        items.map((item) =>
          item.productId === productId ? { ...item, quantity: nextQuantity } : item
        )
      );
    },
    [commit, items]
  );

  const incrementItem = useCallback(
    (productId: string) => {
      const current = items.find((item) => item.productId === productId);
      setQuantity(productId, (current?.quantity ?? 0) + 1);
    },
    [items, setQuantity]
  );

  const decrementItem = useCallback(
    (productId: string) => {
      const current = items.find((item) => item.productId === productId);
      if (!current) {
        return;
      }

      if (current.quantity <= 1) {
        removeItem(productId);
        return;
      }

      setQuantity(productId, current.quantity - 1);
    },
    [items, removeItem, setQuantity]
  );

  const clear = useCallback(() => commit([]), [commit]);

  const value = useMemo<RequestCartContextValue>(
    () => ({
      items,
      count: items.reduce((total, item) => total + item.quantity, 0),
      hydrated,
      addItem,
      removeItem,
      setQuantity,
      incrementItem,
      decrementItem,
      clear
    }),
    [addItem, clear, decrementItem, hydrated, incrementItem, items, removeItem, setQuantity]
  );

  return <RequestCartContext.Provider value={value}>{children}</RequestCartContext.Provider>;
}

export function useRequestCart() {
  const context = useContext(RequestCartContext);
  if (!context) {
    throw new Error("useRequestCart must be used inside RequestCartProvider");
  }

  return context;
}
