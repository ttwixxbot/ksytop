export type CategorySlug =
  | "kitchens"
  | "sofas"
  | "beds"
  | "wardrobes"
  | "office-chairs"
  | "bedside-tables"
  | "bedrooms";

export type Category = {
  slug: CategorySlug;
  name: string;
  title: string;
  description: string;
  image: string;
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "kitchens",
    name: "Кухни",
    title: "Кухни премиум-класса",
    description:
      "Проектные кухни с выразительными фасадами, тихой фурнитурой и продуманной эргономикой для семейных вечеров и камерных ужинов.",
    image: "/images/generated/categories/kitchens.png",
    accent: "Тёплая бронза"
  },
  {
    slug: "sofas",
    name: "Диваны",
    title: "Диваны для спокойного центра дома",
    description:
      "Глубокая посадка, фактурные ткани, модульные формы и мягкая геометрия для гостиных, где хочется задержаться.",
    image: "/images/generated/categories/sofas.png",
    accent: "Мягкий графит"
  },
  {
    slug: "beds",
    name: "Кровати",
    title: "Кровати с гостиничным комфортом",
    description:
      "Изголовья с акцентной строчкой, устойчивые основания и спокойная палитра для спальни без визуального шума.",
    image: "/images/generated/categories/beds.png",
    accent: "Ivory glow"
  },
  {
    slug: "wardrobes",
    name: "Шкафы",
    title: "Шкафы и гардеробные системы",
    description:
      "Скрытые системы хранения, стеклянные вставки, подсветка и конфигурации под реальные сценарии жизни.",
    image: "/images/generated/categories/wardrobes.png",
    accent: "Тёмный металл"
  },
  {
    slug: "office-chairs",
    name: "Офисные кресла",
    title: "Офисные кресла для долгой работы",
    description:
      "Эргономичные кресла с премиальной отделкой, точной поддержкой и настроением частного кабинета.",
    image: "/images/generated/categories/office-chairs.png",
    accent: "Чёрная кожа"
  },
  {
    slug: "bedside-tables",
    name: "Прикроватные тумбы",
    title: "Прикроватные тумбы и акцентные модули",
    description:
      "Компактная функциональность, спокойные пропорции и деликатная бронзовая фурнитура рядом с кроватью.",
    image: "/images/generated/categories/bedside-tables.png",
    accent: "Латунная грань"
  },
  {
    slug: "bedrooms",
    name: "Спальни",
    title: "Готовые спальни в единой эстетике",
    description:
      "Комплекты, где кровать, хранение, тумбы и свет соединяются в цельное приватное пространство.",
    image: "/images/generated/categories/bedrooms.png",
    accent: "Тихий люкс"
  }
];

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryName = (slug: CategorySlug) =>
  categories.find((category) => category.slug === slug)?.name ?? slug;
