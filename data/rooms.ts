export type RoomIdea = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const roomIdeas: RoomIdea[] = [
  {
    slug: "gostinaya",
    title: "Гостиная",
    description: "Композиции с диванами, витринами и мягкими акцентами.",
    image: "/images/generated/rooms/gostinaya.png"
  },
  {
    slug: "spalnya",
    title: "Спальня",
    description: "Тихие сценарии сна, хранения и вечернего света.",
    image: "/images/generated/rooms/spalnya.png"
  },
  {
    slug: "kuhnya",
    title: "Кухня",
    description: "Кухни-гостиные, острова и вертикальное хранение.",
    image: "/images/generated/rooms/kuhnya.png"
  },
  {
    slug: "kabinet",
    title: "Кабинет",
    description: "Эргономика, приватность и статусная отделка.",
    image: "/images/generated/rooms/kabinet.png"
  },
  {
    slug: "prihozhaya",
    title: "Прихожая",
    description: "Хранение и визуальный порядок с первого шага.",
    image: "/images/generated/rooms/prihozhaya.png"
  },
  {
    slug: "detskaya",
    title: "Детская",
    description: "Безопасные модули и спокойная палитра для роста.",
    image: "/images/generated/rooms/detskaya.png"
  }
];
