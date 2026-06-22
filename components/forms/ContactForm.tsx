"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      message: String(form.get("message") ?? "")
    };

    if (!payload.name.trim() || !payload.phone.trim()) {
      toast("Заполните имя и телефон", "Мы свяжемся с вами по указанному номеру.");
      return;
    }

    setPending(true);
    window.setTimeout(() => {
      console.log("Contact request", payload);
      setPending(false);
      event.currentTarget.reset();
      toast("Заявка отправлена", "Дизайнер свяжется с вами для уточнения деталей.");
    }, 700);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card grid gap-4 p-5">
      {!compact ? <h2 className="font-display text-3xl text-ivory">Оставить заявку</h2> : null}
      <label className="grid gap-2 text-sm text-mist">
        Имя
        <input className="field h-12 px-4" name="name" placeholder="Ваше имя" />
      </label>
      <label className="grid gap-2 text-sm text-mist">
        Телефон
        <input className="field h-12 px-4" name="phone" placeholder="+7 (___) ___-__-__" />
      </label>
      <label className="grid gap-2 text-sm text-mist">
        Сообщение
        <textarea
          className="field min-h-32 resize-none px-4 py-3"
          name="message"
          placeholder="Расскажите, какую мебель вы ищете"
        />
      </label>
      <Button type="submit" disabled={pending}>
        {pending ? "Отправляем" : "Отправить заявку"}
      </Button>
    </form>
  );
}
