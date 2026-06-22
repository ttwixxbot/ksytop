import type { Metadata } from "next";
import { Award, Gem, Handshake, Ruler } from "lucide-react";
import { AdvantageCard } from "@/components/home/AdvantageCard";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "О компании",
  description: "История, миссия и подход Зона Комфорта к подбору премиальной мебели."
};

const values = [
  {
    icon: Gem,
    title: "Честные материалы",
    text: "Показываем образцы, фактуры и реальные сценарии ухода."
  },
  {
    icon: Ruler,
    title: "Точная посадка",
    text: "Учитываем размеры, проходы, свет и привычки семьи."
  },
  {
    icon: Handshake,
    title: "Сопровождение",
    text: "Не бросаем после выбора: ведём заказ до сборки."
  },
  {
    icon: Award,
    title: "Опыт шоурума",
    text: "Собираем интерьер как цельную композицию, а не набор товаров."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section-shell grid gap-10 !pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase text-bronze-100">О бренде</p>
          <h1 className="page-title mt-3">История «Зоны Комфорта»</h1>
          <p className="mt-6 text-lg leading-8 text-mist">
            Мы выросли из камерного шоурума, где мебель подбирали не по остаткам на складе, а по
            ощущению будущего пространства. Поэтому в каталоге важны не только цены и размеры, но и
            атмосфера: как предмет выглядит вечером, как сочетается с тканями, как живёт в комнате.
          </p>
        </div>
        <div className="glass-card relative overflow-hidden p-3">
          <img
            src={assetPath("/images/generated/collections/gostinaya-so-stilem.png")}
            alt="Премиальная гостиная Зона Комфорта"
            className="aspect-[1.45] w-full rounded-[12px] object-cover"
          />
        </div>
      </section>

      <section className="section-shell grid gap-5 md:grid-cols-2">
        <div className="glass-card p-7">
          <h2 className="font-display text-4xl text-ivory">Миссия</h2>
          <p className="mt-5 leading-8 text-mist">
            Делать выбор мебели спокойным, точным и вдохновляющим. Клиент видит не абстрактный
            каталог, а будущий интерьер с понятными материалами, сроками и ролью каждого предмета.
          </p>
        </div>
        <div className="glass-card p-7">
          <h2 className="font-display text-4xl text-ivory">Подход</h2>
          <p className="mt-5 leading-8 text-mist">
            Мы начинаем с планировки и сценариев жизни, затем собираем категории, коллекции и
            отдельные предметы в единую систему: от дивана и кухни до прикроватной тумбы.
          </p>
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="mb-8">
          <p className="text-sm uppercase text-bronze-100">Почему нам доверяют</p>
          <h2 className="mt-2 font-display text-4xl text-ivory md:text-5xl">Принципы подбора</h2>
        </div>
        <div className="glass-card grid gap-6 p-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <AdvantageCard key={value.title} {...value} />
          ))}
        </div>
      </section>
    </>
  );
}
