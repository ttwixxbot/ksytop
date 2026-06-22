import type { Metadata } from "next";
import { InfoCard, InfoPage, InfoSection } from "@/components/content/InfoPage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Возврат и обмен",
  description: "Порядок возврата, обмена и проверки мебели Зона Комфорта."
};

const checklist = [
  "Свяжитесь с нами и опишите ситуацию.",
  "Приложите номер заказа, фотографии упаковки и изделия.",
  "Сохраните комплектацию, документы и, если возможно, транспортную упаковку.",
  "Дождитесь согласования способа возврата, обмена или сервисного осмотра."
];

export default function ReturnsPage() {
  return (
    <InfoPage
      eyebrow="Покупателям"
      title="Возврат и обмен"
      description="Мы разбираем каждое обращение по существу: проверяем комплектацию, состояние товара, условия заказа и требования законодательства Российской Федерации."
    >
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <InfoSection title="Товары стандартной комплектации">
          <p>
            Если товар не был в использовании, сохранён товарный вид, потребительские свойства и
            документы, мы подскажем доступный порядок обмена или возврата.
          </p>
          <p>
            Для мебели, которая имеет следы сборки, эксплуатации или повреждения, сначала
            проводится осмотр и согласование дальнейших действий.
          </p>
        </InfoSection>

        <InfoSection title="Индивидуальные изделия">
          <p>
            Мебель, изготовленная или изменённая по индивидуальным размерам, материалам,
            конфигурации или цвету, рассматривается отдельно. До запуска заказа менеджер фиксирует
            параметры, чтобы снизить риск ошибки.
          </p>
          <p>
            Если проблема связана с производственным дефектом, повреждением при доставке или
            неполной комплектацией, обращение передаётся в сервис независимо от индивидуальности
            изделия.
          </p>
        </InfoSection>
      </div>

      <InfoCard>
        <h2 className="font-display text-3xl text-ivory">Что подготовить для обращения</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {checklist.map((item) => (
            <div key={item} className="rounded-[12px] border border-bronze-200/14 bg-ivory/[0.03] p-4 text-sm leading-6 text-mist">
              {item}
            </div>
          ))}
        </div>
      </InfoCard>

      <InfoCard className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-3xl text-ivory">Есть вопрос по заказу?</h2>
          <p className="mt-3 leading-7 text-mist">
            Напишите нам до отправки товара: так мы быстрее подберём корректное решение.
          </p>
        </div>
        <Button href="/contacts">Связаться</Button>
      </InfoCard>
    </InfoPage>
  );
}
