import type { CategorySlug } from "./categories";

export type RoomIdea = {
  slug: string;
  title: string;
  description: string;
  image: string;
  categorySlugs: CategorySlug[];
};

export const roomIdeas: RoomIdea[] = [
  {
    slug: "gostinaya",
    title: "Гостиная",
    description: "Композиции с диванами, витринами и мягкими акцентами.",
    image: "/images/generated/rooms/gostinaya.png",
    categorySlugs: ["sofas", "wardrobes", "bedside-tables"]
  },
  {
    slug: "spalnya",
    title: "Спальня",
    description: "Тихие сценарии сна, хранения и вечернего света.",
    image: "/images/generated/rooms/spalnya.png",
    categorySlugs: ["bedrooms", "beds", "bedside-tables", "wardrobes"]
  },
  {
    slug: "kuhnya",
    title: "Кухня",
    description: "Кухни-гостиные, острова и вертикальное хранение.",
    image: "/images/generated/rooms/kuhnya.png",
    categorySlugs: ["kitchens"]
  },
  {
    slug: "kabinet",
    title: "Кабинет",
    description: "Эргономика, приватность и статусная отделка.",
    image: "/images/generated/rooms/kabinet.png",
    categorySlugs: ["office-chairs", "wardrobes"]
  },
  {
    slug: "prihozhaya",
    title: "Прихожая",
    description: "Хранение и визуальный порядок с первого шага.",
    image: "/images/generated/rooms/prihozhaya.png",
    categorySlugs: ["wardrobes", "bedside-tables"]
  },
  {
    slug: "detskaya",
    title: "Детская",
    description: "Безопасные модули и спокойная палитра для роста.",
    image: "/images/generated/rooms/detskaya.png",
    categorySlugs: ["beds", "wardrobes", "bedside-tables"]
  }
];

export const getRoomIdea = (slug: string) => roomIdeas.find((idea) => idea.slug === slug);
