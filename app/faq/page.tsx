import type { Metadata } from "next";
import { InfoCard, InfoPage } from "@/components/content/InfoPage";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Вопросы и ответы",
  description: "Ответы на частые вопросы о каталоге, заявках, оплате, доставке и материалах."
};

const questions = [
  {
    question: "Можно ли купить товар сразу на сайте?",
    answer:
      "Сайт работает как каталог и заявка на подбор. Мы не принимаем онлайн-оплату: менеджер сначала подтверждает наличие, материалы, размеры и доставку."
  },
  {
    question: "Цены на сайте окончательные?",
    answer:
      "Цены помогают ориентироваться в бюджете. Итоговая стоимость зависит от выбранной ткани, цвета, комплектации, доставки, сборки и актуального наличия."
  },
  {
    question: "Можно подобрать мебель под планировку?",
    answer:
      "Да. Отправьте размеры комнаты, фото или план, а дизайнер-консультант предложит подходящие категории, материалы и комплектацию."
  },
  {
    question: "Есть ли доставка в регионы?",
    answer:
      "Да, после подтверждения заказа мы подбираем транспортную компанию и согласуем упаковку, сроки и стоимость."
  },
  {
    question: "Можно ли заказать мебель в другом цвете?",
    answer:
      "Для многих моделей доступны альтернативные ткани, фасады и оттенки. Возможность изменения зависит от категории и производителя."
  },
  {
    question: "Как работает заявка?",
    answer:
      "Добавьте товары в подборку, заполните имя и телефон. Сайт подготовит письмо на почту шоурума, а консультант свяжется с вами для уточнения деталей."
  }
];

export default function FaqPage() {
  return (
    <InfoPage
      eyebrow="Помощь"
      title="Вопросы и ответы"
      description="Собрали короткие ответы на основные вопросы, которые появляются до оформления заявки."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {questions.map((item) => (
          <InfoCard key={item.question}>
            <h2 className="text-xl font-semibold text-ivory">{item.question}</h2>
            <p className="mt-3 text-sm leading-6 text-mist">{item.answer}</p>
          </InfoCard>
        ))}
      </div>

      <InfoCard className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-display text-3xl text-ivory">Не нашли ответ?</h2>
          <p className="mt-3 leading-7 text-mist">
            Напишите нам, и консультант поможет с конкретной моделью, комнатой или материалом.
          </p>
        </div>
        <Button href="/contacts">Задать вопрос</Button>
      </InfoCard>
    </InfoPage>
  );
}
