import type { Metadata } from "next";
import { InfoCard, InfoPage, InfoSection } from "@/components/content/InfoPage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Гарантия",
  description: "Гарантийные условия на мебель, фурнитуру и сборку Зона Комфорта."
};

const warrantyItems = [
  "Корпусная мебель, кровати, шкафы и кухонные системы — до 5 лет в зависимости от модели и комплектации.",
  "Механизмы трансформации, петли, направляющие и подъёмные системы — по гарантийным условиям производителя фурнитуры.",
  "Сборка и монтаж — гарантия на выполненные работы при соблюдении условий эксплуатации.",
  "Ткани, кожа, декоративные покрытия и натуральные материалы требуют ухода по памятке, которую менеджер передаёт при заказе."
];

export default function WarrantyPage() {
  return (
    <InfoPage
      eyebrow="Сервис"
      title="Гарантия"
      description="Мы фиксируем комплектацию, материалы и гарантийные условия до оформления заказа, чтобы обслуживание было прозрачным и спокойным."
    >
      <InfoCard>
        <h2 className="font-display text-3xl text-ivory">Что входит в гарантию</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {warrantyItems.map((item) => (
            <p key={item} className="rounded-[12px] border border-bronze-200/14 bg-ivory/[0.03] p-4 text-sm leading-6 text-mist">
              {item}
            </p>
          ))}
        </div>
      </InfoCard>

      <div className="grid gap-5 lg:grid-cols-2">
        <InfoSection title="Как обратиться">
          <p>
            Сохраните номер заказа, фотографии изделия и описание ситуации. Напишите нам через
            страницу контактов или на почту, и менеджер передаст обращение сервисному специалисту.
          </p>
          <p>
            Если требуется осмотр на объекте, мы согласуем время визита и заранее сообщим порядок
            дальнейших действий.
          </p>
        </InfoSection>

        <InfoSection title="Когда гарантия не применяется">
          <p>
            Гарантия не распространяется на повреждения из-за неправильной сборки сторонними
            специалистами, нарушений условий эксплуатации, воздействия влаги, перегрева,
            механических ударов и самостоятельного изменения конструкции.
          </p>
        </InfoSection>
      </div>

      <InfoCard className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-3xl text-ivory">Нужна сервисная консультация?</h2>
          <p className="mt-3 leading-7 text-mist">
            Подготовьте фото, номер заказа и краткое описание. Мы подскажем следующий шаг.
          </p>
        </div>
        <Button href="/contacts">Написать</Button>
      </InfoCard>
    </InfoPage>
  );
}
