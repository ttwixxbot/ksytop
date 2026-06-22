"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";
import { createMailtoLink } from "@/lib/mailto";

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
    window.location.href = createMailtoLink({
      subject: "Заявка на консультацию Зона Комфорта",
      lines: [
        "Здравствуйте.",
        "Нужна консультация по подбору мебели.",
        "",
        `Имя: ${payload.name.trim()}`,
        `Телефон: ${payload.phone.trim()}`,
        payload.message.trim() ? `Сообщение: ${payload.message.trim()}` : ""
      ]
    });
    setPending(false);
    toast("Письмо подготовлено", "Подтвердите отправку в почтовом клиенте.");
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card grid gap-4 p-5">
      {!compact ? <h2 className="font-display text-3xl text-ivory">Оставить заявку</h2> : null}
      <label className="grid gap-2 text-sm text-mist">
        Имя
        <input className="field h-12 px-4" name="name" placeholder="Ваше имя" autoComplete="name" required />
      </label>
      <label className="grid gap-2 text-sm text-mist">
        Телефон
        <input
          className="field h-12 px-4"
          name="phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          autoComplete="tel"
          required
        />
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
      <p className="text-xs leading-5 text-mist">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных по{" "}
        <Link href="/privacy" className="text-bronze-100 underline-offset-4 hover:underline">
          Политике конфиденциальности
        </Link>
        .
      </p>
    </form>
  );
}
