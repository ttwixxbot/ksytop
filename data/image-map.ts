import type { CategorySlug } from "./categories";

export const generatedProductImages: Record<CategorySlug, string[]> = {
  sofas: [
    "/images/generated/products/sofas-1.png",
    "/images/generated/products/sofas-2.png",
    "/images/generated/products/sofas-3.png",
    "/images/generated/products/sofas-4.png"
  ],
  beds: [
    "/images/generated/products/beds-1.png",
    "/images/generated/products/beds-2.png",
    "/images/generated/products/beds-3.png",
    "/images/generated/products/beds-4.png"
  ],
  kitchens: [
    "/images/generated/products/kitchens-1.png",
    "/images/generated/products/kitchens-2.png",
    "/images/generated/products/kitchens-3.png",
    "/images/generated/products/kitchens-4.png"
  ],
  wardrobes: [
    "/images/generated/products/wardrobes-1.png",
    "/images/generated/products/wardrobes-2.png",
    "/images/generated/products/wardrobes-3.png",
    "/images/generated/products/wardrobes-4.png"
  ],
  "office-chairs": [
    "/images/generated/products/office-chairs-1.png",
    "/images/generated/products/office-chairs-2.png",
    "/images/generated/products/office-chairs-3.png",
    "/images/generated/products/office-chairs-4.png"
  ],
  "bedside-tables": [
    "/images/generated/products/bedside-tables-1.png",
    "/images/generated/products/bedside-tables-2.png",
    "/images/generated/products/bedside-tables-3.png",
    "/images/generated/products/bedside-tables-4.png"
  ],
  bedrooms: [
    "/images/generated/products/bedrooms-1.png",
    "/images/generated/products/bedrooms-2.png",
    "/images/generated/products/bedrooms-3.png",
    "/images/generated/products/bedrooms-4.png"
  ]
};

export const getGeneratedProductImages = (category: CategorySlug, seed: string) => {
  const images = generatedProductImages[category];
  const numericSeed = Number(seed.replace(/\D/g, "")) || 1;
  const offset = (numericSeed - 1) % images.length;

  return [
    images[offset],
    images[(offset + 1) % images.length],
    images[(offset + 2) % images.length],
    images[(offset + 3) % images.length]
  ];
};
