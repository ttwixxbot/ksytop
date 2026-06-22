export type Collection = {
  slug: string;
  title: string;
  description: string;
  image: string;
  room: string;
};

export const collections: Collection[] = [
  {
    slug: "spalnya-v-garmonii",
    title: "Спальня в гармонии",
    description: "Мягкие ткани, приглушённый свет и спокойные формы для личного пространства.",
    image: "/images/generated/collections/spalnya-v-garmonii.png",
    room: "Спальня"
  },
  {
    slug: "kuhni-premium-klassa",
    title: "Кухни премиум-класса",
    description: "Фасады, острова и хранение, которые выглядят цельно в открытой планировке.",
    image: "/images/generated/collections/kuhni-premium-klassa.png",
    room: "Кухня"
  },
  {
    slug: "ofis-novogo-urovnya",
    title: "Офис нового уровня",
    description: "Кресла, рабочие столы и модули, которые помогают держать фокус.",
    image: "/images/generated/collections/ofis-novogo-urovnya.png",
    room: "Кабинет"
  },
  {
    slug: "gostinaya-so-stilem",
    title: "Гостиная со стилем",
    description: "Диваны, витрины и акценты для пространства, где собираются близкие.",
    image: "/images/generated/collections/gostinaya-so-stilem.png",
    room: "Гостиная"
  },
  {
    slug: "sovremennaya-prihozhaya",
    title: "Современная прихожая",
    description: "Системы хранения, тумбы и зеркала, которые задают тон с порога.",
    image: "/images/generated/collections/sovremennaya-prihozhaya.png",
    room: "Прихожая"
  },
  {
    slug: "detskaya-komnata",
    title: "Детская комната",
    description: "Спокойные материалы, безопасные формы и хранение на каждый день.",
    image: "/images/generated/collections/detskaya-komnata.png",
    room: "Детская"
  }
];

export const getCollection = (slug: string) =>
  collections.find((collection) => collection.slug === slug);
