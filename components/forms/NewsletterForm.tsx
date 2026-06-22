"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { createMailtoLink } from "@/lib/mailto";
import { useToast } from "@/components/ui/ToastProvider";

export function NewsletterForm() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      toast("Введите e-mail", "Так мы сможем добавить вас в список новостей.");
      return;
    }

    window.location.href = createMailtoLink({
      subject: "Подписка на новости Зона Комфорта",
      lines: [
        "Здравствуйте.",
        "Прошу добавить меня в список новостей и персональных подборок Зона Комфорта.",
        "",
        `E-mail: ${email.trim()}`
      ]
    });
    toast("Письмо подготовлено", "Подтвердите отправку в почтовом клиенте.");
  };

  return (
    <form className="mt-5 flex gap-2" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="footer-email">
        Email
      </label>
      <input
        id="footer-email"
        className="field h-12 px-4 text-sm"
        type="email"
        placeholder="Введите e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button
        type="submit"
        aria-label="Подписаться"
        className="premium-button grid h-12 w-12 shrink-0 place-items-center rounded-[10px] bg-bronze-200 text-ink-950 transition hover:bg-bronze-100"
      >
        <ArrowRight size={18} aria-hidden />
      </button>
    </form>
  );
}
