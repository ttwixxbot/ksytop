"use client";

export type RequestItem = {
  productId: string;
  quantity: number;
};

export const REQUEST_STORAGE_KEY = "zona-komforta-request";
export const REQUEST_UPDATED_EVENT = "zona-komforta-request-updated";

export const readRequestItems = (): RequestItem[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(REQUEST_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as RequestItem[];
    return Array.isArray(parsed)
      ? parsed
          .filter((item) => item?.productId && Number(item.quantity) > 0)
          .map((item) => ({
            productId: String(item.productId),
            quantity: Math.max(1, Math.min(99, Math.floor(Number(item.quantity))))
          }))
      : [];
  } catch {
    return [];
  }
};

export const writeRequestItems = (items: RequestItem[]) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(REQUEST_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(REQUEST_UPDATED_EVENT));
  } catch (error) {
    console.warn("Unable to persist request cart", error);
  }
};

export const addToRequest = (productId: string) => {
  const items = readRequestItems();
  const current = items.find((item) => item.productId === productId);

  if (current) {
    current.quantity += 1;
    writeRequestItems(items);
    return current.quantity;
  }

  writeRequestItems([...items, { productId, quantity: 1 }]);
  return 1;
};

export const getRequestCount = () =>
  readRequestItems().reduce((total, item) => total + item.quantity, 0);
