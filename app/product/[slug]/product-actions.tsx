"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRequestCart } from "@/components/request/RequestCartContext";
import { useToast } from "@/components/ui/ToastProvider";

export function AddProductButton({ productId, productName }: { productId: string; productName: string }) {
  const { toast } = useToast();
  const { addItem } = useRequestCart();

  return (
    <Button
      onClick={() => {
        const ok = addItem(productId);
        toast(ok ? "Добавлено в заявку" : "Не удалось добавить товар", productName);
      }}
      icon={<Plus size={16} aria-hidden />}
    >
      Добавить в заявку
    </Button>
  );
}
