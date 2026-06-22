import { Gem, Headphones, ShieldCheck, Truck, Wand2 } from "lucide-react";
import { HeroShowroom } from "@/components/home/HeroShowroom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { roomIdeas } from "@/data/rooms";
import { CollectionCard } from "@/components/home/CollectionCard";
import { RoomIdeaCard } from "@/components/home/RoomIdeaCard";
import { AdvantageCard } from "@/components/home/AdvantageCard";
import { Button } from "@/components/ui/Button";

const advantages = [
  {
    icon: Gem,
    title: "Премиальное качество",
    text: "Материалы и фурнитура, которые держат форму и тактильность."
  },
  {
    icon: ShieldCheck,
    title: "Гарантия до 5 лет",
    text: "Расширенная гарантия на корпус, механизмы и мягкие модули."
  },
  {
    icon: Wand2,
    title: "Индивидуальный подход",
    text: "Подбираем мебель под планировку, сценарии и свет."
  },
  {
    icon: Truck,
    title: "Доставка и сборка",
    text: "Аккуратная доставка и профессиональная сборка на объекте."
  },
  {
    icon: Headphones,
    title: "Забота о клиентах",
    text: "Сопровождаем выбор от первой идеи до готового пространства."
  }
];

export default function HomePage() {
  const popularProducts = products.filter((item) => item.isPopular).slice(0, 6);

  return (
    <>
      <HeroShowroom />

      <AnimatedSection className="!pt-8 md:!pt-10">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase text-bronze-100">Выбор дизайнеров</p>
            <h2 className="mt-2 font-display text-4xl text-ivory md:text-5xl">Популярные товары</h2>
          </div>
          <Button href="/catalog" variant="secondary">
            Смотреть каталог
          </Button>
        </div>
        <ProductGrid products={popularProducts} />
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase text-bronze-100">Готовые сценарии</p>
            <h2 className="mt-2 font-display text-4xl text-ivory md:text-5xl">Коллекции</h2>
          </div>
          <Button href="/collections" variant="ghost">
            Смотреть все коллекции
          </Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {collections.slice(0, 4).map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
          <div>
            <p className="text-sm uppercase text-bronze-100">Идеи для дома</p>
            <h2 className="mt-2 font-display text-4xl text-ivory md:text-5xl">
              Подберите мебель для каждой комнаты
            </h2>
            <p className="mt-5 leading-7 text-mist">
              Смотрите готовые сочетания для гостиной, спальни, кухни, кабинета и прихожей.
            </p>
            <Button href="/ideas" variant="secondary" className="mt-7">
              Смотреть идеи
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roomIdeas.map((idea) => (
              <RoomIdeaCard key={idea.slug} idea={idea} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="glass-card grid gap-6 p-5 md:grid-cols-2 lg:grid-cols-5">
          {advantages.map((advantage) => (
            <AdvantageCard key={advantage.title} {...advantage} />
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
