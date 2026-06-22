import type { Metadata } from "next";
import { Clock, CreditCard, PackageCheck, Truck } from "lucide-react";
import { InfoCard, InfoPage, InfoSection } from "@/components/content/InfoPage";
import { Button } from "@/components/ui/Button";
import { siteContacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Доставка и оплата",
  description: "Условия доставки, сборки и оплаты мебели Зона Комфорта."
};

const steps = [
  {
    icon: PackageCheck,
    title: "Подтверждаем состав",
    text: "Менеджер проверяет товары, размеры, материалы, адрес и удобное время связи."
  },
  {
    icon: Truck,
    title: "Согласуем доставку",
    text: "Подбираем дату, подъём, сборку и дополнительные условия для объекта."
  },
  {
    icon: CreditCard,
    title: "Фиксируем оплату",
    text: "После подтверждения заказа доступна оплата картой, наличными или по счёту."
  },
  {
    icon: Clock,
    title: "Передаём в работу",
    text: "Сообщаем срок поставки и остаёмся на связи до полной сборки мебели."
  }
];

export default function DeliveryPage() {
  return (
    <InfoPage
      eyebrow="Покупателям"
      title="Доставка и оплата"
      description="Каталог не списывает оплату онлайн. Сначала мы подтверждаем подборку, наличие, материалы и условия доставки, затем оформляем заказ удобным способом."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <InfoCard key={step.title}>
            <span className="grid h-12 w-12 place-items-center rounded-[12px] border border-bronze-200/25 text-bronze-100">
              <step.icon size={22} aria-hidden />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-ivory">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-mist">{step.text}</p>
          </InfoCard>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <InfoSection title="Доставка">
          <p>
            По Москве и Московской области доставка рассчитывается после подтверждения габаритов,
            адреса, этажа, лифта и необходимости сборки. Для регионов подбираем транспортную
            компанию и заранее согласуем упаковку.
          </p>
          <p>
            Если товар изготавливается под заказ, менеджер отдельно фиксирует срок производства и
            поставки до внесения оплаты.
          </p>
        </InfoSection>

        <InfoSection title="Оплата">
          <p>
            Оплата производится после согласования заказа: банковской картой, наличными при
            оформлении в шоуруме или по счёту для юридических лиц.
          </p>
          <p>
            Цены на сайте являются ориентировочными до подтверждения комплектации, ткани, размера и
            актуального наличия.
          </p>
        </InfoSection>
      </div>

      <InfoCard className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-3xl text-ivory">Нужен расчёт доставки?</h2>
          <p className="mt-3 leading-7 text-mist">
            Напишите нам адрес и список товаров. Подготовим понятную смету до оформления заказа.
          </p>
          <p className="mt-2 text-sm text-mist">{siteContacts.phone} · {siteContacts.email}</p>
        </div>
        <Button href="/contacts">Связаться</Button>
      </InfoCard>
    </InfoPage>
  );
}
